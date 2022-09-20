import {
  ThorchainBroadcastTransactionAdapterParams,
  ThorchainBroadcastTransactionResponse,
  ThorchainGetAddressAdapterParams,
  ThorchainGetAddressResponse,
  ThorchainSignTransactionAdapterParams,
  ThorchainSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Thorchain.ts'] })

export const thorchainGetAddress = async (
  params: ThorchainGetAddressAdapterParams,
): Promise<ThorchainGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'thorchain_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'thorchainGetAddress' },
      `thorchain_getAddress RPC call failed.`,
    )
    return Promise.reject(error)
  }
}

export const thorchainSignTransaction = async (
  params: ThorchainSignTransactionAdapterParams,
): Promise<ThorchainSignTransactionResponse> => {
  const { transaction, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'thorchain_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'thorchainSignTransaction' },
      `thorchain_signTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}

export const thorchainBroadcastTransaction = async (
  params: ThorchainBroadcastTransactionAdapterParams,
): Promise<ThorchainBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'thorchain_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'ThorchainsBroadcastTransaction' },
      `thorchain_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
