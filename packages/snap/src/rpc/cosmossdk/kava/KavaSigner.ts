import { SignerArgs } from '../../common/BaseSigner'
import { logger } from '../../common/lib/logger'
import { BroadcastTransactionParamsType, BroadcastTransactionResponseType, SupportedChainIds } from '@shapeshiftoss/metamask-snaps-types'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class KavaSigner extends CosmosSDKSigner<SupportedChainIds.KavaMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Kava',
      logger: logger.child({ namespace: ['Snap', 'RPC', 'CosmosSDK', 'Kava', 'KavaSigner.ts'] }),
    }
    super(args)
  }

  async initialize(broadcastUrl?: string) {
    try {
      this.signer = await this.initializeSigner()
      this.signerGetAddress = this.signer.kavaGetAddress
      this.signerSignTransaction = this.signer.kavaSignTx
      this.initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }

  async broadcastTransaction({
    transaction,
  }: BroadcastTransactionParamsType<SupportedChainIds.KavaMainnet>): Promise<BroadcastTransactionResponseType<SupportedChainIds.KavaMainnet>> {
    return Promise.reject(new Error(`Broadcast disabled pending Unchained support for ${this.coin}.`))
  }
}