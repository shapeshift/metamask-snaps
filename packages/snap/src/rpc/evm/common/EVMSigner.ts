import {
  BroadcastTransactionParamsType,
  BroadcastTransactionResponseType,
  EVMChainIds,
  GetAddressParamsType,
  GetAddressResponseType,
  SignerGetAddressType,
  SignerSignMessageReturnType,
  SignerSignMessageType,
  SignerVerifyMessageReturnType,
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
  protected signerSignMessage: (
    params: SignerSignMessageType<T>,
  ) => Promise<SignerSignMessageReturnType<T>>

  protected signerVerifyMessage: (
    params: SignerVerifyMessageType<T>,
  ) => Promise<SignerVerifyMessageReturnType<T>>

  async getAddress({ addressParams }: GetAddressParamsType<T>): Promise<GetAddressResponseType<T>> {
    const { addressNList } = addressParams
    try {
      const address = await this.signerGetAddress({
        addressNList,
        showDisplay: false,
      } as SignerGetAddressType<T>)
      if (address === null) {
        throw new Error('Address generation failed')
      }
      return address
    } catch (error) {
      this.logger.error({ fn: 'getAddress' }, error)
      return Promise.reject(error)
    }
  }

  async signMessage({ message }: SignMessageParamsType<T>): Promise<SignMessageResponseType<T>> {
    try {
      return await this.signerSignMessage(message)
    } catch (error) {
      this.logger.error(message, { fn: 'ethSignMessage' }, error)
      return Promise.reject(error)
    }
  }

  async verifyMessage({
    message,
  }: VerifyMessageParamsType<T>): Promise<VerifyMessageResponseType<T>> {
    try {
      return await this.signerVerifyMessage(message)
    } catch (error) {
      this.logger.error(message, { fn: 'ethVerifyMessage' }, error)
      return Promise.reject(error)
    }
  }

  async signTransaction({
    transaction,
  }: SignTransactionParamsType<T>): Promise<SignTransactionResponseType<T>> {
    try {
      if (!this.confirmTransaction(transaction)) {
        throw new Error('User rejected the signing request')
      }
      const signedTransaction = await this.signerSignTransaction(transaction)
      if (signedTransaction === null) {
        throw new Error('Transaction signing failed')
      }
      return signedTransaction
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
