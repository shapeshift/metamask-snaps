import type { SupportedChainIds } from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import type { SignerArgs, SignerInitializeArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { UTXOSigner } from '../common/UTXOSigner'

export class DogecoinSigner extends UTXOSigner<SupportedChainIds.DogecoinMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Dogecoin',
      logger: logger.child({
        namespace: ['Snap', 'UTXO', 'Dogecoin', 'DogecoinSigner.ts'],
      }),
    }
    super(args)
  }

  async initialize(
    { broadcastUrl }: SignerInitializeArgs = {
      broadcastUrl: broadcastUrls.DEFAULT_UNCHAINED_DOGECOIN_HTTP_URL,
    },
  ) {
    const httpProviderConfiguration = new unchained.dogecoin.Configuration({
      basePath: broadcastUrl,
    })
    try {
      this.signer = await this.initializeSigner()
      this.httpProvider = new unchained.dogecoin.V1Api(httpProviderConfiguration)
      this._initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }
}
