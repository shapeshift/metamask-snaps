import * as unchained from '@shapeshiftoss/unchained-client'

import { SignerArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { SupportedChainIds } from '../../types'
import { UTXOSigner } from '../common/UTXOSigner'

export class LitecoinSigner extends UTXOSigner<SupportedChainIds.LitecoinMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Litecoin',
      logger: logger.child({ namespace: ['Snap', 'UTXO', 'Litecoin', 'LitecoinSigner.ts'] }),
    }
    super(args)
  }

  async initialize(broadcastUrl?: string) {
    const httpProviderConfiguration = new unchained.litecoin.Configuration({
      basePath: broadcastUrl || broadcastUrls.DEFAULT_UNCHAINED_LITECOIN_HTTP_URL,
    })
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.btcGetAddress
      this.signerSignTransaction = this.signer.btcSignTx
      this.httpProvider = new unchained.litecoin.V1Api(httpProviderConfiguration)
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }
}
