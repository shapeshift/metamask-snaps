import {
  LitecoinGetAddressParams,
  LitecoinGetAddressResponse,
  LitecoinSignMessage,
  LitecoinSignMessageResponse,
  LitecoinSignTransaction,
  LitecoinSignTransactionResponse,
  LitecoinVerifyMessage,
  LitecoinVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

// import * as unchained from "@shapeshiftoss/unchained-client";
import { logger } from '../lib/logger'
import { getHDWalletNativeSigner } from './common'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'Litecoin.ts'],
})

export const ltcGetAddress = async ({
  addressNList,
  scriptType,
}: LitecoinGetAddressParams): Promise<LitecoinGetAddressResponse> => {
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

export const ltcSignTransaction = async (
  transaction: LitecoinSignTransaction,
): Promise<LitecoinSignTransactionResponse> => {
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
    return Promise.reject(error)
  }
}

export const ltcSignMessage = async (
  message: LitecoinSignMessage,
): Promise<LitecoinSignMessageResponse> => {
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

export const ltcVerifyMessage = async (
  message: LitecoinVerifyMessage,
): Promise<LitecoinVerifyMessageResponse> => {
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

// export const ltcBroadcastTransaction = async (
//   message: LitecoinSignedTransaction
// ): Promise<LitecoinBroadcastTransactionResponse> => {
//   try {
//     const config = new unchained.litecoin.Configuration({
//       basePath: process.env.UNCHAINED_LITECOIN_HTTP_URL,
//     });
//     const client = new unchained.litecoin.V1Api(config);
//     const txid = client.sendTx({ sendTxBody: { hex: message.serializedTx } });
//     return txid;
//   } catch (error) {
//     moduleLogger.error(message, { fn: "ltcBroadcastMessage" }, error);
//     return Promise.reject(error);
//   }
// };
