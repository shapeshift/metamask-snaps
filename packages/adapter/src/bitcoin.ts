import {
  BitcoinBroadcastTransactionResponse,
  BitcoinGetAddressParams,
  BitcoinGetAddressResponse,
  BitcoinSignedTransaction,
  BitcoinSignMessage,
  BitcoinSignMessageResponse,
  BitcoinSignTransaction,
  BitcoinSignTransactionResponse,
  BitcoinVerifyMessage,
  BitcoinVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Bitcoin.ts'] })

export const BTCGetAddress = async (
  params: BitcoinGetAddressParams,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BitcoinGetAddressResponse> => {
  try {
    return await sendFlaskRPCRequest({ method: 'btc_getAddress', params: { params } }, snapId)
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCGetAddress' }, `btc_getAddress RPC call failed.`)
  }
  return null
}

export const BTCSignMessage = async (
  message: BitcoinSignMessage,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BitcoinSignMessageResponse> => {
  try {
    return await sendFlaskRPCRequest({ method: 'btc_signMessage', params: { message } }, snapId)
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCSignMessage' }, `btc_signMessage RPC call failed.`)
  }
  return null
}

export const BTCSignTransaction = async (
  transaction: BitcoinSignTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BitcoinSignTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      { method: 'btc_signTransaction', params: { transaction } },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCSignTransaction' }, `btc_signTransaction RPC call failed.`)
  }
  return null
}

export const BTCVerifyMessage = async (
  message: BitcoinVerifyMessage,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BitcoinVerifyMessageResponse> => {
  try {
    return await sendFlaskRPCRequest({ method: 'btc_verifyMessage', params: { message } }, snapId)
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCVerifyMessage' }, `btc_verifyMessage RPC call failed.`)
    return null
  }
}

export const BTCBroadcastTransaction = async (
  transaction: BitcoinSignedTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BitcoinBroadcastTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      { method: 'btc_broadcastTransaction', params: { transaction } },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'BTCBroadcastTransaction' },
      `bitcoin_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
