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
import assert from 'assert'

import { SignerArgs } from '../../common/BaseSigner'
import { logger } from '../../common/lib/logger'
import { CosmosSDKSigner } from '../common/CosmosSDKSigner'

export class KavaSigner extends CosmosSDKSigner<SupportedChainIds.KavaMainnet> {
  constructor() {
    const args: SignerArgs = {
      coin: 'Kava',
      logger: logger.child({ namespace: ['Snap', 'RPC', 'CosmosSDK', 'Kava', 'KavaSigner.ts'] }),
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
  }: GetAddressParamsType<SupportedChainIds.KavaMainnet>): Promise<
    GetAddressResponseType<SupportedChainIds.KavaMainnet>
  > {
    const { addressNList } = addressParams
    try {
      const address = await this.signer.kavaGetAddress({
        addressNList,
        showDisplay: false,
      } as SignerGetAddressType<SupportedChainIds.KavaMainnet>)
      assert(address !== null, 'Address generation failed')
      return address
    } catch (error) {
      this.logger.error({ fn: 'getAddress' }, error)
      return Promise.reject(error)
    }
  }

  async signTransaction({
    transaction,
  }: SignTransactionParamsType<SupportedChainIds.KavaMainnet>): Promise<
    SignTransactionResponseType<SupportedChainIds.KavaMainnet>
  > {
    try {
      const confirmed = await this.confirmTransaction(transaction)
      assert(confirmed, 'User rejected the signing request')
      const signedTransaction = await this.signer.kavaSignTx(
        transaction as SignerSignTransactionType<SupportedChainIds.KavaMainnet>,
      )
      assert(signedTransaction !== null, 'Transaction signing failed')
      this.logEvent("signTransaction", {unsignedTransaction: transaction, signedTransaction})
      return signedTransaction
    } catch (error) {
      this.logger.error(transaction, { fn: 'signTransaction' }, error)
      return Promise.reject(error)
    }
  }

  async broadcastTransaction(): Promise<
    BroadcastTransactionResponseType<SupportedChainIds.KavaMainnet>
  > {
    return Promise.reject(
      new Error(`Broadcast disabled pending Unchained support for ${this.coin}.`),
    )
  }
}
