import {
  EthereumBroadcastTransactionResponse,
  EthereumGetAddressParams,
  EthereumGetAddressResponse,
  EthereumSignedTransaction,
  EthereumSignMessage,
  EthereumSignMessageResponse,
  EthereumSignTransaction,
  EthereumSignTransactionResponse,
  EthereumVerifyMessage,
  EthereumVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Ethereum.ts'] })

export const ETHGetAddress = async (
  params: EthereumGetAddressParams,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<EthereumGetAddressResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'eth_getAddress',
        params: { params },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHGetAddress' }, `eth_getAddress RPC call failed.`)
  }
  return null
}

export const ETHSignMessage = async (
  message: EthereumSignMessage,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<EthereumSignMessageResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'eth_signMessage',
        params: { message },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHSignMessage' }, `eth_signMessage RPC call failed.`)
  }
  return null
}

export const ETHSignTransaction = async (
  transaction: EthereumSignTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<EthereumSignTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'eth_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHSignTransaction' }, `eth_signTransaction RPC call failed.`)
  }
  return null
}

export const ETHVerifyMessage = async (
  message: EthereumVerifyMessage,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<EthereumVerifyMessageResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'eth_verifyMessage',
        params: { message },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHVerifyMessage' }, `eth_verifyMessage RPC call failed.`)
  }
  return null
}

export const ETHBroadcastTransaction = async (
  transaction: EthereumSignedTransaction,
  snapId: string = DEFAULT_SNAP_ID,
): Promise<EthereumBroadcastTransactionResponse> => {
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'eth_broadcastTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'ETHBroadcastTransaction' },
      `eth_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
