import {
  BitcoinCashBroadcastTransactionParams,
  BitcoinCashBroadcastTransactionResponse,
  BitcoinCashGetAddressParams,
  BitcoinCashGetAddressResponse,
  BitcoinCashSignMessageParams,
  BitcoinCashSignMessageResponse,
  BitcoinCashSignTransactionParams,
  BitcoinCashSignTransactionResponse,
  BitcoinCashVerifyMessageParams,
  BitcoinCashVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'BitcoinCash.ts'],
})

export const bchGetAddress = async ({
  addressParams
}: BitcoinCashGetAddressParams): Promise<BitcoinCashGetAddressResponse> => {
  const {addressNList, scriptType} = addressParams
  try {
    const signer = await getHDWalletNativeSigner('BitcoinCash')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin Cash signer')
    }
    const address = await signer.btcGetAddress({
      coin: 'BitcoinCash',
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

export const bchSignTransaction = async (
  {transaction}: BitcoinCashSignTransactionParams,
): Promise<BitcoinCashSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('BitcoinCash')
    if (signer === null) {
      throw new Error('Could not initialize BitcoinCash signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Bitcoin Cash Transaction?',
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
    moduleLogger.error(transaction, { fn: 'bchSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const bchSignMessage = async (
  {message}: BitcoinCashSignMessageParams,
): Promise<BitcoinCashSignMessageResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('BitcoinCash')
    if (signer === null) {
      throw new Error('Could not initialize BitcoinCash signer')
    }
    const signedMessage = await signer.btcSignMessage(message)
    if (signedMessage === null) {
      throw new Error('Transaction signing failed')
    }
    return signedMessage
  } catch (error) {
    moduleLogger.error(message, { fn: 'bchSignMessage' }, error)
    return Promise.reject(error)
  }
}

export const bchVerifyMessage = async (
  {message}: BitcoinCashVerifyMessageParams,
): Promise<BitcoinCashVerifyMessageResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('BitcoinCash')
    if (signer === null) {
      throw new Error('Could not initialize BitcoinCash signer')
    }
    const isVerified = await signer.btcVerifyMessage(message)
    return isVerified
  } catch (error) {
    moduleLogger.error(message, { fn: 'bchVerifyMessage' }, error)
    return Promise.reject(error)
  }
}

export const bchBroadcastTransaction = async (
 {transaction, baseUrl}: BitcoinCashBroadcastTransactionParams
): Promise<BitcoinCashBroadcastTransactionResponse> => {
  try {
    const config = new unchained.bitcoincash.Configuration({
      basePath: baseUrl,
    })
    const client = new unchained.bitcoincash.V1Api(config)
    return await client.sendTx({ sendTxBody: { hex: transaction.serializedTx } })
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'bchBroadcastTransaction' }, error)
    return Promise.reject(error)
  }
}
