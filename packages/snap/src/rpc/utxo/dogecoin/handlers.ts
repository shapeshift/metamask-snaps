import {
  DogecoinBroadcastTransactionParams,
  DogecoinBroadcastTransactionResponse,
  DogecoinGetAddressParams,
  DogecoinGetAddressResponse,
  DogecoinSignTransactionParams,
  DogecoinSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { DogecoinSigner } from './DogecoinSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'UTXO', 'Dogecoin', 'Handlers.ts'],
})

export const dogecoinGetAddress = async (
  params: DogecoinGetAddressParams,
): Promise<DogecoinGetAddressResponse> => {
  try {
    const dogecoinSigner = new DogecoinSigner()
    await dogecoinSigner.initialize()
    return await dogecoinSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'dogecoinGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const dogecoinSignTransaction = async (
  params: DogecoinSignTransactionParams,
): Promise<DogecoinSignTransactionResponse> => {
  try {
    const dogecoinSigner = new DogecoinSigner()
    await dogecoinSigner.initialize()
    return await dogecoinSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'dogecoinSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const dogecoinBroadcastTransaction = async (
  params: DogecoinBroadcastTransactionParams,
): Promise<DogecoinBroadcastTransactionResponse> => {
  try {
    const dogecoinSigner = new DogecoinSigner()
    await dogecoinSigner.initialize({ broadcastUrl: params.baseUrl })
    return await dogecoinSigner.broadcastTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'dogecoinSignTransaction' }, error)
    return Promise.reject(error)
  }
}
