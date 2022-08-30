import { BTCSignMessage, BTCSignTx, BTCVerifyMessage } from '@shapeshiftoss/hdwallet-core'
import {
  DogecoinGetAddressParams,
  DogecoinGetAddressResponse,
  DogecoinSignMessageResponse,
  DogecoinSignTransactionResponse,
  DogecoinVerifyMessageResponse,
} from '@shapeshiftoss/metamask-snaps-types'

// import * as unchained from "@shapeshiftoss/unchained-client";
import { logger } from '../lib/logger'
import { getHDWalletNativeSigner } from './common'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'Dogecoin.ts'],
})

export const dogeGetAddress = async ({
  addressNList,
  scriptType,
}: DogecoinGetAddressParams): Promise<DogecoinGetAddressResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Dogecoin')
    if (signer === null) {
      throw new Error('Could not initialize Dogecoin signer')
    }
    const address = await signer.btcGetAddress({
      coin: 'Dogecoin',
      addressNList,
      scriptType,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'dogeGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const dogeSignTransaction = async (
  transaction: BTCSignTx,
): Promise<DogecoinSignTransactionResponse> => {
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
    return Promise.reject(error)
  }
}

export const dogeSignMessage = async (
  message: BTCSignMessage,
): Promise<DogecoinSignMessageResponse> => {
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
    return Promise.reject(error)
  }
}

export const dogeVerifyMessage = async (
  message: BTCVerifyMessage,
): Promise<DogecoinVerifyMessageResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Dogecoin')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin signer')
    }
    const isVerified = await signer.btcVerifyMessage(message)
    return isVerified
  } catch (error) {
    moduleLogger.error(message, { fn: 'dogeVerifyMessage' }, error)
    return Promise.reject(error)
  }
}

// export const dogeBroadcastTransaction = async (
//   message: BTCSignedTx
// ): Promise<DogecoinBroadcastTransactionResponse> => {
//   try {
//     const config = new unchained.dogecoin.Configuration({
//       basePath: process.env.UNCHAINED_DOGECOIN_HTTP_URL,
//     });
//     const client = new unchained.dogecoin.V1Api(config);
//     const txid = client.sendTx({ sendTxBody: { hex: message.serializedTx } });
//     return txid;
//   } catch (error) {
//     moduleLogger.error(message, { fn: "dogeBroadcastMessage" }, error);
//     return Promise.reject(error);
//   }
// };
