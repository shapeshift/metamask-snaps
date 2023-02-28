import {
  EthereumBroadcastTransactionParams,
  EthereumBroadcastTransactionResponse,
  EthereumGetAddressParams,
  EthereumGetAddressResponse,
  EthereumSignMessageParams,
  EthereumSignMessageResponse,
  EthereumSignTransactionParams,
  EthereumSignTransactionResponse,
  EthereumVerifyMessageParams,
  EthereumVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { EthereumSigner } from './EthereumSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'EVM', 'Ethereum', 'Handlers.ts'],
})

export const ethereumGetAddress = async (
  params: EthereumGetAddressParams,
): Promise<EthereumGetAddressResponse> => {
  try {
    const ethereumSigner = new EthereumSigner()
    await ethereumSigner.initialize()
    return await ethereumSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'ethereumGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const ethereumSignMessage = async (
  params: EthereumSignMessageParams,
): Promise<EthereumSignMessageResponse> => {
  try {
    const ethereumSigner = new EthereumSigner()
    await ethereumSigner.initialize()
    return await ethereumSigner.signMessage(params)
  } catch (error) {
    moduleLogger.error({ fn: 'ethereumSignMessage' }, error)
    return Promise.reject(error)
  }
}

export const ethereumVerifyMessage = async (
  params: EthereumVerifyMessageParams,
): Promise<EthereumVerifyMessageResponse> => {
  try {
    const ethereumSigner = new EthereumSigner()
    await ethereumSigner.initialize()
    return await ethereumSigner.verifyMessage(params)
  } catch (error) {
    moduleLogger.error({ fn: 'ethereumVerifyMessage' }, error)
    return Promise.reject(error)
  }
}

export const ethereumSignTransaction = async (
  params: EthereumSignTransactionParams,
): Promise<EthereumSignTransactionResponse> => {
  try {
    const ethereumSigner = new EthereumSigner()
    await ethereumSigner.initialize()
    return await ethereumSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'ethereumSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const ethereumBroadcastTransaction = async (
  params: EthereumBroadcastTransactionParams,
): Promise<EthereumBroadcastTransactionResponse> => {
  try {
    const ethereumSigner = new EthereumSigner()
    await ethereumSigner.initialize({ broadcastUrl: params.baseUrl })
    return await ethereumSigner.broadcastTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'ethereumSignTransaction' }, error)
    return Promise.reject(error)
  }
}
