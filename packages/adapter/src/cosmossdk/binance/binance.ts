import {
  BinanceBroadcastTransactionAdapterParams,
  BinanceBroadcastTransactionResponse,
  BinanceGetAddressAdapterParams,
  BinanceGetAddressResponse,
  BinanceSignTransactionAdapterParams,
  BinanceSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Binance.ts'] })

export const binanceGetAddress = async (
  params: BinanceGetAddressAdapterParams,
): Promise<BinanceGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'binance_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'binanceGetAddress' }, `binance_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const binanceSignTransaction = async (
  params: BinanceSignTransactionAdapterParams,
): Promise<BinanceSignTransactionResponse> => {
  const { transaction, snapId } = params
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
    return Promise.reject(error)
  }
}

export const binanceBroadcastTransaction = async (
  params: BinanceBroadcastTransactionAdapterParams,
): Promise<BinanceBroadcastTransactionResponse> => {
  try {
    const { transaction, baseUrl, snapId } = params
    return await sendFlaskRPCRequest(
      {
        method: 'binance_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'binanceBroadcastTransaction' },
      `binance_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
