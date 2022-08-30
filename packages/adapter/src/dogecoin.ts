import {
  DogecoinBroadcastTransactionResponse,
  DogecoinGetAddressParams,
  DogecoinGetAddressResponse,
  DogecoinSignedTransaction,
  DogecoinSignMessage,
  DogecoinSignMessageResponse,
  DogecoinSignTransaction,
  DogecoinSignTransactionResponse,
  DogecoinVerifyMessage,
  DogecoinVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Dogecoin.ts'] })

export const dogecoinGetAddress = async (
  params: DogecoinGetAddressParams,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<DogecoinGetAddressResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'doge_getAddress',
        params: { params },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'DogeGetAddress' }, `doge_getAddress RPC call failed.`)
  }
  return null
}

export const dogecoinSignMessage = async (
  message: DogecoinSignMessage,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<DogecoinSignMessageResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'doge_signMessage',
        params: { message },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'DogeSignMessage' }, `doge_signMessage RPC call failed.`)
  }
  return null
}

export const dogecoinSignTransaction = async (
  transaction: DogecoinSignTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<DogecoinSignTransactionResponse> => {
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
  }
  return null
}

export const dogecoinVerifyMessage = async (
  message: DogecoinVerifyMessage,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<DogecoinVerifyMessageResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'doge_verifyMessage',
        params: { message },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'DogeVerifyMessage' }, `doge_verifyMessage RPC call failed.`)
    return null
  }
}

export const dogecoinBroadcastTransaction = async (
  transaction: DogecoinSignedTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<DogecoinBroadcastTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'doge_broadcastTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'DogeBroadcastTransaction' },
      `doge_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
