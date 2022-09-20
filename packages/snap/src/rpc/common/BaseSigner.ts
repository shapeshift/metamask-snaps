import { Logger } from '@shapeshiftoss/logger'
import {
  BroadcastTransactionParamsType,
  BroadcastTransactionResponseType,
  GetAddressParamsType,
  GetAddressResponseType,
  HTTPProviderType,
  NativeHDWallet,
  SignTransactionParamsType,
  SignTransactionResponseType,
  SupportedChainIds,
} from '@shapeshiftoss/metamask-snaps-types'

import { getHDWalletNativeSigner, userConfirm } from '../common'

export interface SignerArgs {
  coin: string
  logger: Logger
}

export interface SignerInitializeArgs {
  broadcastUrl: string
}

export abstract class BaseSigner<T extends SupportedChainIds> {
  protected readonly coin: string

  protected signer: NativeHDWallet

  protected logger: Logger

  protected httpProvider: HTTPProviderType<T>

  protected initialized: boolean

  protected constructor(args: SignerArgs) {
    this.initialized = false
    this.coin = args.coin
    this.logger = args.logger
  }

  protected async initializeSigner(): Promise<NativeHDWallet> {
    try {
      const signer = await getHDWalletNativeSigner(this.coin)
      if (signer === null) {
        throw new Error(`Could not initialize ${this.coin} signer`)
      }
      return signer
    } catch (error) {
      this.logger.error({ fn: 'getSigner' }, error)
      return Promise.reject(error)
    }
  }

  protected async confirmTransaction(transaction: any): Promise<boolean> {
    return await userConfirm({
      prompt: `Sign ${this.coin} Transaction?`,
      description: 'Please verify the transaction data below',
      textAreaContent: JSON.stringify(transaction, null, 2),
    })
  }

  abstract getAddress(params: GetAddressParamsType<T>): Promise<GetAddressResponseType<T>>

  abstract signTransaction(
    params: SignTransactionParamsType<T>,
  ): Promise<SignTransactionResponseType<T>>

  abstract broadcastTransaction(
    params: BroadcastTransactionParamsType<T>,
  ): Promise<BroadcastTransactionResponseType<T>>
}
