import {
  BitcoinBroadcastTransactionAdapterParams,
  BitcoinBroadcastTransactionResponse,
  BitcoinGetAddressAdapterParams,
  BitcoinGetAddressResponse,
  BitcoinSignMessageAdapterParams,
  BitcoinSignMessageResponse,
  BitcoinSignTransactionAdapterParams,
  BitcoinSignTransactionResponse,
  BitcoinVerifyMessageAdapterParams,
  BitcoinVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { sendFlaskRPCRequest } from './utils'

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

export const BTCSignMessage = async (
  params: BitcoinSignMessageAdapterParams,
): Promise<BitcoinSignMessageResponse> => {
  const { message, snapId } = params
  try {
    return await sendFlaskRPCRequest({ method: 'btc_signMessage', params: { message } }, snapId)
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCSignMessage' }, `btc_signMessage RPC call failed.`)
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

export const BTCVerifyMessage = async (
  params: BitcoinVerifyMessageAdapterParams,
): Promise<BitcoinVerifyMessageResponse> => {
  const { message, snapId } = params
  try {
    return await sendFlaskRPCRequest({ method: 'btc_verifyMessage', params: { message } }, snapId)
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCVerifyMessage' }, `btc_verifyMessage RPC call failed.`)
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
