import type {
  BitcoinCashBroadcastTransactionAdapterParams,
  BitcoinCashBroadcastTransactionResponse,
  BitcoinCashGetAddressAdapterParams,
  BitcoinCashGetAddressResponse,
  BitcoinCashSignTransactionAdapterParams,
  BitcoinCashSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({
  namespace: ['Adapter', 'BitcoinCash.ts'],
})

export const BCHGetAddress = async (
  params: BitcoinCashGetAddressAdapterParams,
): Promise<BitcoinCashGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'bch_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHGetAddress' }, `bch_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const BCHSignTransaction = async (
  params: BitcoinCashSignTransactionAdapterParams,
): Promise<BitcoinCashSignTransactionResponse> => {
  const { transaction, snapId } = params
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
    return Promise.reject(error)
  }
}

export const BCHBroadcastTransaction = async (
  params: BitcoinCashBroadcastTransactionAdapterParams,
): Promise<BitcoinCashBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'bch_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'BCHBroadcastTransaction' },
      `bch_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
