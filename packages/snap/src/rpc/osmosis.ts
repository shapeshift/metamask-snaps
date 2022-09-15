import {
  OsmosisBroadcastTransactionParams,
  OsmosisBroadcastTransactionResponse,
  OsmosisGetAddressParams,
  OsmosisSignTransactionParams,
  OsmosisSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'Osmosis.ts'] })

export const osmosisGetAddress = async ({
  addressParams,
}: OsmosisGetAddressParams): Promise<string> => {
  const { addressNList } = addressParams
  try {
    const signer = await getHDWalletNativeSigner('Osmo')
    if (signer === null) {
      throw new Error('Could not initialize Osmosis signer')
    }
    const address = await signer.osmosisGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'osmosisGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const osmosisSignTransaction = async ({
  transaction,
}: OsmosisSignTransactionParams): Promise<OsmosisSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Osmo')
    if (signer === null) {
      throw new Error('Could not initialize Osmosis signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Osmosis Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.osmosisSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'osmosisSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const osmosisBroadcastTransaction = async ({
  transaction,
  baseUrl,
}: OsmosisBroadcastTransactionParams): Promise<OsmosisBroadcastTransactionResponse> => {
  try {
    const config = new unchained.osmosis.Configuration({
      basePath: baseUrl,
    })
    const client = new unchained.osmosis.V1Api(config)
    return await client.sendTx({ body: { rawTx: transaction.serialized } })
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'osmosisBroadcastTransaction' }, error)
    return Promise.reject(error)
  }
}
