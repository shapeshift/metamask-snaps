import {
  ETHSignedTx,
  ETHSignMessage,
  ETHSignTx,
  ETHVerifyMessage,
} from '@shapeshiftoss/hdwallet-core'
import {
  EthereumBroadcastTransactionResponse,
  EthereumGetAddressParams,
  EthereumGetAddressResponse,
  EthereumSignMessageResponse,
  EthereumSignTransactionResponse,
  EthereumVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'Ethereum.ts'] })

export const ethGetAddress = async ({
  addressNList,
}: EthereumGetAddressParams): Promise<EthereumGetAddressResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Ethereum')
    if (signer === null) {
      throw new Error('Could not initialize Ethereum signer')
    }
    const address = await signer.ethGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'ethGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const ethSignTransaction = async (
  transaction: ETHSignTx,
): Promise<EthereumSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Ethereum')
    if (signer === null) {
      throw new Error('Could not initialize Ethereum signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Ethereum Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.ethSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'ethSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const ethSignMessage = async (
  message: ETHSignMessage,
): Promise<EthereumSignMessageResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Ethereum')
    if (signer === null) {
      throw new Error('Could not initialize Ethereum signer')
    }
    const signedMessage = await signer.ethSignMessage(message)
    if (signedMessage === null) {
      throw new Error('Transaction signing failed')
    }
    return signedMessage
  } catch (error) {
    moduleLogger.error(message, { fn: 'ethSignMessage' }, error)
    return Promise.reject(error)
  }
}

export const ethVerifyMessage = async (
  message: ETHVerifyMessage,
): Promise<EthereumVerifyMessageResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Ethereum')
    if (signer === null) {
      throw new Error('Could not initialize Ethereum signer')
    }
    const isVerified = await signer.ethVerifyMessage(message)
    return isVerified
  } catch (error) {
    moduleLogger.error(message, { fn: 'ethVerifyMessage' }, error)
    return Promise.reject(error)
  }
}

export const ethBroadcastTransaction = async (
  message: ETHSignedTx,
): Promise<EthereumBroadcastTransactionResponse> => {
  try {
    const config = new unchained.ethereum.Configuration({
      basePath: process.env.UNCHAINED_ETHEREUM_HTTP_URL,
    })
    const client = new unchained.ethereum.V1Api(config)
    const txid = client.sendTx({ sendTxBody: { hex: message.serialized } })
    return txid
  } catch (error) {
    moduleLogger.error(message, { fn: 'ethBroadcastMessage' }, error)
    return Promise.reject(error)
  }
}
