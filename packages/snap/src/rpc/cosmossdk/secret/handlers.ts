import {
  SecretBroadcastTransactionParams,
  SecretBroadcastTransactionResponse,
  SecretGetAddressParams,
  SecretGetAddressResponse,
  SecretSignTransactionParams,
  SecretSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { SecretSigner } from './SecretSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'CosmosSDK', 'Secret', 'Handlers.ts'],
})

export const secretGetAddress = async (
  params: SecretGetAddressParams,
): Promise<SecretGetAddressResponse> => {
  try {
    const secretSigner = new SecretSigner()
    await secretSigner.initialize()
    return await secretSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'secretGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const secretSignTransaction = async (
  params: SecretSignTransactionParams,
): Promise<SecretSignTransactionResponse> => {
  try {
    const secretSigner = new SecretSigner()
    await secretSigner.initialize()
    return await secretSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'secretSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const secretBroadcastTransaction = async (
  params: SecretBroadcastTransactionParams,
): Promise<SecretBroadcastTransactionResponse> => {
  try {
    const secretSigner = new SecretSigner()
    await secretSigner.initialize()
    return await secretSigner.broadcastTransaction()
  } catch (error) {
    moduleLogger.error({ fn: 'secretSignTransaction' }, error)
    return Promise.reject(error)
  }
}
