import * as unchained from '@shapeshiftoss/unchained-client'

import { SignerArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { SupportedChainIds } from '../../types'
import { UTXOSigner } from '../common/UTXOSigner'

export class BitcoinSigner extends UTXOSigner<SupportedChainIds.BitcoinMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Bitcoin',
      logger: logger.child({ namespace: ['Snap', 'UTXO', 'Bitcoin', 'BitcoinSigner.ts'] }),
    }
    super(args)
  }

  async initialize(broadcastUrl?: string) {
    const httpProviderConfiguration = new unchained.bitcoin.Configuration({
      basePath: broadcastUrl || broadcastUrls.DEFAULT_UNCHAINED_BITCOIN_HTTP_URL,
    })
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.btcGetAddress
      this.signerSignTransaction = this.signer.btcSignTx
      this.httpProvider = new unchained.bitcoin.V1Api(httpProviderConfiguration)
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }
}
