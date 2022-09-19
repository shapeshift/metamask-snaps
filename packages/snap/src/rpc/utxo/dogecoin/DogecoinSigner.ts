import * as unchained from '@shapeshiftoss/unchained-client'

import { SignerArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { SupportedChainIds } from '../../types'
import { UTXOSigner } from '../common/UTXOSigner'

export class DogecoinSigner extends UTXOSigner<SupportedChainIds.DogecoinMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Dogecoin',
      logger: logger.child({ namespace: ['Snap', 'UTXO', 'Dogecoin', 'DogecoinSigner.ts'] }),
    }
    super(args)
  }

  async initialize(broadcastUrl?: string) {
    const httpProviderConfiguration = new unchained.dogecoin.Configuration({
      basePath: broadcastUrl || broadcastUrls.DEFAULT_UNCHAINED_BITCOIN_HTTP_URL,
    })
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.btcGetAddress
      this.signerSignTransaction = this.signer.btcSignTx
      this.httpProvider = new unchained.dogecoin.V1Api(httpProviderConfiguration)
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }
}
