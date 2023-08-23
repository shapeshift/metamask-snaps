import type { SupportedChainIds } from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import type { SignerArgs, SignerInitializeArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { UTXOSigner } from '../common/UTXOSigner'

export class BitcoinCashSigner extends UTXOSigner<SupportedChainIds.BitcoinCashMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'BitcoinCash',
      logger: logger.child({
        namespace: ['Snap', 'UTXO', 'BitcoinCash', 'BitcoinCashSigner.ts'],
      }),
    }
    super(args)
  }

  async initialize(
    { broadcastUrl }: SignerInitializeArgs = {
      broadcastUrl: broadcastUrls.DEFAULT_UNCHAINED_BITCOINCASH_HTTP_URL,
    },
  ) {
    const httpProviderConfiguration = new unchained.bitcoincash.Configuration({
      basePath: broadcastUrl,
    })
    try {
      this.signer = await this.initializeSigner()
      this.httpProvider = new unchained.bitcoincash.V1Api(httpProviderConfiguration)
      this._initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }
}
