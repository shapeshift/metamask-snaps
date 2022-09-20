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

  async initialize({
    broadcastUrl = broadcastUrls.DEFAULT_UNCHAINED_THORCHAIN_HTTP_URL,
  }: SignerInitializeArgs) {
    const httpProviderConfiguration = new unchained.thorchain.Configuration({
      basePath: broadcastUrl,
    })
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.thorchainGetAddress
      this.signerSignTransaction = this.signer.thorchainSignTx
      this.httpProvider = new unchained.thorchain.V1Api(httpProviderConfiguration)
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
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
