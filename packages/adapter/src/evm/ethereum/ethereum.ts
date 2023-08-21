import {
  EthereumGetAddressAdapterParams,
  EthereumGetAddressResponse,
  EthereumSignMessageAdapterParams,
  EthereumSignMessageResponse,
  EthereumSendTransactionAdapterParams,
  EthereumSendTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Ethereum.ts'] })

export const ETHGetAddress = async (
  params: EthereumGetAddressAdapterParams,
): Promise<EthereumGetAddressResponse> => {
  const { addressParams, chainId, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'eth_getAddress',
        params: { addressParams, chainId },
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
  const { message, chainId, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'eth_signMessage',
        params: { message, chainId },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHSignMessage' }, `eth_signMessage RPC call failed.`)
    return Promise.reject(error)
  }
}

export const ETHSendTransaction = async (
  params: EthereumSendTransactionAdapterParams,
): Promise<EthereumSendTransactionResponse> => {
  try {
    const { transaction, chainId, snapId } = params
    return await sendFlaskRPCRequest(
      {
        method: 'eth_sendTransaction',
        params: { transaction, chainId },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHSendTransaction' }, `eth_sendTransaction RPC call failed.`)
    return Promise.reject(error)
  }
}
