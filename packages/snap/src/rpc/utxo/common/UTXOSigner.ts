import type {
  BroadcastTransactionParamsType,
  BroadcastTransactionResponseType,
  GetAddressParamsType,
  GetAddressResponseType,
  SignerGetAddressType,
  SignerSignTransactionType,
  SignTransactionParamsType,
  SignTransactionResponseType,
  UTXOChainIds,
} from '@shapeshiftoss/metamask-snaps-types'
import assert from 'assert'

import { asyncCallWithTimeout, BaseSigner } from '../../common'

export abstract class UTXOSigner<T extends UTXOChainIds> extends BaseSigner<T> {
  async getAddress({ addressParams }: GetAddressParamsType<T>): Promise<GetAddressResponseType<T>> {
    const { coin, addressNList, scriptType } = addressParams
    try {
      const address = await this.signer.btcGetAddress({
        coin,
        addressNList,
        scriptType,
        showDisplay: false,
      } as SignerGetAddressType<T>)
      assert(address !== null, 'Address generation failed')
      return address as GetAddressResponseType<T>
    } catch (error) {
      this.logger.error({ fn: 'getAddress' }, error)
      return Promise.reject(error)
    }
  }

  async signTransaction({
    origin,
    transaction,
  }: SignTransactionParamsType<T>): Promise<SignTransactionResponseType<T>> {
    try {
      const confirmed = await this.confirmTransaction(origin, transaction)
      assert(confirmed, 'User rejected the signing request')
      const signedTransaction = await asyncCallWithTimeout(
        this.signer.btcSignTx(transaction as SignerSignTransactionType<T>),
      )
      assert(signedTransaction !== null, 'Transaction signing failed')
      this.logEvent('signTransaction', {
        unsignedTransaction: transaction,
        signedTransaction,
      })
      return signedTransaction as SignTransactionResponseType<T>
    } catch (error) {
      this.logger.error(transaction, { fn: 'signTransaction' }, error)
      return Promise.reject(error)
    }
  }

  async broadcastTransaction({
    transaction,
  }: BroadcastTransactionParamsType<T>): Promise<BroadcastTransactionResponseType<T>> {
    try {
      return (await this.httpProvider.sendTx({
        sendTxBody: { hex: transaction.serializedTx },
      })) as BroadcastTransactionResponseType<T>
    } catch (error) {
      this.logger.error(transaction, { fn: 'broadcastTransaction' }, error)
      return Promise.reject(error)
    }
  }
}
