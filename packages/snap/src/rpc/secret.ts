import { SecretSignedTx, SecretSignTx } from '@shapeshiftoss/hdwallet-core'
import {
  SecretBroadcastTransactionResponse,
  SecretGetAddressParams,
  SecretSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Secret.ts'] })

export const secretGetAddress = async ({
  addressNList,
}: SecretGetAddressParams): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner('Secret')
    if (signer === null) {
      throw new Error('Could not initialize Secret signer')
    }
    const address = await signer.secretGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'secretGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const secretSignTransaction = async (
  transaction: SecretSignTx,
): Promise<SecretSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Secret')
    if (signer === null) {
      throw new Error('Could not initialize Secret signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Secret Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.secretSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'secretSignTransaction' }, error)
    return Promise.reject(error)
  }
}

/* Disabled pending Unchained support */
// export const secretBroadcastTransaction = async (
//   message: SecretSignedTx,
// ): Promise<SecretBroadcastTransactionResponse> => {
//   try {
//     const config = new unchained.secret.Configuration({
//       basePath: process.env.UNCHAINED_SECRET_HTTP_URL,
//     })
//     const client = new unchained.secret.V1Api(config)
//     const txid = client.sendTx({ body: { rawTx: message.serialized } })
//     return txid
//   } catch (error) {
//     moduleLogger.error(message, { fn: 'secretBroadcastMessage' }, error)
//     return Promise.reject(error)
//   }
// }
