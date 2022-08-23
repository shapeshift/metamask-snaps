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

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Dogecoin.ts'] })

export const dogeGetAddress = async (
  scriptType?: BTCInputScriptType,
  account = 0,
  addressIndex = 0,
): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner('Dogecoin')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin signer')
    }
    const address = await signer.btcGetAddress({
      coin: 'Dogecoin',
      addressNList: bip32ToAddressNList(
        `m/44'/${slip44ByCoin('Dogecoin')}'/${account}'/0/${addressIndex}`,
      ),
      scriptType,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'dogeGetAddress' }, error)
    throw error
  }
}

export const dogeSignTransaction = async (transaction: BTCSignTx): Promise<BTCSignedTx> => {
  try {
    const signer = await getHDWalletNativeSigner('Dogecoin')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin signer')
    }
    const signedTransaction = await signer.btcSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'dogeSignTransaction' }, error)
    throw error
  }
}

export const dogeSignMessage = async (message: BTCSignMessage): Promise<BTCSignedMessage> => {
  try {
    const signer = await getHDWalletNativeSigner('Dogecoin')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin signer')
    }
    const signedMessage = await signer.btcSignMessage(message)
    if (signedMessage === null) {
      throw new Error('Transaction signing failed')
    }
    return signedMessage
  } catch (error) {
    moduleLogger.error(message, { fn: 'dogeSignMessage' }, error)
    throw error
  }
}

export const dogeVerifyMessage = async (message: BTCVerifyMessage): Promise<boolean> => {
  try {
    const signer = await getHDWalletNativeSigner('Dogecoin')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin signer')
    }
    const isVerified = await signer.btcVerifyMessage(message)
    return isVerified
  } catch (error) {
    moduleLogger.error(message, { fn: 'dogeVerifyMessage' }, error)
    throw error
  }
}
