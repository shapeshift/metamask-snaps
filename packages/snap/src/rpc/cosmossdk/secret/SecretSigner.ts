import { SignerArgs } from '../../common/BaseSigner'
import { logger } from '../../common/lib/logger'
import { BroadcastTransactionParamsType, BroadcastTransactionResponseType, SupportedChainIds } from '@shapeshiftoss/metamask-snaps-types'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class SecretSigner extends CosmosSDKSigner<SupportedChainIds.SecretMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Secret',
      logger: logger.child({ namespace: ['Snap', 'RPC', 'CosmosSDK', 'Secret', 'SecretSigner.ts'] }),
    }
    super(args)
  }

  async initialize(broadcastUrl?: string) {
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.secretGetAddress
      this.signerSignTransaction = this.signer.secretSignTx
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }

  async broadcastTransaction({
    transaction,
  }: BroadcastTransactionParamsType<SupportedChainIds.SecretMainnet>): Promise<BroadcastTransactionResponseType<SupportedChainIds.SecretMainnet>> {
    return Promise.reject(new Error(`Broadcast disabled pending Unchained support for ${this.coin}.`))
  }
}
