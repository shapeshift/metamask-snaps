import {
  BinanceBroadcastTransactionParams,
  BinanceBroadcastTransactionResponse,
  BinanceGetAddressParams,
  BinanceGetAddressResponse,
  BinanceSignTransactionParams,
  BinanceSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { BinanceSigner } from './BinanceSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'CosmosSDK', 'Binance', 'Handlers.ts'],
})

export const binanceGetAddress = async (
  params: BinanceGetAddressParams,
): Promise<BinanceGetAddressResponse> => {
  try {
    const binanceSigner = new BinanceSigner()
    await binanceSigner.initialize()
    return await binanceSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'binanceGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const binanceSignTransaction = async (
  params: BinanceSignTransactionParams,
): Promise<BinanceSignTransactionResponse> => {
  try {
    const binanceSigner = new BinanceSigner()
    await binanceSigner.initialize()
    return await binanceSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'binanceSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const binanceBroadcastTransaction = async (
  params: BinanceBroadcastTransactionParams /* eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars */,
): Promise<BinanceBroadcastTransactionResponse> => {
  try {
    const binanceSigner = new BinanceSigner()
    await binanceSigner.initialize()
    return await binanceSigner.broadcastTransaction()
  } catch (error) {
    moduleLogger.error({ fn: 'binanceSignTransaction' }, error)
    return Promise.reject(error)
  }
}
