import {
  KavaBroadcastTransactionParams,
  KavaBroadcastTransactionResponse,
  KavaGetAddressParams,
  KavaSignTransactionParams,
  KavaSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Kava.ts'] })

export const kavaGetAddress = async ({
  addressParams
}: KavaGetAddressParams): Promise<string> => {
  const {addressNList} =  addressParams
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
  {transaction}: KavaSignTransactionParams,
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

export const kavaBroadcastTransaction = async ({}: KavaBroadcastTransactionParams): Promise<KavaBroadcastTransactionResponse> => {
  return Promise.reject("Disabled pending Unchained support.")
}

