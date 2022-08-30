import {
  CosmosBroadcastTransactionResponse,
  CosmosGetAddressParams,
  CosmosGetAddressResponse,
  CosmosSignedTransaction,
  CosmosSignTransaction,
  CosmosSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Cosmos.ts'] })

export const cosmosGetAddress = async (
  params: CosmosGetAddressParams,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<CosmosGetAddressResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'cosmos_getAddress',
        params: { params },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'cosmosGetAddress' }, `cosmos_getAddress RPC call failed.`)
  }
  return null
}

export const cosmosSignTransaction = async (
  transaction: CosmosSignTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<CosmosSignTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'cosmos_signTransaction',
        params: { transaction },
      },
      snapId,
    )
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
  snapId: string = DEFAULT_SNAP_ID,
): Promise<CosmosBroadcastTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'cosmos_broadcastTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'cosmosBroadcastTransaction' },
      `cosmos_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
