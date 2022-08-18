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
  
  import { logger } from '../lib/logger'
  import { getHDWalletNativeSigner } from './common'
  
  const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Litecoin.ts'] })
  
  export const ltcGetAddress = async (
    scriptType?: BTCInputScriptType,
    account = 0,
    addressIndex = 0,
  ): Promise<string> => {
    try {
      const signer = await getHDWalletNativeSigner('Litecoin')
      if (signer === null) {
        throw new Error('Could not initialize Litecoin signer')
      }
      const address = await signer.btcGetAddress({
        coin: 'Litecoin',
        addressNList: bip32ToAddressNList(
          `m/44'/${slip44ByCoin('Litecoin')}'/${account}'/0/${addressIndex}`,
        ),
        scriptType,
        showDisplay: false,
      })
      if (address === null) {
        throw new Error('Address generation failed')
      }
      return address
    } catch (error) {
      moduleLogger.error({ fn: 'ltcGetAddress' }, error)
      throw error
    }
  }
  
  export const ltcSignTransaction = async (transaction: BTCSignTx): Promise<BTCSignedTx> => {
    try {
      const signer = await getHDWalletNativeSigner('Litecoin')
      if (signer === null) {
        throw new Error('Could not initialize Litecoin signer')
      }
      const signedTransaction = await signer.btcSignTx(transaction)
      if (signedTransaction === null) {
        throw new Error('Transaction signing failed')
      }
      return signedTransaction
    } catch (error) {
      moduleLogger.error(transaction, { fn: 'ltcSignTransaction' }, error)
      throw error
    }
  }
  
  export const ltcSignMessage = async (message: BTCSignMessage): Promise<BTCSignedMessage> => {
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
      throw error
    }
  }
  
  export const ltcVerifyMessage = async (message: BTCVerifyMessage): Promise<boolean> => {
    try {
      const signer = await getHDWalletNativeSigner('Litecoin')
      if (signer === null) {
        throw new Error('Could not initialize Litecoin signer')
      }
      const isVerified = await signer.btcVerifyMessage(message)
      return isVerified
    } catch (error) {
      moduleLogger.error(message, { fn: 'ltcVerifyMessage' }, error)
      throw error
    }
  }
  