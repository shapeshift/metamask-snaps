import {
  KavaBroadcastTransactionAdapterParams,
  KavaBroadcastTransactionResponse,
  KavaGetAddressAdapterParams,
  KavaGetAddressResponse,
  KavaSignTransactionAdapterParams,
  KavaSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Kava.ts'] })

export const kavaGetAddress = async (
  params: KavaGetAddressAdapterParams,
): Promise<KavaGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'kava_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'kavaGetAddress' }, `kava_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const kavaSignTransaction = async (
  params: KavaSignTransactionAdapterParams,
): Promise<KavaSignTransactionResponse> => {
  const { transaction, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'kava_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'kavaSignTransaction' },
      `kava_signTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}

export const kavaBroadcastTransaction = async (
  params: KavaBroadcastTransactionAdapterParams,
): Promise<KavaBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'kava_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'kavaBroadcastTransaction' },
      `kava_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
