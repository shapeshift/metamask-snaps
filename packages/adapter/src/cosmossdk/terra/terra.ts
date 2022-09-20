import {
  TerraBroadcastTransactionAdapterParams,
  TerraBroadcastTransactionResponse,
  TerraGetAddressAdapterParams,
  TerraGetAddressResponse,
  TerraSignTransactionAdapterParams,
  TerraSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Terra.ts'] })

export const terraGetAddress = async (
  params: TerraGetAddressAdapterParams,
): Promise<TerraGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'terra_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'terraGetAddress' }, `terra_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const terraSignTransaction = async (
  params: TerraSignTransactionAdapterParams,
): Promise<TerraSignTransactionResponse> => {
  const { transaction, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'terra_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'terraSignTransaction' },
      `terra_signTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}

export const terraBroadcastTransaction = async (
  params: TerraBroadcastTransactionAdapterParams,
): Promise<TerraBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'terra_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'terraBroadcastTransaction' },
      `terra_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
