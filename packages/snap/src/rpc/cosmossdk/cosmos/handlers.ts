import {
  CosmosBroadcastTransactionParams,
  CosmosBroadcastTransactionResponse,
  CosmosGetAddressParams,
  CosmosGetAddressResponse,
  CosmosSignTransactionParams,
  CosmosSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { CosmosSigner } from './CosmosSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'CosmosSDK', 'Cosmos', 'Handlers.ts'],
})

export const cosmosGetAddress = async (
  params: CosmosGetAddressParams,
): Promise<CosmosGetAddressResponse> => {
  try {
    const cosmosSigner = new CosmosSigner()
    await cosmosSigner.initialize()
    return await cosmosSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'cosmosGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const cosmosSignTransaction = async (
  params: CosmosSignTransactionParams,
): Promise<CosmosSignTransactionResponse> => {
  try {
    const cosmosSigner = new CosmosSigner()
    await cosmosSigner.initialize()
    return await cosmosSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'cosmosSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const cosmosBroadcastTransaction = async (
  params: CosmosBroadcastTransactionParams,
): Promise<CosmosBroadcastTransactionResponse> => {
  try {
    const cosmosSigner = new CosmosSigner()
    await cosmosSigner.initialize(params.baseUrl)
    return await cosmosSigner.broadcastTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'cosmosSignTransaction' }, error)
    return Promise.reject(error)
  }
}
