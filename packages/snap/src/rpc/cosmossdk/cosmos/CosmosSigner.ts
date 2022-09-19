import * as unchained from '@shapeshiftoss/unchained-client'

import { SignerArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { SupportedChainIds } from '@shapeshiftoss/metamask-snaps-types'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class CosmosSigner extends CosmosSDKSigner<SupportedChainIds.CosmosMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Cosmos',
      logger: logger.child({ namespace: ['Snap', 'RPC', 'CosmosSDK', 'Cosmos', 'CosmosSigner.ts'] }),
    }
    super(args)
  }

  async initialize(broadcastUrl?: string) {
    const httpProviderConfiguration = new unchained.cosmos.Configuration({
      basePath: broadcastUrl || broadcastUrls.DEFAULT_UNCHAINED_COSMOS_HTTP_URL,
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
}
