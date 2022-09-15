import {
  TerraBroadcastTransactionParams,
  TerraBroadcastTransactionResponse,
  TerraGetAddressParams,
  TerraSignTransactionParams,
  TerraSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../lib/logger'
import { getHDWalletNativeSigner, userConfirm } from './common'

const moduleLogger = logger.child({ namespace: ['Snap', 'RPC', 'Terra.ts'] })

export const terraGetAddress = async ({
  addressParams,
}: TerraGetAddressParams): Promise<string> => {
  const { addressNList } = addressParams
  try {
    const signer = await getHDWalletNativeSigner('Terra')
    if (signer === null) {
      throw new Error('Could not initialize Terra signer')
    }
    const address = await signer.terraGetAddress({
      addressNList,
      showDisplay: false,
    })
    if (address === null) {
      throw new Error('Address generation failed')
    }
    return address
  } catch (error) {
    moduleLogger.error({ fn: 'terraGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const terraSignTransaction = async ({
  transaction,
}: TerraSignTransactionParams): Promise<TerraSignTransactionResponse> => {
  try {
    const signer = await getHDWalletNativeSigner('Terra')
    if (signer === null) {
      throw new Error('Could not initialize Terra signer')
    }
    if (
      !(await userConfirm({
        prompt: 'Sign Terra Transaction?',
        description: 'Please verify the transaction data below',
        textAreaContent: JSON.stringify(transaction, null, 2),
      }))
    ) {
      throw new Error('User rejected the signing request')
    }
    const signedTransaction = await signer.terraSignTx(transaction)
    if (signedTransaction === null) {
      throw new Error('Transaction signing failed')
    }
    return signedTransaction
  } catch (error) {
    moduleLogger.error(transaction, { fn: 'terraSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const terraBroadcastTransaction =
  async ({}: TerraBroadcastTransactionParams): Promise<TerraBroadcastTransactionResponse> => {
    return Promise.reject(new Error('Disabled pending Unchained support.'))
  }
