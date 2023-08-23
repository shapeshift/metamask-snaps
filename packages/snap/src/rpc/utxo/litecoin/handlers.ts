import type {
  LitecoinBroadcastTransactionParams,
  LitecoinBroadcastTransactionResponse,
  LitecoinGetAddressParams,
  LitecoinGetAddressResponse,
  LitecoinSignTransactionParams,
  LitecoinSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { LitecoinSigner } from './LitecoinSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'UTXO', 'Litecoin', 'Handlers.ts'],
})

export const litecoinGetAddress = async (
  params: LitecoinGetAddressParams,
): Promise<LitecoinGetAddressResponse> => {
  try {
    const litecoinSigner = new LitecoinSigner()
    await litecoinSigner.initialize()
    return await litecoinSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'litecoinGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const litecoinSignTransaction = async (
  params: LitecoinSignTransactionParams,
): Promise<LitecoinSignTransactionResponse> => {
  try {
    const litecoinSigner = new LitecoinSigner()
    await litecoinSigner.initialize()
    return await litecoinSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'litecoinSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const litecoinBroadcastTransaction = async (
  params: LitecoinBroadcastTransactionParams,
): Promise<LitecoinBroadcastTransactionResponse> => {
  try {
    const litecoinSigner = new LitecoinSigner()
    await litecoinSigner.initialize({ broadcastUrl: params.baseUrl })
    return await litecoinSigner.broadcastTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'litecoinSignTransaction' }, error)
    return Promise.reject(error)
  }
}
