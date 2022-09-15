import {
  ThorchainSignTransactionResponse,
  ThorchainBroadcastTransactionParams,
  ThorchainBroadcastTransactionResponse,
  ThorchainGetAddressParams,
  ThorchainSignTransactionParams,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'Thorchain.ts'],
})

export const thorchainGetAddress = async ({
  addressParams,
}: ThorchainGetAddressParams): Promise<string> => {
  const { addressNList } = addressParams
  try {
    const signer = await getHDWalletNativeSigner('Rune')
    if (signer === null) {
      throw new Error('Could not initialize Thorchain signer')
    }
    const address = await signer.thorchainGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'thorchainGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const thorchainSignTransaction = async (
  {transaction}: ThorchainSignTransactionParams,
): Promise<ThorchainSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Thorchain')
    if (signer === null) {
      throw new Error('Could not initialize Thorchain signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign THORChain Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.thorchainSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'thorchainSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const thorchainBroadcastTransaction = async (
  {transaction, baseUrl}: ThorchainBroadcastTransactionParams
): Promise<ThorchainBroadcastTransactionResponse> => {
  try {
    const config = new unchained.thorchain.Configuration({
      basePath: baseUrl,
    });
    const client = new unchained.thorchain.V1Api(config);
    return await client.sendTx({ body: { rawTx: transaction.serialized } });
  } catch (error) {
    moduleLogger.error(transaction, { fn: "thorchainBroadcastTransaction" }, error);
    return Promise.reject(error);
  }
};
