import { logger } from './lib/logger'
import { CosmosGetAddressParams, CosmosSignedTransaction, CosmosSignTransaction } from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Cosmos.ts'] })

export const cosmosGetAddress = async (params: CosmosGetAddressParams): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'cosmos_getAddress',
      params: [params]
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'cosmosGetAddress' }, `cosmos_getAddress RPC call failed.`)
  }
  return null
}

export const cosmosSignTransaction = async (
  transaction: CosmosSignTransaction,
): Promise<CosmosSignedTransaction | null> => {
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
  return null
}

export const cosmosBroadcastTransaction = async (
  transaction: CosmosSignedTransaction,
): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'cosmos_broadcastTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'cosmosBroadcastTransaction' },
      `cosmos_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
