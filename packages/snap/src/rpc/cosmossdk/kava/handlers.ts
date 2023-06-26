import {
  KavaBroadcastTransactionParams,
  KavaBroadcastTransactionResponse,
  KavaGetAddressParams,
  KavaGetAddressResponse,
  KavaSignTransactionParams,
  KavaSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { KavaSigner } from './KavaSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'CosmosSDK', 'Kava', 'Handlers.ts'],
})

export const kavaGetAddress = async (
  params: KavaGetAddressParams,
): Promise<KavaGetAddressResponse> => {
  try {
    const kavaSigner = new KavaSigner()
    await kavaSigner.initialize()
    return await kavaSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'kavaGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const kavaSignTransaction = async (
  params: KavaSignTransactionParams,
): Promise<KavaSignTransactionResponse> => {
  try {
    const kavaSigner = new KavaSigner()
    await kavaSigner.initialize()
    return await kavaSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'kavaSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const kavaBroadcastTransaction = async (
  params: KavaBroadcastTransactionParams /* eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars */,
): Promise<KavaBroadcastTransactionResponse> => {
  try {
    const kavaSigner = new KavaSigner()
    await kavaSigner.initialize()
    return await kavaSigner.broadcastTransaction()
  } catch (error) {
    moduleLogger.error({ fn: 'kavaSignTransaction' }, error)
    return Promise.reject(error)
  }
}
