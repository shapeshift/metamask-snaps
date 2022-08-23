import { logger } from './lib/logger'
import { OsmosisSignedTx, OsmosisSignTx } from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Osmosis.ts'] })

export const osmosisGetAddress = async (): Promise<string | undefined> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'osmosis_getAddress',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'osmosisGetAddress' }, `osmosis_getAddress RPC call failed.`)
  }
  return undefined
}

export const osmosisSignTransaction = async (
  transaction: OsmosisSignTx,
): Promise<OsmosisSignedTx | undefined> => {
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
  return undefined
}
