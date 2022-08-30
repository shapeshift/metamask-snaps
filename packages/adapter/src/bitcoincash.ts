import {
  BitcoinCashBroadcastTransactionResponse,
  BitcoinCashGetAddressParams,
  BitcoinCashGetAddressResponse,
  BitcoinCashSignedTransaction,
  BitcoinCashSignMessage,
  BitcoinCashSignMessageResponse,
  BitcoinCashSignTransaction,
  BitcoinCashSignTransactionResponse,
  BitcoinCashVerifyMessage,
  BitcoinCashVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({
  namespace: ['Adapter', 'BitcoinCash.ts'],
})

export const BCHGetAddress = async (
  params: BitcoinCashGetAddressParams,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BitcoinCashGetAddressResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'bch_getAddress',
        params: { params },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHGetAddress' }, `bch_getAddress RPC call failed.`)
  }
  return null
}

export const BCHSignMessage = async (
  message: BitcoinCashSignMessage,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BitcoinCashSignMessageResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'bch_signMessage',
        params: { message },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHSignMessage' }, `bch_signMessage RPC call failed.`)
  }
  return null
}

export const BCHSignTransaction = async (
  transaction: BitcoinCashSignTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BitcoinCashSignTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'bch_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHSignTransaction' }, `bch_signTransaction RPC call failed.`)
  }
  return null
}

export const BCHVerifyMessage = async (
  message: BitcoinCashVerifyMessage,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BitcoinCashVerifyMessageResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'bch_verifyMessage',
        params: { message },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHVerifyMessage' }, `bch_verifyMessage RPC call failed.`)
    return null
  }
}

export const BCHBroadcastTransaction = async (
  transaction: BitcoinCashSignedTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BitcoinCashBroadcastTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'bch_broadcastTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'BCHBroadcastTransaction' },
      `bch_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
