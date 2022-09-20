import {
  CosmosBroadcastTransactionAdapterParams,
  CosmosBroadcastTransactionResponse,
  CosmosGetAddressAdapterParams,
  CosmosGetAddressResponse,
  CosmosSignTransactionAdapterParams,
  CosmosSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Cosmos.ts'] })

export const cosmosGetAddress = async (
  params: CosmosGetAddressAdapterParams,
): Promise<CosmosGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'cosmos_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'cosmosGetAddress' }, `cosmos_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const cosmosSignTransaction = async (
  params: CosmosSignTransactionAdapterParams,
): Promise<CosmosSignTransactionResponse> => {
  const { transaction, snapId } = params
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
    return Promise.reject(error)
  }
}

export const cosmosBroadcastTransaction = async (
  params: CosmosBroadcastTransactionAdapterParams,
): Promise<CosmosBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'cosmos_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'cosmosBroadcastTransaction' },
      `cosmos_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
