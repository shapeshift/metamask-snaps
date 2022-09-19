import { BaseSigner, SignerArgs } from '../../common'
import {
  BroadcastTransactionParamsType,
  BroadcastTransactionResponseType,
  EVMChainIds,
  GetAddressParamsType,
  GetAddressResponseType,
  SignerGetAddressType,
  SignMessageParamsType,
  SignMessageResponseType,
  SignTransactionParamsType,
  SignTransactionResponseType,
  VerifyMessageParamsType,
  VerifyMessageResponseType,
} from '@shapeshiftoss/metamask-snaps-types'

export abstract class EVMSigner<T extends EVMChainIds> extends BaseSigner<T> {
  constructor(args: SignerArgs) {
    super(args)
  }

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
      return await this.signer.ethSignMessage(message)
    } catch (error) {
      this.logger.error(message, { fn: 'ethSignMessage' }, error)
      return Promise.reject(error)
    }
  }

  async verifyMessage({
    message,
  }: VerifyMessageParamsType<T>): Promise<VerifyMessageResponseType<T>> {
    try {
      return await this.signer.ethVerifyMessage(message)
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
