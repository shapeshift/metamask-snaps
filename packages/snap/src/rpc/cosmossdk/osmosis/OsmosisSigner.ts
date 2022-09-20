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

export class OsmosisSigner extends CosmosSDKSigner<SupportedChainIds.OsmosisMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Osmosis',
      logger: logger.child({
        namespace: ['Snap', 'RPC', 'CosmosSDK', 'Osmosis', 'OsmosisSigner.ts'],
      }),
    }
    super(args)
  }

  async initialize({
    broadcastUrl = broadcastUrls.DEFAULT_UNCHAINED_OSMOSIS_HTTP_URL,
  }: SignerInitializeArgs) {
    const httpProviderConfiguration = new unchained.osmosis.Configuration({
      basePath: broadcastUrl,
    })
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.osmosisGetAddress
      this.signerSignTransaction = this.signer.osmosisSignTx
      this.httpProvider = new unchained.osmosis.V1Api(httpProviderConfiguration)
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }

  async broadcastTransaction({
    transaction,
  }: BroadcastTransactionParamsType<SupportedChainIds.OsmosisMainnet>): Promise<
    BroadcastTransactionResponseType<SupportedChainIds.OsmosisMainnet>
  > {
    try {
      return (await this.httpProvider.sendTx({
        body: { rawTx: transaction.serialized },
      })) as BroadcastTransactionResponseType<SupportedChainIds.OsmosisMainnet>
    } catch (error) {
      this.logger.error(transaction, { fn: 'broadcastTransaction' }, error)
      return Promise.reject(error)
    }
  }
}
