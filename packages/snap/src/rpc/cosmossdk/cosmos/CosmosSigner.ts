import {
  BroadcastTransactionParamsType,
  BroadcastTransactionResponseType,
  SupportedChainIds,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { SignerArgs, SignerInitializeArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class CosmosSigner extends CosmosSDKSigner<SupportedChainIds.CosmosMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Cosmos',
      logger: logger.child({
        namespace: ['Snap', 'RPC', 'CosmosSDK', 'Cosmos', 'CosmosSigner.ts'],
      }),
    }
    super(args)
  }

  async initialize({
    broadcastUrl = broadcastUrls.DEFAULT_UNCHAINED_COSMOS_HTTP_URL,
  }: SignerInitializeArgs) {
    const httpProviderConfiguration = new unchained.cosmos.Configuration({
      basePath: broadcastUrl,
    })
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.cosmosGetAddress
      this.signerSignTransaction = this.signer.cosmosSignTx
      this.httpProvider = new unchained.cosmos.V1Api(httpProviderConfiguration)
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
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
