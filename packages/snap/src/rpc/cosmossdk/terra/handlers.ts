import type {
  TerraBroadcastTransactionParams,
  TerraBroadcastTransactionResponse,
  TerraGetAddressParams,
  TerraGetAddressResponse,
  TerraSignTransactionParams,
  TerraSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { TerraSigner } from './TerraSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'TerraSDK', 'Terra', 'Handlers.ts'],
})

export const terraGetAddress = async (
  params: TerraGetAddressParams,
): Promise<TerraGetAddressResponse> => {
  try {
    const terraSigner = new TerraSigner()
    await terraSigner.initialize()
    return await terraSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'terraGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const terraSignTransaction = async (
  params: TerraSignTransactionParams,
): Promise<TerraSignTransactionResponse> => {
  try {
    const terraSigner = new TerraSigner()
    await terraSigner.initialize()
    return await terraSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'terraSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const terraBroadcastTransaction = async (
  params: TerraBroadcastTransactionParams /* eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars */,
): Promise<TerraBroadcastTransactionResponse> => {
  try {
    const terraSigner = new TerraSigner()
    await terraSigner.initialize()
    return await terraSigner.broadcastTransaction()
  } catch (error) {
    moduleLogger.error({ fn: 'terraSignTransaction' }, error)
    return Promise.reject(error)
  }
}
