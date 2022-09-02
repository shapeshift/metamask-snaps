import {
    TerraBroadcastTransactionResponse,
    TerraGetAddressParams,
    TerraGetAddressResponse,
    TerraSignedTransaction,
    TerraSignTransaction,
    TerraSignTransactionResponse,
  } from '@shapeshiftoss/metamask-snaps-types'
  
  import { logger } from './lib/logger'
  import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'
  
  const moduleLogger = logger.child({ namespace: ['Adapter', 'Terra.ts'] })
  
  export const terraGetAddress = async (
    params: TerraGetAddressParams,
    snapId: string = DEFAULT_SNAP_ID,
  ): Promise<TerraGetAddressResponse> => {
    try {
      return await sendFlaskRPCRequest(
        {
          method: 'terra_getAddress',
          params: { params },
        },
        snapId,
      )
    } catch (error) {
      moduleLogger.error(error, { fn: 'terraGetAddress' }, `terra_getAddress RPC call failed.`)
    }
    return null
  }
  
  export const terraSignTransaction = async (
    transaction: TerraSignTransaction,
    snapId: string = DEFAULT_SNAP_ID,
  ): Promise<TerraSignTransactionResponse> => {
    try {
      return await sendFlaskRPCRequest(
        {
          method: 'terra_signTransaction',
          params: { transaction },
        },
        snapId,
      )
    } catch (error) {
      moduleLogger.error(
        error,
        { fn: 'terraSignTransaction' },
        `terra_signTransaction RPC call failed.`,
      )
    }
    return null
  }
  
  export const terraBroadcastTransaction = async (
    transaction: TerraSignedTransaction,
    snapId: string = DEFAULT_SNAP_ID,
  ): Promise<TerraBroadcastTransactionResponse> => {
    try {
      return await sendFlaskRPCRequest(
        {
          method: 'terra_broadcastTransaction',
          params: { transaction },
        },
        snapId,
      )
    } catch (error) {
      moduleLogger.error(
        error,
        { fn: 'terraBroadcastTransaction' },
        `terra_broadcastTransaction RPC call failed.`,
      )
    }
    return null
  }
  