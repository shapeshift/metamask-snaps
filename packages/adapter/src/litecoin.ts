import {
  LitecoinBroadcastTransactionResponse,
  LitecoinGetAddressParams,
  LitecoinGetAddressResponse,
  LitecoinSignedTransaction,
  LitecoinSignMessage,
  LitecoinSignMessageResponse,
  LitecoinSignTransaction,
  LitecoinSignTransactionResponse,
  LitecoinVerifyMessage,
  LitecoinVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Litecoin.ts'] })

export const LTCGetAddress = async (
  params: LitecoinGetAddressParams,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<LitecoinGetAddressResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'ltc_getAddress',
        params: { params },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCGetAddress' }, `ltc_getAddress RPC call failed.`)
  }
  return null
}

export const LTCSignMessage = async (
  message: LitecoinSignMessage,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<LitecoinSignMessageResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'ltc_signMessage',
        params: { message },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCSignMessage' }, `ltc_signMessage RPC call failed.`)
  }
  return null
}

export const LTCSignTransaction = async (
  transaction: LitecoinSignTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<LitecoinSignTransactionResponse> => {
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
  }
  return null
}

export const LTCVerifyMessage = async (
  message: LitecoinVerifyMessage,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<LitecoinVerifyMessageResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'ltc_verifyMessage',
        params: { message },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCVerifyMessage' }, `ltc_verifyMessage RPC call failed.`)
    return null
  }
}

export const LTCBroadcastTransaction = async (
  transaction: LitecoinSignedTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<LitecoinBroadcastTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'ltc_broadcastTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'LTCBroadcastTransaction' },
      `litecoin_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
