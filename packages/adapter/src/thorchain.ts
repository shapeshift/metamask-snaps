import {
  ThorchainBroadcastTransactionResponse,
  ThorchainGetAddressParams,
  ThorchainGetAddressResponse,
  ThorchainSignedTransaction,
  ThorchainSignTransaction,
  ThorchainSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Thorchain.ts'] })

export const thorchainGetAddress = async (
  params: ThorchainGetAddressParams,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<ThorchainGetAddressResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'thorchain_getAddress',
        params: { params },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'thorchainGetAddress' },
      `thorchain_getAddress RPC call failed.`,
    )
  }
  return null
}

export const thorchainSignTransaction = async (
  transaction: ThorchainSignTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<ThorchainSignTransactionResponse> => {
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
  }
  return null
}

export const thorchainBroadcastTransaction = async (
  transaction: ThorchainSignedTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<ThorchainBroadcastTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'thorchain_broadcastTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'ThorchainsBroadcastTransaction' },
      `thorchain_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
