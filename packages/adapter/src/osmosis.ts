import {
  OsmosisBroadcastTransactionAdapterParams,
  OsmosisBroadcastTransactionResponse,
  OsmosisGetAddressAdapterParams,
  OsmosisGetAddressResponse,
  OsmosisSignTransactionAdapterParams,
  OsmosisSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Osmosis.ts'] })

export const osmosisGetAddress = async (
  params: OsmosisGetAddressAdapterParams,
): Promise<OsmosisGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'osmosis_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'osmosisGetAddress' }, `osmosis_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const osmosisSignTransaction = async (
  params: OsmosisSignTransactionAdapterParams,
): Promise<OsmosisSignTransactionResponse> => {
  const { transaction, snapId } = params
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
    return Promise.reject(error)
  }
}

export const osmosisBroadcastTransaction = async (
  params: OsmosisBroadcastTransactionAdapterParams,
): Promise<OsmosisBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'osmosis_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'OsmosisBroadcastTransaction' },
      `osmosis_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
