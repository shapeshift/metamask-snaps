import {
   KavaBroadcastTransactionResponse,
   KavaGetAddressParams,
   KavaGetAddressResponse,
   KavaSignedTransaction,
   KavaSignTransaction,
   KavaSignTransactionResponse,
  } from '@shapeshiftoss/metamask-snaps-types'
  
  import { logger } from './lib/logger'
  import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'
  
  const moduleLogger = logger.child({ namespace: ['Adapter', 'Kava.ts'] })
  
  export const kavaGetAddress = async (
    params:KavaGetAddressParams,
    snapId: string = DEFAULT_SNAP_ID,
  ): Promise<KavaGetAddressResponse> => {
    try {
      return await sendFlaskRPCRequest(
        {
          method: 'kava_getAddress',
          params: { params },
        },
        snapId,
      )
    } catch (error) {
      moduleLogger.error(error, { fn: 'kavaGetAddress' }, `kava_getAddress RPC call failed.`)
    }
    return null
  }
  
  export const kavaSignTransaction = async (
    transaction:KavaSignTransaction,
    snapId: string = DEFAULT_SNAP_ID,
  ): Promise<KavaSignTransactionResponse> => {
    try {
      return await sendFlaskRPCRequest(
        {
          method: 'kava_signTransaction',
          params: { transaction },
        },
        snapId,
      )
    } catch (error) {
      moduleLogger.error(
        error,
        { fn: 'kavaSignTransaction' },
        `kava_signTransaction RPC call failed.`,
      )
    }
    return null
  }
  
  export const kavaBroadcastTransaction = async (
    transaction:KavaSignedTransaction,
    snapId: string = DEFAULT_SNAP_ID,
  ): Promise<KavaBroadcastTransactionResponse> => {
    try {
      return await sendFlaskRPCRequest(
        {
          method: 'kava_broadcastTransaction',
          params: { transaction },
        },
        snapId,
      )
    } catch (error) {
      moduleLogger.error(
        error,
        { fn: 'kavaBroadcastTransaction' },
        `kava_broadcastTransaction RPC call failed.`,
      )
    }
    return null
  }
  