import {
  BitcoinBroadcastTransactionAdapterParams,
  BitcoinBroadcastTransactionResponse,
  BitcoinGetAddressAdapterParams,
  BitcoinGetAddressResponse,
  BitcoinGetPublicKeysResponse,
  BitcoinSignTransactionAdapterParams,
  BitcoinSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Bitcoin.ts'] })

export const BTCGetAddress = async (
  params: BitcoinGetAddressAdapterParams,
): Promise<BitcoinGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      { method: 'btc_getAddress', params: { addressParams } },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCGetAddress' }, `btc_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const BTCGetPublicKeys = async (
  params: BitcoinGetAddressAdapterParams,
): Promise<BitcoinGetPublicKeysResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      { method: 'btc_getPublicKeys', params: { addressParams } },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCGetPublicKeys' }, `btc_getPublicKeys RPC call failed.`)
    return Promise.reject(error)
  }
}


export const BTCSignTransaction = async (
  params: BitcoinSignTransactionAdapterParams,
): Promise<BitcoinSignTransactionResponse> => {
  const { transaction, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      { method: 'btc_signTransaction', params: { transaction } },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCSignTransaction' }, `btc_signTransaction RPC call failed.`)
    return Promise.reject(error)
  }
}

export const BTCBroadcastTransaction = async (
  params: BitcoinBroadcastTransactionAdapterParams,
): Promise<BitcoinBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      { method: 'btc_broadcastTransaction', params: { transaction, baseUrl } },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'BTCBroadcastTransaction' },
      `bitcoin_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
