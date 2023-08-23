import type {
  BroadcastTransactionParamsType,
  BroadcastTransactionResponseType,
  GetAddressParamsType,
  GetAddressResponseType,
  SignerGetAddressType,
  SignerSignTransactionType,
  SignTransactionParamsType,
  SignTransactionResponseType,
  SupportedChainIds,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'
import assert from 'assert'

import type { SignerArgs, SignerInitializeArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class ThorchainSigner extends CosmosSDKSigner<SupportedChainIds.ThorchainMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Thorchain',
      logger: logger.child({
        namespace: ['Snap', 'RPC', 'CosmosSDK', 'Thorchain', 'ThorchainSigner.ts'],
      }),
    }
    super(args)
  }

  async initialize(
    { broadcastUrl }: SignerInitializeArgs = {
      broadcastUrl: broadcastUrls.DEFAULT_UNCHAINED_THORCHAIN_HTTP_URL,
    },
  ) {
    const httpProviderConfiguration = new unchained.thorchain.Configuration({
      basePath: broadcastUrl,
    })
    try {
      this.signer = await this.initializeSigner()
      this.httpProvider = new unchained.thorchain.V1Api(httpProviderConfiguration)
      this._initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }

  async getAddress({
    addressParams,
  }: GetAddressParamsType<SupportedChainIds.ThorchainMainnet>): Promise<
    GetAddressResponseType<SupportedChainIds.ThorchainMainnet>
  > {
    const { addressNList } = addressParams
    try {
      const address = await this.signer.thorchainGetAddress({
        addressNList,
        showDisplay: false,
      } as SignerGetAddressType<SupportedChainIds.ThorchainMainnet>)
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
  }: SignTransactionParamsType<SupportedChainIds.ThorchainMainnet>): Promise<
    SignTransactionResponseType<SupportedChainIds.ThorchainMainnet>
  > {
    try {
      const confirmed = await this.confirmTransaction(origin, transaction)
      assert(confirmed, 'User rejected the signing request')
      const signedTransaction = await this.signer.thorchainSignTx(
        transaction as SignerSignTransactionType<SupportedChainIds.ThorchainMainnet>,
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

  async broadcastTransaction({
    transaction,
  }: BroadcastTransactionParamsType<SupportedChainIds.ThorchainMainnet>): Promise<
    BroadcastTransactionResponseType<SupportedChainIds.ThorchainMainnet>
  > {
    try {
      return (await this.httpProvider.sendTx({
        body: { rawTx: transaction.serialized },
      })) as BroadcastTransactionResponseType<SupportedChainIds.ThorchainMainnet>
    } catch (error) {
      this.logger.error(transaction, { fn: 'broadcastTransaction' }, error)
      return Promise.reject(error)
    }
  }
}
