import { logger } from './lib/logger'
import { THORChainSignedTx, THORChainSignTx } from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Thorchain.ts'] })

export const thorchainGetAddress = async (): Promise<string | undefined> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'thorchain_getAddress',
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'thorchainGetAddress' },
      `thorchain_getAddress RPC call failed.`,
    )
  }
  return undefined
}

export const thorchainSignTransaction = async (
  transaction: THORChainSignTx,
): Promise<THORChainSignedTx | undefined> => {
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
  return undefined
}
