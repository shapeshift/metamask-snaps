import { CosmosSignTx } from '@shapeshiftoss/hdwallet-core'
import {
  CosmosGetAddressParams,
  CosmosSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

// import * as unchained from "@shapeshiftoss/unchained-client";
import { logger } from '../lib/logger'
import { getHDWalletNativeSigner } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Cosmos.ts'] })

export const cosmosGetAddress = async ({
  addressNList,
}: CosmosGetAddressParams): Promise<string> => {
  try {
    const signer = await getHDWalletNativeSigner('Atom')
    if (signer === null) {
      throw new Error('Could not initialize Cosmos signer')
    }
    const address = await signer.cosmosGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'cosmosGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const cosmosSignTransaction = async (
  transaction: CosmosSignTx,
): Promise<CosmosSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Cosmos')
    if (signer === null) {
      throw new Error('Could not initialize Cosmos signer')
    }
    const signedTransaction = await signer.cosmosSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'cosmosSignTransaction' }, error)
    return Promise.reject(error)
  }
}

// export const cosmosBroadcastTransaction = async (
//   message: CosmosSignedTx
// ): Promise<CosmosBroadcastTransactionResponse> => {
//   try {
//     const config = new unchained.cosmos.Configuration({
//       basePath: process.env.UNCHAINED_COSMOS_HTTP_URL,
//     });
//     const client = new unchained.cosmos.V1Api(config);
//     const txid = client.sendTx({ body: { rawTx: message.serialized } });
//     return txid;
//   } catch (error) {
//     moduleLogger.error(message, { fn: "cosmosBroadcastMessage" }, error);
//     return Promise.reject(error);
//   }
// };
