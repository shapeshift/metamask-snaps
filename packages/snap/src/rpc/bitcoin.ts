import {
  BitcoinBroadcastTransactionParams,
  BitcoinBroadcastTransactionResponse,
  BitcoinGetAddressParams,
  BitcoinGetAddressResponse,
  BitcoinSignMessageParams,
  BitcoinSignMessageResponse,
  BitcoinSignTransactionParams,
  BitcoinSignTransactionResponse,
  BitcoinVerifyMessageParams,
  BitcoinVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'Bitcoin.ts'] })

export const btcGetAddress = async ({
  addressParams
}: BitcoinGetAddressParams): Promise<BitcoinGetAddressResponse> => {
  const { addressNList, scriptType} = addressParams
  try {
    const signer = await getHDWalletNativeSigner('Bitcoin')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin signer')
    }
    const address = await signer.btcGetAddress({
      coin: 'Bitcoin',
      addressNList,
      scriptType,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'btcGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const btcSignTransaction = async (
  {transaction}: BitcoinSignTransactionParams
): Promise<BitcoinSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Bitcoin')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Bitcoin Transaction?',
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
    moduleLogger.error(transaction, { fn: 'btcSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const btcSignMessage = async (
  {message}: BitcoinSignMessageParams
): Promise<BitcoinSignMessageResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Bitcoin')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin signer')
    }
    const signedMessage = await signer.btcSignMessage(message)
    if (signedMessage === null) {
      throw new Error('Transaction signing failed')
    }
    return signedMessage
  } catch (error) {
    moduleLogger.error(message, { fn: 'btcSignMessage' }, error)
    return Promise.reject(error)
  }
}

export const btcVerifyMessage = async (
  {message}: BitcoinVerifyMessageParams
): Promise<BitcoinVerifyMessageResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Bitcoin')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin signer')
    }
    const isVerified = await signer.btcVerifyMessage(message)
    return isVerified
  } catch (error) {
    moduleLogger.error(message, { fn: 'btcVerifyMessage' }, error)
    return Promise.reject(error)
  }
}

export const btcBroadcastTransaction = async (
  {transaction, baseUrl }:BitcoinBroadcastTransactionParams
): Promise<BitcoinBroadcastTransactionResponse> => {
  try {
    const config = new unchained.bitcoin.Configuration({
      basePath: baseUrl,
    })
    const client = new unchained.bitcoin.V1Api(config)
    return await client.sendTx({ sendTxBody: { hex: transaction.serializedTx } })
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'btcBroadcastTransaction' }, error)
    return Promise.reject(error)
  }
}
