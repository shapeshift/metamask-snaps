import {
  EthereumBroadcastTransactionAdapterParams,
  EthereumBroadcastTransactionResponse,
  EthereumGetAddressAdapterParams,
  EthereumGetAddressResponse,
  EthereumSignMessageAdapterParams,
  EthereumSignMessageResponse,
  EthereumSignTransactionAdapterParams,
  EthereumSignTransactionResponse,
  EthereumVerifyMessageAdapterParams,
  EthereumVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'
import { sendFlaskRPCRequest } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Ethereum.ts'] })

export const ETHGetAddress = async (
  params: EthereumGetAddressAdapterParams,
): Promise<EthereumGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'eth_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHGetAddress' }, `eth_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const ETHSignMessage = async (
  params: EthereumSignMessageAdapterParams,
): Promise<EthereumSignMessageResponse> => {
  const { message, snapId } = params
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
    return Promise.reject(error)
  }
}

export const ETHSignTransaction = async (
  params: EthereumSignTransactionAdapterParams,
): Promise<EthereumSignTransactionResponse> => {
  try {
    const { transaction, snapId } = params
    return await sendFlaskRPCRequest(
      {
        method: 'eth_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHSignTransaction' }, `eth_signTransaction RPC call failed.`)
    return Promise.reject(error)
  }
}

export const ETHVerifyMessage = async (
  params: EthereumVerifyMessageAdapterParams,
): Promise<EthereumVerifyMessageResponse> => {
  const { message, snapId } = params
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
    return Promise.reject(error)
  }
}

export const ETHBroadcastTransaction = async (
  params: EthereumBroadcastTransactionAdapterParams,
): Promise<EthereumBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'eth_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'ETHBroadcastTransaction' },
      `eth_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
