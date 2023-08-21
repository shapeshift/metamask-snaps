import {
  EthereumGetAddressParams,
  EthereumGetAddressResponse,
  EthereumSendTransactionParams,
  EthereumSendTransactionResponse,
  EthereumSignMessageParams,
  EthereumSignMessageResponse,
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

export const ethereumSendTransaction = async (
  params: EthereumSendTransactionParams,
): Promise<EthereumSendTransactionResponse> => {
  try {
    const ethereumSigner = new EthereumSigner()
    await ethereumSigner.initialize()
    return await ethereumSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'ethereumSendTransaction' }, error)
    return Promise.reject(error)
  }
}
