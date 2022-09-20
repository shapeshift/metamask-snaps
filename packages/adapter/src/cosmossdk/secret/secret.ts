import {
  SecretBroadcastTransactionAdapterParams,
  SecretBroadcastTransactionResponse,
  SecretGetAddressAdapterParams,
  SecretGetAddressResponse,
  SecretSignTransactionAdapterParams,
  SecretSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../lib/logger'
import { sendFlaskRPCRequest } from '../../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Secret.ts'] })

export const secretGetAddress = async (
  params: SecretGetAddressAdapterParams,
): Promise<SecretGetAddressResponse> => {
  try {
    const { addressParams, snapId } = params
    return await sendFlaskRPCRequest(
      {
        method: 'secret_getAddress',
        params: { addressParams },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(error, { fn: 'secretGetAddress' }, `secret_getAddress RPC call failed.`)
    return Promise.reject(error)
  }
}

export const secretSignTransaction = async (
  params: SecretSignTransactionAdapterParams,
): Promise<SecretSignTransactionResponse> => {
  const { transaction, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'secret_signTransaction',
        params: { transaction },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'secretSignTransaction' },
      `secret_signTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}

export const secretBroadcastTransaction = async (
  params: SecretBroadcastTransactionAdapterParams,
): Promise<SecretBroadcastTransactionResponse> => {
  const { transaction, baseUrl, snapId } = params
  try {
    return await sendFlaskRPCRequest(
      {
        method: 'secret_broadcastTransaction',
        params: { transaction, baseUrl },
      },
      snapId,
    )
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'secretBroadcastTransaction' },
      `secret_broadcastTransaction RPC call failed.`,
    )
    return Promise.reject(error)
  }
}
