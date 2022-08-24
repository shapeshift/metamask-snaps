import {
  bip32ToAddressNList,
  CosmosSignedTx,
  CosmosSignTx,
  slip44ByCoin,
} from '@shapeshiftoss/hdwallet-core'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Cosmos.ts'] })

export const cosmosGetAddress = async (account = 0, addressIndex = 0): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner('Cosmos')
    if (signer === null) {
      throw new Error('Could not initialize Cosmos signer')
    }
    const address = await signer.cosmosGetAddress({
      addressNList: bip32ToAddressNList(
        `m/44'/${slip44ByCoin('Atom')}'/${account}'/0/${addressIndex}`,
      ),
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'cosmosGetAddress' }, error)
    throw error
  }
}

export const cosmosSignTransaction = async (transaction: CosmosSignTx): Promise<CosmosSignedTx> => {
  try {
    const signer = await getHDWalletNativeSigner('Cosmos')
    if (signer === null) {
      throw new Error('Could not initialize Cosmos signer')
    }
    const signedTransaction = await signer.cosmosSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'cosmosSignTransaction' }, error)
    throw error
  }
}

export const cosmosBroadcastTransaction = async (
  message: CosmosSignedTx,
): Promise<string | undefined> => {
  try {
    const config = new unchained.cosmos.Configuration({
      basePath: process.env.UNCHAINED_COSMOS_HTTP_URL,
    })
    const client = new unchained.cosmos.V1Api(config)
    const txid = client.sendTx({ body: { rawTx: message.serialized } })
    return txid
  } catch (error) {
    moduleLogger.error(message, { fn: 'cosmosBroadcastMessage' }, error)
    return undefined
  }
}
