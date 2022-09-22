import {
  AvalancheBroadcastTransactionAdapterParams,
  AvalancheBroadcastTransactionResponse,
  AvalancheGetAddressAdapterParams,
  AvalancheGetAddressResponse,
  AvalancheSignMessageAdapterParams,
  AvalancheSignMessageResponse,
  AvalancheSignTransactionAdapterParams,
  AvalancheSignTransactionResponse,
  AvalancheVerifyMessageAdapterParams,
  AvalancheVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Avalanche.ts'] })

export const AVAXGetAddress = async (
  params: AvalancheGetAddressAdapterParams,
): Promise<AvalancheGetAddressResponse> => {
  const { addressParams, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'avax_getAddress',
        params: { addressParams },
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
  const { message, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'avax_signMessage',
        params: { message },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'AVAXSignMessage' }, `avax_signMessage RPC call failed.`)
    return Promise.reject(error)
  }
}

export const AVAXSignTransaction = async (
  params: AvalancheSignTransactionAdapterParams,
): Promise<AvalancheSignTransactionResponse> => {
  try {
    const { transaction, snapId } = params
    return await sendFlaskRPCRequest(
      {
        method: 'avax_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'AVAXSignTransaction' },
      `avax_signTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}

export const AVAXVerifyMessage = async (
  params: AvalancheVerifyMessageAdapterParams,
): Promise<AvalancheVerifyMessageResponse> => {
  const { message, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'avax_verifyMessage',
        params: { message },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'AVAXVerifyMessage' }, `avax_verifyMessage RPC call failed.`)
    return Promise.reject(error)
  }
}

export const AVAXBroadcastTransaction = async (
  params: AvalancheBroadcastTransactionAdapterParams,
): Promise<AvalancheBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'avax_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'AVAXBroadcastTransaction' },
      `avax_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
