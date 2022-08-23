import { logger } from './lib/logger'
import { CosmosSignedTx, CosmosSignTx } from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Cosmos.ts'] })

export const cosmosGetAddress = async (): Promise<string | undefined> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'cosmos_getAddress',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'cosmosGetAddress' }, `cosmos_getAddress RPC call failed.`)
  }
  return undefined
}

export const cosmosSignTransaction = async (
  transaction: CosmosSignTx,
): Promise<CosmosSignedTx | undefined> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'cosmos_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'cosmosSignTransaction' },
      `cosmos_signTransaction RPC call failed.`,
    )
  }
  return undefined
}
