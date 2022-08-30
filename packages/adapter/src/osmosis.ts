import {
  OsmosisBroadcastTransactionResponse,
  OsmosisGetAddressParams,
  OsmosisGetAddressResponse,
  OsmosisSignedTransaction,
  OsmosisSignTransaction,
  OsmosisSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Osmosis.ts'] })

export const osmosisGetAddress = async (
  params: OsmosisGetAddressParams,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<OsmosisGetAddressResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'osmosis_getAddress',
        params: { params },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'osmosisGetAddress' }, `osmosis_getAddress RPC call failed.`)
  }
  return null
}

export const osmosisSignTransaction = async (
  transaction: OsmosisSignTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<OsmosisSignTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'osmosis_signTransaction',
        params: { transaction },
      },
      snapId,
    )
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
  snapId: string = DEFAULT_SNAP_ID,
): Promise<OsmosisBroadcastTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'osmosis_broadcastTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'OsmosisBroadcastTransaction' },
      `osmosis_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
