import { addressNListToBIP32, bip32Like } from '@shapeshiftoss/hdwallet-core'
import type {
  BroadcastTransactionResponseType,
  EVMChainIds,
  GetAddressParamsType,
  GetAddressResponseType,
  SendTransactionParamsType,
  SignMessageParamsType,
  SignMessageResponseType,
} from '@shapeshiftoss/metamask-snaps-types'
import assert from 'assert'
import { serializeError } from 'eth-rpc-errors'

import { BaseSigner } from '../../common'

const ERR_CHAIN_NOT_ADDED_TO_WALLET = 4902 // Internal error, which in the case of wallet_switchEthereumChain call means the chain isn't currently added to the wallet

export abstract class EVMSigner<T extends EVMChainIds> extends BaseSigner<T> {
  async getAddress({
    addressParams,
    chainId,
  }: GetAddressParamsType<T>): Promise<GetAddressResponseType<T>> {
    const { addressNList } = addressParams
    assert(
      bip32Like(addressNListToBIP32(addressNList)),
      'addressParams object does not contain valid BIP32 path',
    )
    try {
      // eslint-disable-next-line no-undef
      const err = await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId?.toLowerCase() }],
      })
      if (err != null) {
        const serializedError = serializeError(err)
        if (serializedError.code === ERR_CHAIN_NOT_ADDED_TO_WALLET) {
          throw new Error(
            `Selected chain with id ${chainId} has not yet been added to your MetaMask configuration. Try adding chain with id ${chainId} manually.`,
          )
        }
      }
      // eslint-disable-next-line no-undef
      const address = (await window.ethereum.request({ method: 'eth_requestAccounts' }))[0]
      assert(address !== null, 'Address generation failed')
      return address as GetAddressResponseType<T>
    } catch (error) {
      this.logger.error({ fn: 'getAddress' }, error)
      return Promise.reject(error)
    }
  }

  async signMessage({
    origin,
    message,
  }: SignMessageParamsType<T>): Promise<SignMessageResponseType<T>> {
    try {
      const confirmed = await this.confirmTransaction(origin, message)
      assert(confirmed, 'User rejected the signing request')
      // eslint-disable-next-line no-undef
      const err = await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId?.toLowerCase() }],
      })
      if (err != null) {
        const serializedError = serializeError(err)
        if (serializedError.code === ERR_CHAIN_NOT_ADDED_TO_WALLET) {
          throw new Error(
            `Selected chain with id ${chainId} has not yet been added to your MetaMask configuration. Try adding chain with id ${chainId} manually.`,
          )
        }
      }
      const fromAddress = (await window.ethereum.request({ method: 'eth_requestAccounts' }))[0]
      assert(fromAddress !== null, 'Address generation failed')
      // eslint-disable-next-line no-undef
      const signedMessage = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, fromAddress],
      })
      assert(signedMessage !== null, 'Transaction signing failed')
      this.logEvent('signMessage', { unsignedMessage: message, signedMessage })
      return signedMessage
    } catch (error) {
      this.logger.error(message, { fn: 'ethSignMessage' }, error)
      return Promise.reject(error)
    }
  }

  async sendTransaction({
    origin,
    transaction,
    chainId,
  }: SendTransactionParamsType<T>): Promise<BroadcastTransactionResponseType<T>> {
    try {
      const confirmed = await this.confirmTransaction(origin, transaction)
      assert(confirmed, 'User rejected the signing request')
      // eslint-disable-next-line no-undef
      const err = await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainId?.toLowerCase() }],
      })
      if (err != null) {
        const serializedError = serializeError(err)
        if (serializedError.code === ERR_CHAIN_NOT_ADDED_TO_WALLET) {
          throw new Error(
            `Selected chain with id ${chainId} has not yet been added to your MetaMask configuration. Try adding chain with id ${chainId} manually.`,
          )
        }
      }
      // eslint-disable-next-line no-undef
      const fromAddress = (await window.ethereum.request({ method: 'eth_requestAccounts' }))[0]
      assert(fromAddress !== null, 'Address generation failed')
      // eslint-disable-next-line no-undef
      const txid = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: {
          from: fromAddress,
          to: transaction.to,
          value: transaction.value,
          data: transaction.data,
          chainId,
          nonce: transaction.nonce,
          gas: transaction.gasLimit,
        },
      })
      assert(txid !== null, 'Transaction sign/broadcast failed')
      this.logEvent('sendTransaction', {
        unsignedTransaction: transaction,
        txid,
      })
      return txid as BroadcastTransactionResponseType<T>
    } catch (error) {
      this.logger.error(transaction, { fn: 'signTransaction' }, error)
      return Promise.reject(error)
    }
  }
}
