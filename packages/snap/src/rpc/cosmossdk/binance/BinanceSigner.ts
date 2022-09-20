import { SupportedChainIds } from '@shapeshiftoss/metamask-snaps-types'

import { SignerArgs } from '../../common/BaseSigner'
import { logger } from '../../common/lib/logger'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class BinanceSigner extends CosmosSDKSigner<SupportedChainIds.BinanceMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Binance',
      logger: logger.child({
        namespace: ['Snap', 'RPC', 'CosmosSDK', 'Binance', 'BinanceSigner.ts'],
      }),
    }
    super(args)
  }

  async initialize() {
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.binanceGetAddress
      this.signerSignTransaction = this.signer.binanceSignTx
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }
}
