import {
  ThorchainBroadcastTransactionParams,
  ThorchainBroadcastTransactionResponse,
  ThorchainGetAddressParams,
  ThorchainGetAddressResponse,
  ThorchainSignTransactionParams,
  ThorchainSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { ThorchainSigner } from './ThorchainSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'ThorchainSDK', 'Thorchain', 'Handlers.ts'],
})

export const thorchainGetAddress = async (
  params: ThorchainGetAddressParams,
): Promise<ThorchainGetAddressResponse> => {
  try {
    const thorchainSigner = new ThorchainSigner()
    await thorchainSigner.initialize()
    return await thorchainSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'thorchainGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const thorchainSignTransaction = async (
  params: ThorchainSignTransactionParams,
): Promise<ThorchainSignTransactionResponse> => {
  try {
    const thorchainSigner = new ThorchainSigner()
    await thorchainSigner.initialize()
    return await thorchainSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'thorchainSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const thorchainBroadcastTransaction = async (
  params: ThorchainBroadcastTransactionParams,
): Promise<ThorchainBroadcastTransactionResponse> => {
  try {
    const thorchainSigner = new ThorchainSigner()
    await thorchainSigner.initialize({ broadcastUrl: params.baseUrl })
    return await thorchainSigner.broadcastTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'thorchainSignTransaction' }, error)
    return Promise.reject(error)
  }
}
