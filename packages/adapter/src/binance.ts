import { logger } from './lib/logger'
import { BinanceGetAddressParams, BinanceSignedTransaction, BinanceSignTransaction } from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Binance.ts'] })

export const binanceGetAddress = async (
  params: BinanceGetAddressParams
): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'binance_getAddress',
      params: [params]
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'binanceGetAddress' }, `binance_getAddress RPC call failed.`)
  }
  return null
}

export const binanceSignTransaction = async (
  transaction: BinanceSignTransaction,
): Promise<BinanceSignedTransaction | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'binance_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'binanceSignTransaction' },
      `binance_signTransaction RPC call failed.`,
    )
  }
  return null
}

export const binanceBroadcastTransaction = async (
  transaction: BinanceSignedTransaction,
): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'binance_broadcastTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'binanceBroadcastTransaction' },
      `binance_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
