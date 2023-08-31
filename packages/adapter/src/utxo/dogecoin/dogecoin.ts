import type {
  DogecoinBroadcastTransactionAdapterParams,
  DogecoinBroadcastTransactionResponse,
  DogecoinGetAddressAdapterParams,
  DogecoinGetAddressResponse,
  DogecoinSignTransactionAdapterParams,
  DogecoinSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Dogecoin.ts'] })

export const dogecoinGetAddress = async (
  params: DogecoinGetAddressAdapterParams,
): Promise<DogecoinGetAddressResponse> => {
  try {
    const { addressParams, snapId } = params
    return await sendFlaskRPCRequest(
      {
        method: 'doge_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'DogeGetAddress' }, `doge_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const dogecoinSignTransaction = async (
  params: DogecoinSignTransactionAdapterParams,
): Promise<DogecoinSignTransactionResponse> => {
  const { transaction, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'doge_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'DogeSignTransaction' },
      `doge_signTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}

export const dogecoinBroadcastTransaction = async (
  params: DogecoinBroadcastTransactionAdapterParams,
): Promise<DogecoinBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'doge_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'DogeBroadcastTransaction' },
      `doge_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
