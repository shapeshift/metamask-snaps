
import {
  CosmosBroadcastTransactionResponse,
  CosmosBroadcastTransactionParams,
  CosmosSignTransactionResponse,
  CosmosGetAddressParams,
  CosmosSignTransactionParams,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Cosmos.ts'] })

export const cosmosGetAddress = async ({
  addressParams,
}: CosmosGetAddressParams): Promise<string> => {
  const { addressNList } = addressParams
  try {
    const signer = await getHDWalletNativeSigner('Atom')
    if (signer === null) {
      throw new Error('Could not initialize Cosmos signer')
    }
    const address = await signer.cosmosGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'cosmosGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const cosmosSignTransaction = async (
  {transaction}: CosmosSignTransactionParams,
): Promise<CosmosSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Atom')
    if (signer === null) {
      throw new Error('Could not initialize Cosmos signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Cosmos Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.cosmosSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'cosmosSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const cosmosBroadcastTransaction = async (
  {transaction, baseUrl}: CosmosBroadcastTransactionParams
): Promise<CosmosBroadcastTransactionResponse> => {
  try {
    const config = new unchained.cosmos.Configuration({
      basePath: baseUrl,
    })
    const client = new unchained.cosmos.V1Api(config)
    return await client.sendTx({ body: { rawTx: transaction.serialized } })
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'cosmosBroadcastTransaction' }, error)
    return Promise.reject(error)
  }
}
