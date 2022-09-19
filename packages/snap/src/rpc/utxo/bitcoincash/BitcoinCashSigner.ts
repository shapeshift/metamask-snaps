import * as unchained from '@shapeshiftoss/unchained-client'

import { SignerArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { SupportedChainIds } from '../../types'
import { UTXOSigner } from '../common/UTXOSigner'

export class BitcoinCashSigner extends UTXOSigner<SupportedChainIds.BitcoinCashMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'BitcoinCash',
      logger: logger.child({ namespace: ['Snap', 'UTXO', 'BitcoinCash', 'BitcoinCashSigner.ts'] }),
    }
    super(args)
  }

  async initialize(broadcastUrl?: string) {
    const httpProviderConfiguration = new unchained.bitcoincash.Configuration({
      basePath: broadcastUrl || broadcastUrls.DEFAULT_UNCHAINED_BITCOINCASH_HTTP_URL,
    })
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.btcGetAddress
      this.signerSignTransaction = this.signer.btcSignTx
      this.httpProvider = new unchained.bitcoincash.V1Api(httpProviderConfiguration)
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }
}
