import {
    SecretBroadcastTransactionResponse,
    SecretGetAddressParams,
    SecretGetAddressResponse,
    SecretSignedTransaction,
    SecretSignTransaction,
    SecretSignTransactionResponse,
   } from '@shapeshiftoss/metamask-snaps-types'
   
   import { logger } from './lib/logger'
   import { DEFAULT_SNAP_ID, sendFlaskRPCRequest } from './utils'
   
   const moduleLogger = logger.child({ namespace: ['Adapter', 'Secret.ts'] })
   
   export const secretGetAddress = async (
     params:SecretGetAddressParams,
     snapId: string = DEFAULT_SNAP_ID,
   ): Promise<SecretGetAddressResponse> => {
     try {
       return await sendFlaskRPCRequest(
         {
           method: 'secret_getAddress',
           params: { params },
         },
         snapId,
       )
     } catch (error) {
       moduleLogger.error(error, { fn: 'secretGetAddress' }, `secret_getAddress RPC call failed.`)
     }
     return null
   }
   
   export const secretSignTransaction = async (
     transaction:SecretSignTransaction,
     snapId: string = DEFAULT_SNAP_ID,
   ): Promise<SecretSignTransactionResponse> => {
     try {
       return await sendFlaskRPCRequest(
         {
           method: 'secret_signTransaction',
           params: { transaction },
         },
         snapId,
       )
     } catch (error) {
       moduleLogger.error(
         error,
         { fn: 'secretSignTransaction' },
         `secret_signTransaction RPC call failed.`,
       )
     }
     return null
   }
   
   export const secretBroadcastTransaction = async (
     transaction:SecretSignedTransaction,
     snapId: string = DEFAULT_SNAP_ID,
   ): Promise<SecretBroadcastTransactionResponse> => {
     try {
       return await sendFlaskRPCRequest(
         {
           method: 'secret_broadcastTransaction',
           params: { transaction },
         },
         snapId,
       )
     } catch (error) {
       moduleLogger.error(
         error,
         { fn: 'secretBroadcastTransaction' },
         `secret_broadcastTransaction RPC call failed.`,
       )
     }
     return null
   }
   