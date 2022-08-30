import {
  BinanceBroadcastTransactionResponse,
  BinanceGetAddressParams,
  BinanceGetAddressResponse,
  BinanceSignedTransaction,
  BinanceSignTransaction,
  BinanceSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Binance.ts'] })

export const binanceGetAddress = async (
  params: BinanceGetAddressParams,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BinanceGetAddressResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'binance_getAddress',
        params: { params },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'binanceGetAddress' }, `binance_getAddress RPC call failed.`)
  }
  return null
}

export const binanceSignTransaction = async (
  transaction: BinanceSignTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BinanceSignTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'binance_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'binanceSignTransaction' },
      `binance_signTransaction RPC call failed.`,
    )
  }
  return null
}

export const binanceBroadcastTransaction = async (
  transaction: BinanceSignedTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<BinanceBroadcastTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'binance_broadcastTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'binanceBroadcastTransaction' },
      `binance_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
