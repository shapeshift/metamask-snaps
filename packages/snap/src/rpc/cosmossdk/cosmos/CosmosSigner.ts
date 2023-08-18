import {
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

import { SignerArgs, SignerInitializeArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class CosmosSigner extends CosmosSDKSigner<SupportedChainIds.CosmosMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Atom',
      logger: logger.child({
        namespace: ['Snap', 'RPC', 'CosmosSDK', 'Cosmos', 'CosmosSigner.ts'],
      }),
    }
    super(args)
  }

  async initialize(
    { broadcastUrl }: SignerInitializeArgs = {
      broadcastUrl: broadcastUrls.DEFAULT_UNCHAINED_COSMOS_HTTP_URL,
    },
  ) {
    const httpProviderConfiguration = new unchained.cosmos.Configuration({
      basePath: broadcastUrl,
    })
    try {
      this.signer = await this.initializeSigner()
      this.httpProvider = new unchained.cosmos.V1Api(httpProviderConfiguration)
      this._initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }

  async getAddress({
    addressParams,
  }: GetAddressParamsType<SupportedChainIds.CosmosMainnet>): Promise<
    GetAddressResponseType<SupportedChainIds.CosmosMainnet>
  > {
    const { addressNList } = addressParams
    try {
      const address = await this.signer.cosmosGetAddress({
        addressNList,
        showDisplay: false,
      } as SignerGetAddressType<SupportedChainIds.CosmosMainnet>)
      assert(address !== null, 'Address generation failed')
      return address
    } catch (error) {
      this.logger.error({ fn: 'getAddress' }, error)
      return Promise.reject(error)
    }
  }

  async signTransaction({
    transaction,
  }: SignTransactionParamsType<SupportedChainIds.CosmosMainnet>): Promise<
    SignTransactionResponseType<SupportedChainIds.CosmosMainnet>
  > {
    try {
      const confirmed = await this.confirmTransaction(transaction)
      assert(confirmed, 'User rejected the signing request')
      const signedTransaction = await this.signer.cosmosSignTx(
        transaction as SignerSignTransactionType<SupportedChainIds.CosmosMainnet>,
      )
      assert(signedTransaction !== null, 'Transaction signing failed')
      this.logEvent("signTransaction", {unsignedTransaction: transaction, signedTransaction})
      return signedTransaction
    } catch (error) {
      this.logger.error(transaction, { fn: 'signTransaction' }, error)
      return Promise.reject(error)
    }
  }

  async broadcastTransaction({
    transaction,
  }: BroadcastTransactionParamsType<SupportedChainIds.CosmosMainnet>): Promise<
    BroadcastTransactionResponseType<SupportedChainIds.CosmosMainnet>
  > {
    try {
      return (await this.httpProvider.sendTx({
        body: { rawTx: transaction.serialized },
      })) as BroadcastTransactionResponseType<SupportedChainIds.CosmosMainnet>
    } catch (error) {
      this.logger.error(transaction, { fn: 'broadcastTransaction' }, error)
      return Promise.reject(error)
    }
  }
}
