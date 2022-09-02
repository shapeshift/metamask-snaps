import { KavaSignedTx, KavaSignTx } from '@shapeshiftoss/hdwallet-core'
import {
  KavaBroadcastTransactionResponse,
  KavaGetAddressParams,
  KavaSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Kava.ts'] })

export const kavaGetAddress = async ({
  addressNList,
}: KavaGetAddressParams): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner('Kava')
    if (signer === null) {
      throw new Error('Could not initialize Kava signer')
    }
    const address = await signer.kavaGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'kavaGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const kavaSignTransaction = async (
  transaction: KavaSignTx,
): Promise<KavaSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Kava')
    if (signer === null) {
      throw new Error('Could not initialize Kava signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Kava Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.kavaSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'kavaSignTransaction' }, error)
    return Promise.reject(error)
  }
}

/* Disabled pending Unchained support */
// export const kavaBroadcastTransaction = async (
//   message: KavaSignedTx,
// ): Promise<KavaBroadcastTransactionResponse> => {
//   try {
//     const config = new unchained.kava.Configuration({
//       basePath: process.env.UNCHAINED_KAVA_HTTP_URL,
//     })
//     const client = new unchained.kava.V1Api(config)
//     const txid = client.sendTx({ body: { rawTx: message.serialized } })
//     return txid
//   } catch (error) {
//     moduleLogger.error(message, { fn: 'kavaBroadcastMessage' }, error)
//     return Promise.reject(error)
//   }
// }
