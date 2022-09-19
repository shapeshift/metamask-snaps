import {
  AvalancheBroadcastTransactionParams,
  AvalancheBroadcastTransactionResponse,
  AvalancheGetAddressParams,
  AvalancheGetAddressResponse,
  AvalancheSignMessageParams,
  AvalancheSignMessageResponse,
  AvalancheSignTransactionParams,
  AvalancheSignTransactionResponse,
  AvalancheVerifyMessageParams,
  AvalancheVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { AvalancheSigner } from './AvalancheSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'AvalancheSDK', 'Avalanche', 'Handlers.ts'],
})

export const avalancheGetAddress = async (
  params: AvalancheGetAddressParams,
): Promise<AvalancheGetAddressResponse> => {
  try {
    const avalancheSigner = new AvalancheSigner()
    await avalancheSigner.initialize()
    return await avalancheSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'avalancheGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const avalancheSignMessage = async (
  params: AvalancheSignMessageParams,
): Promise<AvalancheSignMessageResponse> => {
  try {
    const avalancheSigner = new AvalancheSigner()
    await avalancheSigner.initialize()
    return await avalancheSigner.signMessage(params)
  } catch (error) {
    moduleLogger.error({ fn: 'avalancheSignMessage' }, error)
    return Promise.reject(error)
  }
}

export const avalancheVerifyMessage = async (
  params: AvalancheVerifyMessageParams,
): Promise<AvalancheVerifyMessageResponse> => {
  try {
    const avalancheSigner = new AvalancheSigner()
    await avalancheSigner.initialize()
    return await avalancheSigner.verifyMessage(params)
  } catch (error) {
    moduleLogger.error({ fn: 'avalancheVerifyMessage' }, error)
    return Promise.reject(error)
  }
}

export const avalancheSignTransaction = async (
  params: AvalancheSignTransactionParams,
): Promise<AvalancheSignTransactionResponse> => {
  try {
    const avalancheSigner = new AvalancheSigner()
    await avalancheSigner.initialize()
    return await avalancheSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'avalancheSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const avalancheBroadcastTransaction = async (
  params: AvalancheBroadcastTransactionParams,
): Promise<AvalancheBroadcastTransactionResponse> => {
  try {
    const avalancheSigner = new AvalancheSigner()
    await avalancheSigner.initialize(params.baseUrl)
    return await avalancheSigner.broadcastTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'avalancheSignTransaction' }, error)
    return Promise.reject(error)
  }
}
