import {
  BinanceSignedTx,
  BinanceSignTx,
  bip32ToAddressNList,
  slip44ByCoin,
} from '@shapeshiftoss/hdwallet-core'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Binance.ts'] })

export const binanceGetAddress = async (account = 0, addressIndex = 0): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner('Binance')
    if (signer === null) {
      throw new Error('Could not initialize Binance signer')
    }
    const address = await signer.binanceGetAddress({
      addressNList: bip32ToAddressNList(
        `m/44'/${slip44ByCoin('Binance')}'/${account}'/0/${addressIndex}`,
      ),
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'binanceGetAddress' }, error)
    throw error
  }
}

export const binanceSignTransaction = async (
  transaction: BinanceSignTx,
): Promise<BinanceSignedTx> => {
  try {
    const signer = await getHDWalletNativeSigner('Binance')
    if (signer === null) {
      throw new Error('Could not initialize Binance signer')
    }
    const signedTransaction = await signer.binanceSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'binanceSignTransaction' }, error)
    throw error
  }
}
/* Disabled pending Unchained support */
// export const binanceBroadcastTransaction = async (message: BinanceSignedTx): Promise<string | undefined> => {
//   try {
//     const config = new unchained.binance.Configuration({
//       basePath: process.env.UNCHAINED_BINANCE_HTTP_URL,
//     })
//     const client = new unchained.binance.V1Api(config)
//     const txid = client.sendTx({ body: { rawTx: message.serialized } })
//     return txid
//   } catch (error) {
//     moduleLogger.error(message, { fn: 'binanceBroadcastMessage' }, error)
//     return undefined
//   }
// }
