import {
  BroadcastTransactionParamsType,
  BroadcastTransactionResponseType,
  EVMChainIds,
  GetAddressParamsType,
  GetAddressResponseType,
  SignerGetAddressType,
  SignerSignMessageType,
  SignerSignTransactionType,
  SignerVerifyMessageType,
  SignMessageParamsType,
  SignMessageResponseType,
  SignTransactionParamsType,
  SignTransactionResponseType,
  VerifyMessageParamsType,
  VerifyMessageResponseType,
} from '@shapeshiftoss/metamask-snaps-types'

import { BaseSigner } from '../../common'

export abstract class EVMSigner<T extends EVMChainIds> extends BaseSigner<T> {
  async getAddress({ addressParams }: GetAddressParamsType<T>): Promise<GetAddressResponseType<T>> {
    const { addressNList } = addressParams
    try {
      const address = await this.signer.ethGetAddress({
        addressNList,
        showDisplay: false,
      } as SignerGetAddressType<T>)
      if (address === null) {
        throw new Error('Address generation failed')
      }
      return address as GetAddressResponseType<T>
    } catch (error) {
      this.logger.error({ fn: 'getAddress' }, error)
      return Promise.reject(error)
    }
  }

  async signMessage({ message }: SignMessageParamsType<T>): Promise<SignMessageResponseType<T>> {
    try {
      return (await this.signer.ethSignMessage(
        message as SignerSignMessageType<T>,
      )) as SignMessageResponseType<T>
    } catch (error) {
      this.logger.error(message, { fn: 'ethSignMessage' }, error)
      return Promise.reject(error)
    }
  }

  async verifyMessage({
    message,
  }: VerifyMessageParamsType<T>): Promise<VerifyMessageResponseType<T>> {
    try {
      return (await this.signer.ethVerifyMessage(
        message as SignerVerifyMessageType<T>,
      )) as VerifyMessageResponseType<T>
    } catch (error) {
      this.logger.error(message, { fn: 'ethVerifyMessage' }, error)
      return Promise.reject(error)
    }
  }

  async signTransaction({
    transaction,
  }: SignTransactionParamsType<T>): Promise<SignTransactionResponseType<T>> {
    try {
      if (!(await this.confirmTransaction(transaction))) {
        throw new Error('User rejected the signing request')
      }
      const signedTransaction = await this.signer.ethSignTx(
        transaction as SignerSignTransactionType<T>,
      )
      if (signedTransaction === null) {
        throw new Error('Transaction signing failed')
      }
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
        sendTxBody: { hex: transaction.serialized },
      })) as BroadcastTransactionResponseType<T>
    } catch (error) {
      this.logger.error(transaction, { fn: 'broadcastTransaction' }, error)
      return Promise.reject(error)
    }
  }
}
