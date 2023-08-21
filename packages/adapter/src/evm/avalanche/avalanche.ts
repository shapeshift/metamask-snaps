import {
  AvalancheGetAddressAdapterParams,
  AvalancheGetAddressResponse,
  AvalancheSendTransactionAdapterParams,
  AvalancheSendTransactionResponse,
  AvalancheSignMessageAdapterParams,
  AvalancheSignMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Avalanche.ts'] })

export const AVAXGetAddress = async (
  params: AvalancheGetAddressAdapterParams,
): Promise<AvalancheGetAddressResponse> => {
  const { addressParams, chainId, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'avax_getAddress',
        params: { addressParams, chainId },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'AVAXGetAddress' }, `avax_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const AVAXSignMessage = async (
  params: AvalancheSignMessageAdapterParams,
): Promise<AvalancheSignMessageResponse> => {
  const { message, chainId, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'avax_signMessage',
        params: { message, chainId },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'AVAXSignMessage' }, `avax_signMessage RPC call failed.`)
    return Promise.reject(error)
  }
}

export const AVAXSendTransaction = async (
  params: AvalancheSendTransactionAdapterParams,
): Promise<AvalancheSendTransactionResponse> => {
  try {
    const { transaction, chainId, snapId } = params
    return await sendFlaskRPCRequest(
      {
        method: 'avax_sendTransaction',
        params: { transaction, chainId },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'AVAXSendTransaction' },
      `avax_sendTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}