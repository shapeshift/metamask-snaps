import {
  BroadcastTransactionResponseType,
  GetAddressParamsType,
  GetAddressResponseType,
  SignerGetAddressType,
  SignerSignTransactionType,
  SignTransactionParamsType,
  SignTransactionResponseType,
  SupportedChainIds,
} from '@shapeshiftoss/metamask-snaps-types'

import { SignerArgs } from '../../common/BaseSigner'
import { logger } from '../../common/lib/logger'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class TerraSigner extends CosmosSDKSigner<SupportedChainIds.TerraMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Terra',
      logger: logger.child({ namespace: ['Snap', 'RPC', 'CosmosSDK', 'Terra', 'TerraSigner.ts'] }),
    }
    super(args)
  }

  async initialize() {
    try {
      this.signer = await this.initializeSigner()
      this._initialized = true
    } catch (error) {
      this.logger.error(error, { fn: 'getSigner' }, `Failed to initialize ${this.coin}Signer`)
    }
  }

  async getAddress({
    addressParams,
  }: GetAddressParamsType<SupportedChainIds.TerraMainnet>): Promise<
    GetAddressResponseType<SupportedChainIds.TerraMainnet>
  > {
    const { addressNList } = addressParams
    try {
      const address = await this.signer.terraGetAddress({
        addressNList,
        showDisplay: false,
      } as SignerGetAddressType<SupportedChainIds.TerraMainnet>)
      if (address === null) {
        throw new Error('Address generation failed')
      }
      return address
    } catch (error) {
      this.logger.error({ fn: 'getAddress' }, error)
      return Promise.reject(error)
    }
  }

  async signTransaction({
    transaction,
  }: SignTransactionParamsType<SupportedChainIds.TerraMainnet>): Promise<
    SignTransactionResponseType<SupportedChainIds.TerraMainnet>
  > {
    try {
      if (!(await this.confirmTransaction(transaction))) {
        throw new Error('User rejected the signing request')
      }
      const signedTransaction = await this.signer.terraSignTx(
        transaction as SignerSignTransactionType<SupportedChainIds.TerraMainnet>,
      )
      if (signedTransaction === null) {
        throw new Error('Transaction signing failed')
      }
      return signedTransaction
    } catch (error) {
      this.logger.error(transaction, { fn: 'signTransaction' }, error)
      return Promise.reject(error)
    }
  }

  async broadcastTransaction(): Promise<
    BroadcastTransactionResponseType<SupportedChainIds.TerraMainnet>
  > {
    return Promise.reject(
      new Error(`Broadcast disabled pending Unchained support for ${this.coin}.`),
    )
  }
}
