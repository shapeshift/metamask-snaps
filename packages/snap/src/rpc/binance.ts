import {
  BinanceBroadcastTransactionParams,
  BinanceBroadcastTransactionResponse,
  BinanceGetAddressParams,
  BinanceSignTransactionParams,
  BinanceSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Binance.ts'] })

export const binanceGetAddress = async ({addressParams}: BinanceGetAddressParams): Promise<string> => {
  const { addressNList } = addressParams
  try {
    const signer = await getHDWalletNativeSigner('Binance')
    if (signer === null) {
      throw new Error('Could not initialize Binance signer')
    }
    const address = await signer.binanceGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'binanceGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const binanceSignTransaction = async (
  {transaction}: BinanceSignTransactionParams,
): Promise<BinanceSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Binance')
    if (signer === null) {
      throw new Error('Could not initialize Binance signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Binance Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.binanceSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'binanceSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const binanceBroadcastTransaction = async ({}: BinanceBroadcastTransactionParams): Promise<BinanceBroadcastTransactionResponse> => {
  return Promise.reject("Disabled pending Unchained support.")
}
