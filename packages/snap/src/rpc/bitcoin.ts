import { BTCSignedTx } from '@shapeshiftoss/hdwallet-core'
import * as unchained from '@shapeshiftoss/unchained-client'

import { logger } from '../lib/logger'

const moduleLogger = logger.child({ namespace: ['Snap', 'Bitcoin.ts'] })

// export const btcGetAddress = async (
//   scriptType?: BTCInputScriptType,
//   account = 0,
//   addressIndex = 0,
// ): Promise<string> => {
//   try {
//     const signer = await getHDWalletNativeSigner('Bitcoin')
//     if (signer === null) {
//       throw new Error('Could not initialize Bitcoin signer')
//     }
//     const address = await signer.btcGetAddress({
//       coin: 'Bitcoin',
//       addressNList: bip32ToAddressNList(
//         `m/44'/${slip44ByCoin('Bitcoin')}'/${account}'/0/${addressIndex}`,
//       ),
//       scriptType,
//       showDisplay: false,
//     })
//     if (address === null) {
//       throw new Error('Address generation failed')
//     }
//     return address
//   } catch (error) {
//     moduleLogger.error({ fn: 'btcGetAddress' }, error)
//     throw error
//   }
// }

// export const btcSignTransaction = async (transaction: BTCSignTx): Promise<BTCSignedTx> => {
//   try {
//     const signer = await getHDWalletNativeSigner('Bitcoin')
//     if (signer === null) {
//       throw new Error('Could not initialize Bitcoin signer')
//     }
//     const signedTransaction = await signer.btcSignTx(transaction)
//     if (signedTransaction === null) {
//       throw new Error('Transaction signing failed')
//     }
//     return signedTransaction
//   } catch (error) {
//     moduleLogger.error(transaction, { fn: 'btcSignTransaction' }, error)
//     throw error
//   }
// }

// export const btcSignMessage = async (message: BTCSignMessage): Promise<BTCSignedMessage> => {
//   try {
//     const signer = await getHDWalletNativeSigner('Bitcoin')
//     if (signer === null) {
//       throw new Error('Could not initialize Bitcoin signer')
//     }
//     const signedMessage = await signer.btcSignMessage(message)
//     if (signedMessage === null) {
//       throw new Error('Transaction signing failed')
//     }
//     return signedMessage
//   } catch (error) {
//     moduleLogger.error(message, { fn: 'btcSignMessage' }, error)
//     throw error
//   }
// }

// export const btcVerifyMessage = async (message: BTCVerifyMessage): Promise<boolean> => {
//   try {
//     const signer = await getHDWalletNativeSigner('Bitcoin')
//     if (signer === null) {
//       throw new Error('Could not initialize Bitcoin signer')
//     }
//     const isVerified = await signer.btcVerifyMessage(message)
//     return isVerified
//   } catch (error) {
//     moduleLogger.error(message, { fn: 'btcVerifyMessage' }, error)
//     throw error
//   }
// }

export const btcBroadcastTransaction = async (
  message: BTCSignedTx,
): Promise<string | undefined> => {
  try {
    const config = new unchained.bitcoin.Configuration({
      basePath: process.env.UNCHAINED_BITCOIN_HTTP_URL,
    })
    const client = new unchained.bitcoin.V1Api(config)
    const txid = client.sendTx({ sendTxBody: { hex: message.serializedTx } })
    return txid
  } catch (error) {
    moduleLogger.error(message, { fn: 'btcBroadcastMessage' }, error)
    return undefined
  }
}
