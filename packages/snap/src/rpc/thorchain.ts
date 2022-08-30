import { ThorchainSignTx } from '@shapeshiftoss/hdwallet-core'
import {
  ThorchainGetAddressParams,
  ThorchainSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner } from './common'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'Thorchain.ts'],
})

export const thorchainGetAddress = async ({
  addressNList,
}: ThorchainGetAddressParams): Promise<string> => {
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
  transaction: ThorchainSignTx,
): Promise<ThorchainSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Thorchain')
    if (signer === null) {
      throw new Error('Could not initialize Thorchain signer')
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

/* Disabled pending Unchained support */
// export const thorchainBroadcastTransaction = async (
//   message: ThorchainSignedTx
// ): Promise<ThorchainBroadcastTransactionResponse> => {
//   try {
//     const config = new unchained.thorchain.Configuration({
//       basePath: process.env.UNCHAINED_THORCHAIN_HTTP_URL,
//     });
//     const client = new unchained.thorchain.V1Api(config);
//     const txid = client.sendTx({ body: { rawTx: message.serialized } });
//     return txid;
//   } catch (error) {
//     moduleLogger.error(message, { fn: "thorchainBroadcastMessage" }, error);
//     return Promise.reject(error);
//   }
// };
