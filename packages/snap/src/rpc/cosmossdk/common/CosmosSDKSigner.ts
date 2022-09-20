import {
  BroadcastTransactionParamsType,
  BroadcastTransactionResponseType,
  CosmosSDKChainIds,
  GetAddressParamsType,
  GetAddressResponseType,
  SignTransactionParamsType,
  SignTransactionResponseType,
} from '@shapeshiftoss/metamask-snaps-types'

import { BaseSigner } from '../../common'

export abstract class CosmosSDKSigner<T extends CosmosSDKChainIds> extends BaseSigner<T> {
  abstract getAddress({
    addressParams,
  }: GetAddressParamsType<T>): Promise<GetAddressResponseType<T>>

  abstract signTransaction({
    transaction,
  }: SignTransactionParamsType<T>): Promise<SignTransactionResponseType<T>>

  abstract broadcastTransaction(
    params: BroadcastTransactionParamsType<T>,
  ): Promise<BroadcastTransactionResponseType<T>>
}
