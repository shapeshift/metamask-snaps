import type { SupportedChainIds } from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import type { SignerArgs, SignerInitializeArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { EVMSigner } from '../common/EVMSigner'

export class AvalancheSigner extends EVMSigner<SupportedChainIds.AvalancheMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Avalanche',
      logger: logger.child({
        namespace: ['Snap', 'RPC', 'EVM', 'Avalanche', 'AvalancheSigner.ts'],
      }),
    }
    super(args)
  }

  async initialize(
    { broadcastUrl }: SignerInitializeArgs = {
      broadcastUrl: broadcastUrls.DEFAULT_UNCHAINED_AVALANCHE_HTTP_URL,
    },
  ) {
    const httpProviderConfiguration = new unchained.avalanche.Configuration({
      basePath: broadcastUrl,
    })
    try {
      this.signer = await this.initializeSigner()
      this.httpProvider = new unchained.avalanche.V1Api(httpProviderConfiguration)
      this._initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }
}
