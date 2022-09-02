import {
  BTCSignedTx,
  BTCSignMessage,
  BTCSignTx,
  BTCVerifyMessage,
} from '@shapeshiftoss/hdwallet-core'
import {
  BitcoinGetAddressParams,
  BitcoinGetAddressResponse,
  BitcoinSignMessageResponse,
  BitcoinSignTransactionResponse,
  BitcoinVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'Bitcoin.ts'] })

export const btcGetAddress = async ({
  addressNList,
  scriptType,
}: BitcoinGetAddressParams): Promise<BitcoinGetAddressResponse> => {
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
  transaction: BTCSignTx,
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
  message: BTCSignMessage,
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
  message: BTCVerifyMessage,
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
  message: BTCSignedTx,
): Promise<string | undefined> => {
  try {
    const config = new unchained.bitcoin.Configuration({
      basePath: process.env.UNCHAINED_BITCOIN_HTTP_URL,
    })
    const client = new unchained.bitcoin.V1Api(config)
    const txid = client.sendTx({ sendTxBody: { hex: message.serializedTx } })
    return txid
  } catch (error) {
    moduleLogger.error(message, { fn: 'btcBroadcastMessage' }, error)
    return undefined
  }
}
