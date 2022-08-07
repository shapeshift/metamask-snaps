import {
  bip32ToAddressNList,
  ETHSignedMessage,
  ETHSignedTx,
  ETHSignMessage,
  ETHSignTx,
  ETHVerifyMessage,
  slip44ByCoin,
} from '@shapeshiftoss/hdwallet-core'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'Ethereum.ts'] })

export const ethGetAddress = async (account = 0, addressIndex = 0): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner('Ethereum')
    if (signer === null) {
      throw new Error('Could not initialize Ethereum signer')
    }
    const address = await signer.ethGetAddress({
      addressNList: bip32ToAddressNList(
        `m/44'/${slip44ByCoin('Ethereum')}'/${account}'/0/${addressIndex}`,
      ),
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'ethGetAddress' }, error)
    throw error
  }
}

export const ethSignTransaction = async (transaction: ETHSignTx): Promise<ETHSignedTx> => {
  try {
    const signer = await getHDWalletNativeSigner('Ethereum')
    if (signer === null) {
      throw new Error('Could not initialize Ethereum signer')
    }
    const signedTransaction = await signer.ethSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'ethSignTransaction' }, error)
    throw error
  }
}

export const ethSignMessage = async (message: ETHSignMessage): Promise<ETHSignedMessage> => {
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
    throw error
  }
}

export const ethVerifyMessage = async (message: ETHVerifyMessage): Promise<boolean> => {
  try {
    const signer = await getHDWalletNativeSigner('Ethereum')
    if (signer === null) {
      throw new Error('Could not initialize Ethereum signer')
    }
    const isVerified = await signer.ethVerifyMessage(message)
    return isVerified
  } catch (error) {
    moduleLogger.error(message, { fn: 'ethVerifyMessage' }, error)
    throw error
  }
}
