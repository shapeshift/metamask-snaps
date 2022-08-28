import { logger } from './lib/logger'
import { ThorchainGetAddressParams, ThorchainSignedTransaction, ThorchainSignTransaction } from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Thorchain.ts'] })

export const thorchainGetAddress = async (params:ThorchainGetAddressParams): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'thorchain_getAddress',
      params: [params]
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'thorchainGetAddress' },
      `thorchain_getAddress RPC call failed.`,
    )
  }
  return null
}

export const thorchainSignTransaction = async (
  transaction: ThorchainSignTransaction,
): Promise<ThorchainSignedTransaction | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'thorchain_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'thorchainSignTransaction' },
      `thorchain_signTransaction RPC call failed.`,
    )
  }
  return null
}

export const thorchainBroadcastTransaction = async (
  transaction: ThorchainSignedTransaction,
): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'thorchain_broadcastTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'ThorchainsBroadcastTransaction' },
      `thorchain_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}