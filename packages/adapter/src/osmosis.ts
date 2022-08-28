import { logger } from './lib/logger'
import { OsmosisGetAddressParams, OsmosisSignedTransaction, OsmosisSignTransaction } from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Osmosis.ts'] })

export const osmosisGetAddress = async (params: OsmosisGetAddressParams): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'osmosis_getAddress',
      params: [params]
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'osmosisGetAddress' }, `osmosis_getAddress RPC call failed.`)
  }
  return null
}

export const osmosisSignTransaction = async (
  transaction: OsmosisSignTransaction,
): Promise<OsmosisSignedTransaction | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'osmosis_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'osmosisSignTransaction' },
      `osmosis_signTransaction RPC call failed.`,
    )
  }
  return null
}

export const osmosisBroadcastTransaction = async (
  transaction: OsmosisSignedTransaction,
): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'osmosis_broadcastTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'OsmosisBroadcastTransaction' },
      `osmosis_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
