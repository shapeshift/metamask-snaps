import {
  bip32ToAddressNList,
  OsmosisSignedTx,
  OsmosisSignTx,
  slip44ByCoin,
} from '@shapeshiftoss/hdwallet-core'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'Osmosis.ts'] })

export const osmosisGetAddress = async (account = 0, addressIndex = 0): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner('Osmosis')
    if (signer === null) {
      throw new Error('Could not initialize Osmosis signer')
    }
    const address = await signer.osmosisGetAddress({
      addressNList: bip32ToAddressNList(
        `m/44'/${slip44ByCoin('Osmo')}'/${account}'/0/${addressIndex}`,
      ),
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'osmosisGetAddress' }, error)
    throw error
  }
}

export const osmosisSignTransaction = async (
  transaction: OsmosisSignTx,
): Promise<OsmosisSignedTx> => {
  try {
    const signer = await getHDWalletNativeSigner('Osmosis')
    if (signer === null) {
      throw new Error('Could not initialize Osmosis signer')
    }
    const signedTransaction = await signer.osmosisSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'osmosisSignTransaction' }, error)
    throw error
  }
}

export const osmosisBroadcastTransaction = async (
  message: OsmosisSignedTx,
): Promise<string | undefined> => {
  try {
    const config = new unchained.osmosis.Configuration({
      basePath: process.env.UNCHAINED_OSMOSIS_HTTP_URL,
    })
    const client = new unchained.osmosis.V1Api(config)
    const txid = client.sendTx({ body: { rawTx: message.serialized } })
    return txid
  } catch (error) {
    moduleLogger.error(message, { fn: 'osmosisBroadcastMessage' }, error)
    return undefined
  }
}
