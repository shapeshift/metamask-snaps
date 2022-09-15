import {
  DogecoinBroadcastTransactionResponse,
  DogecoinGetAddressResponse,
  DogecoinSignMessageResponse,
  DogecoinSignTransactionResponse,
  DogecoinVerifyMessageResponse,
  DogecoinGetAddressParams,
  DogecoinSignTransactionParams,
  DogecoinSignMessageParams,
  DogecoinVerifyMessageParams,
  DogecoinBroadcastTransactionParams,
} from '@shapeshiftoss/metamask-snaps-types'

import * as unchained from "@shapeshiftoss/unchained-client";
import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'Dogecoin.ts'],
})

export const dogeGetAddress = async ({
  addressParams
}: DogecoinGetAddressParams): Promise<DogecoinGetAddressResponse> => {
  const {addressNList, scriptType} = addressParams
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
  {transaction}: DogecoinSignTransactionParams
): Promise<DogecoinSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Dogecoin')
    if (signer === null) {
      throw new Error('Could not initialize Bitcoin signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Dogecoin Transaction?',
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
    moduleLogger.error(transaction, { fn: 'dogeSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const dogeSignMessage = async (
  {message}: DogecoinSignMessageParams,
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
  {message}: DogecoinVerifyMessageParams,
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

export const dogeBroadcastTransaction = async (
  {transaction, baseUrl}: DogecoinBroadcastTransactionParams
): Promise<DogecoinBroadcastTransactionResponse> => {
  try {
    const config = new unchained.dogecoin.Configuration({
      basePath: baseUrl,
    });
    const client = new unchained.dogecoin.V1Api(config);
    return await client.sendTx({ sendTxBody: { hex: transaction.serializedTx } });
  } catch (error) {
    moduleLogger.error(transaction, { fn: "dogeBroadcastTransaction" }, error);
    return Promise.reject(error);
  }
};
