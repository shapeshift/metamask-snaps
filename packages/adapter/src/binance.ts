import { logger } from './lib/logger'
import { BinanceSignedTx, BinanceSignTx } from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Binance.ts'] })

export const binanceGetAddress = async (): Promise<string | undefined> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'binance_getAddress',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'binanceGetAddress' }, `binance_getAddress RPC call failed.`)
  }
  return undefined
}

export const binanceSignTransaction = async (
  transaction: BinanceSignTx,
): Promise<BinanceSignedTx | undefined> => {
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
  return undefined
}
