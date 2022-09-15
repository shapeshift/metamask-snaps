import {
  SecretGetAddressParams,
  SecretSignTransactionResponse,
  SecretBroadcastTransactionParams,
  SecretBroadcastTransactionResponse,
  SecretSignTransactionParams,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Secret.ts'] })

export const secretGetAddress = async (
  { addressParams }: SecretGetAddressParams): Promise<string> => {
  const {addressNList} = addressParams
  try {
    const signer = await getHDWalletNativeSigner('Secret')
    if (signer === null) {
      throw new Error('Could not initialize Secret signer')
    }
    const address = await signer.secretGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'secretGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const secretSignTransaction = async (
  { transaction }: SecretSignTransactionParams,
): Promise<SecretSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Secret')
    if (signer === null) {
      throw new Error('Could not initialize Secret signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Secret Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.secretSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'secretSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const secretBroadcastTransaction = async ({}: SecretBroadcastTransactionParams): Promise<SecretBroadcastTransactionResponse> => {
  return Promise.reject("Disabled pending Unchained support.")
}
