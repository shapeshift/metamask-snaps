import { OsmosisSignedTx, OsmosisSignTx } from '@shapeshiftoss/hdwallet-core'

import { logger } from '../../lib/logger'
import { getProvider } from '.././common'

const moduleLogger = logger.child({ namespace: ['utils', 'osmosis', 'OsmosisRPCRequests.ts'] })

/**
 * ? These helper functions could be moved into the snap itself, but providing these native methods would
 * violate the canonical RPC interface standard. Since we're using them here to make the interface simpler,
 * maybe it's prudent to export these (with typed parameters and returns) from the snap module alongside
 * the standard RPC methods.  */

export const osmosisGetAddress = async (): Promise<string | undefined> => {
  const provider = getProvider()
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
  const provider = getProvider()
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
