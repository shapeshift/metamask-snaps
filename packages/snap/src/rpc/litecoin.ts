import {
  LitecoinBroadcastTransactionParams,
  LitecoinBroadcastTransactionResponse,
  LitecoinGetAddressParams,
  LitecoinGetAddressResponse,
  LitecoinSignMessageParams,
  LitecoinSignMessageResponse,
  LitecoinSignTransactionParams,
  LitecoinSignTransactionResponse,
  LitecoinVerifyMessageParams,
  LitecoinVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'Litecoin.ts'],
})

export const ltcGetAddress = async ({
  addressParams,
}: LitecoinGetAddressParams): Promise<LitecoinGetAddressResponse> => {
  const { addressNList, scriptType } = addressParams
  try {
    const signer = await getHDWalletNativeSigner('Litecoin')
    if (signer === null) {
      throw new Error('Could not initialize Litecoin signer')
    }
    const address = await signer.btcGetAddress({
      coin: 'Litecoin',
      addressNList,
      scriptType,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'ltcGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const ltcSignTransaction = async ({
  transaction,
}: LitecoinSignTransactionParams): Promise<LitecoinSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Litecoin')
    if (signer === null) {
      throw new Error('Could not initialize Litecoin signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Litecoin Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.btcSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'ltcSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const ltcSignMessage = async ({
  message,
}: LitecoinSignMessageParams): Promise<LitecoinSignMessageResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Litecoin')
    if (signer === null) {
      throw new Error('Could not initialize Litecoin signer')
    }
    const signedMessage = await signer.btcSignMessage(message)
    if (signedMessage === null) {
      throw new Error('Transaction signing failed')
    }
    return signedMessage
  } catch (error) {
    moduleLogger.error(message, { fn: 'ltcSignMessage' }, error)
    return Promise.reject(error)
  }
}

export const ltcVerifyMessage = async ({
  message,
}: LitecoinVerifyMessageParams): Promise<LitecoinVerifyMessageResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Litecoin')
    if (signer === null) {
      throw new Error('Could not initialize Litecoin signer')
    }
    const isVerified = await signer.btcVerifyMessage(message)
    return isVerified
  } catch (error) {
    moduleLogger.error(message, { fn: 'ltcVerifyMessage' }, error)
    return Promise.reject(error)
  }
}

export const ltcBroadcastTransaction = async ({
  transaction,
  baseUrl,
}: LitecoinBroadcastTransactionParams): Promise<LitecoinBroadcastTransactionResponse> => {
  try {
    const config = new unchained.litecoin.Configuration({
      basePath: baseUrl,
    })
    const client = new unchained.litecoin.V1Api(config)
    return await client.sendTx({ sendTxBody: { hex: transaction.serializedTx } })
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'ltcBroadcastTransaction' }, error)
    return Promise.reject(error)
  }
}
