import type {
  BroadcastTransactionResponseType,
  GetAddressParamsType,
  GetAddressResponseType,
  SignerGetAddressType,
  SignerSignTransactionType,
  SignTransactionParamsType,
  SignTransactionResponseType,
  SupportedChainIds,
} from '@shapeshiftoss/metamask-snaps-types'
import assert from 'assert'

import type { SignerArgs } from '../../common/BaseSigner'
import { logger } from '../../common/lib/logger'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class SecretSigner extends CosmosSDKSigner<SupportedChainIds.SecretMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Secret',
      logger: logger.child({
        namespace: ['Snap', 'RPC', 'CosmosSDK', 'Secret', 'SecretSigner.ts'],
      }),
    }
    super(args)
  }

  async initialize() {
    try {
      this.signer = await this.initializeSigner()
      this._initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }

  async getAddress({
    addressParams,
  }: GetAddressParamsType<SupportedChainIds.SecretMainnet>): Promise<
    GetAddressResponseType<SupportedChainIds.SecretMainnet>
  > {
    const { addressNList } = addressParams
    try {
      const address = await this.signer.secretGetAddress({
        addressNList,
        showDisplay: false,
      } as SignerGetAddressType<SupportedChainIds.SecretMainnet>)
      assert(address !== null, 'Address generation failed')
      return address
    } catch (error) {
      this.logger.error({ fn: 'getAddress' }, error)
      return Promise.reject(error)
    }
  }

  async signTransaction({
    origin,
    transaction,
  }: SignTransactionParamsType<SupportedChainIds.SecretMainnet>): Promise<
    SignTransactionResponseType<SupportedChainIds.SecretMainnet>
  > {
    try {
      const confirmed = await this.confirmTransaction(origin, transaction)
      assert(confirmed, 'User rejected the signing request')
      const signedTransaction = await this.signer.secretSignTx(
        transaction as SignerSignTransactionType<SupportedChainIds.SecretMainnet>,
      )
      assert(signedTransaction !== null, 'Transaction signing failed')
      this.logEvent('signTransaction', {
        unsignedTransaction: transaction,
        signedTransaction,
      })
      return signedTransaction
    } catch (error) {
      this.logger.error(transaction, { fn: 'signTransaction' }, error)
      return Promise.reject(error)
    }
  }

  async broadcastTransaction(): Promise<
    BroadcastTransactionResponseType<SupportedChainIds.SecretMainnet>
  > {
    return Promise.reject(
      new Error(`Broadcast disabled pending Unchained support for ${this.coin}.`),
    )
  }
}
