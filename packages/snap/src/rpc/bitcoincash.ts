import {
  bip32ToAddressNList,
  BTCInputScriptType,
  BTCSignedMessage,
  BTCSignedTx,
  BTCSignMessage,
  BTCSignTx,
  BTCVerifyMessage,
  slip44ByCoin,
} from '@shapeshiftoss/hdwallet-core'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'BitcoinCash.ts'] })

export const bchGetAddress = async (
  scriptType?: BTCInputScriptType,
  account = 0,
  addressIndex = 0,
): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner('BitcoinCash')
    if (signer === null) {
      throw new Error('Could not initialize BitcoinCash signer')
    }
    const address = await signer.btcGetAddress({
      coin: 'BitcoinCash',
      addressNList: bip32ToAddressNList(
        `m/44'/${slip44ByCoin('BitcoinCash')}'/${account}'/0/${addressIndex}`,
      ),
      scriptType,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'bchGetAddress' }, error)
    throw error
  }
}

export const bchSignTransaction = async (transaction: BTCSignTx): Promise<BTCSignedTx> => {
  try {
    const signer = await getHDWalletNativeSigner('BitcoinCashCash')
    if (signer === null) {
      throw new Error('Could not initialize BitcoinCash signer')
    }
    const signedTransaction = await signer.btcSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'bchSignTransaction' }, error)
    throw error
  }
}

export const bchSignMessage = async (message: BTCSignMessage): Promise<BTCSignedMessage> => {
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
    throw error
  }
}

export const bchVerifyMessage = async (message: BTCVerifyMessage): Promise<boolean> => {
  try {
    const signer = await getHDWalletNativeSigner('BitcoinCash')
    if (signer === null) {
      throw new Error('Could not initialize BitcoinCash signer')
    }
    const isVerified = await signer.btcVerifyMessage(message)
    return isVerified
  } catch (error) {
    moduleLogger.error(message, { fn: 'bchVerifyMessage' }, error)
    throw error
  }
}

export const bchBroadcastTransaction = async (
  message: BTCSignedTx,
): Promise<string | undefined> => {
  try {
    const config = new unchained.bitcoincash.Configuration({
      basePath: process.env.UNCHAINED_BITCOINCASH_HTTP_URL,
    })
    const client = new unchained.bitcoincash.V1Api(config)
    const txid = client.sendTx({ sendTxBody: { hex: message.serializedTx } })
    return txid
  } catch (error) {
    moduleLogger.error(message, { fn: 'bchBroadcastMessage' }, error)
    return undefined
  }
}
