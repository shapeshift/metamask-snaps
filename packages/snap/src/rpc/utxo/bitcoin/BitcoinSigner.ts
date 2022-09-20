import { SupportedChainIds } from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

import { SignerArgs, SignerInitializeArgs } from '../../common/BaseSigner'
import { broadcastUrls } from '../../common/constants'
import { logger } from '../../common/lib/logger'
import { UTXOSigner } from '../common/UTXOSigner'

export class BitcoinSigner extends UTXOSigner<SupportedChainIds.BitcoinMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Bitcoin',
      logger: logger.child({ namespace: ['Snap', 'RPC', 'UTXO', 'Bitcoin', 'BitcoinSigner.ts'] }),
    }
    super(args)
  }

  async initialize({
    broadcastUrl = broadcastUrls.DEFAULT_UNCHAINED_BITCOIN_HTTP_URL,
  }: SignerInitializeArgs) {
    const httpProviderConfiguration = new unchained.bitcoin.Configuration({
      basePath: broadcastUrl,
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
