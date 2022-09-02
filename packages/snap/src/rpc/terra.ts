import { TerraSignedTx, TerraSignTx } from '@shapeshiftoss/hdwallet-core'
import {
  TerraBroadcastTransactionResponse,
  TerraGetAddressParams,
  TerraSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Terra.ts'] })

export const terraGetAddress = async ({
  addressNList,
}: TerraGetAddressParams): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner('Terra')
    if (signer === null) {
      throw new Error('Could not initialize Terra signer')
    }
    const address = await signer.terraGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'terraGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const terraSignTransaction = async (
  transaction: TerraSignTx,
): Promise<TerraSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Terra')
    if (signer === null) {
      throw new Error('Could not initialize Terra signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Terra Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.terraSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'terraSignTransaction' }, error)
    return Promise.reject(error)
  }
}

/* Disabled pending Unchained support */
// export const terraBroadcastTransaction = async (
//   message: TerraSignedTx,
// ): Promise<TerraBroadcastTransactionResponse> => {
//   try {
//     const config = new unchained.terra.Configuration({
//       basePath: process.env.UNCHAINED_SECRET_HTTP_URL,
//     })
//     const client = new unchained.terra.V1Api(config)
//     const txid = client.sendTx({ body: { rawTx: message.serialized } })
//     return txid
//   } catch (error) {
//     moduleLogger.error(message, { fn: 'terraBroadcastMessage' }, error)
//     return Promise.reject(error)
//   }
// }
