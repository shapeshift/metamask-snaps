import {
  AvalancheGetAddressParams,
  AvalancheGetAddressResponse,
  AvalancheSendTransactionParams,
  AvalancheSendTransactionResponse,
  AvalancheSignMessageParams,
  AvalancheSignMessageResponse,
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

export const avalancheSendTransaction = async (
  params: AvalancheSendTransactionParams,
): Promise<AvalancheSendTransactionResponse> => {
  try {
    const avalancheSigner = new AvalancheSigner()
    await avalancheSigner.initialize()
    return await avalancheSigner.sendTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'avalancheSendTransaction' }, error)
    return Promise.reject(error)
  }
}

