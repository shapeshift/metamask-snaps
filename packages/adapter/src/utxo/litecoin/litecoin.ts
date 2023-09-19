import type {
  LitecoinBroadcastTransactionAdapterParams,
  LitecoinBroadcastTransactionResponse,
  LitecoinGetAddressAdapterParams,
  LitecoinGetAddressResponse,
  LitecoinGetPublicKeysResponse,
  LitecoinSignTransactionAdapterParams,
  LitecoinSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Litecoin.ts'] })

export const LTCGetAddress = async (
  params: LitecoinGetAddressAdapterParams,
): Promise<LitecoinGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'ltc_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCGetAddress' }, `ltc_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const LTCGetPublicKeys = async (
  params: LitecoinGetAddressAdapterParams,
): Promise<LitecoinGetPublicKeysResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      { method: 'ltc_getPublicKeys', params: { addressParams } },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCGetPublicKeys' }, `ltc_getPublicKeys RPC call failed.`)
    return Promise.reject(error)
  }
}

export const LTCSignTransaction = async (
  params: LitecoinSignTransactionAdapterParams,
): Promise<LitecoinSignTransactionResponse> => {
  const { transaction, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'ltc_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCSignTransaction' }, `ltc_signTransaction RPC call failed.`)
    return Promise.reject(error)
  }
}

export const LTCBroadcastTransaction = async (
  params: LitecoinBroadcastTransactionAdapterParams,
): Promise<LitecoinBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'ltc_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'LTCBroadcastTransaction' },
      `litecoin_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
