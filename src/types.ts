import { ChainId } from '@shapeshiftoss/caip'
import {
  BTCSignMessage,
  BTCSignTx,
  BTCVerifyMessage,
  CosmosSignTx,
  ETHSignMessage,
  ETHSignTx,
  ETHVerifyMessage,
} from '@shapeshiftoss/hdwallet-core'

export interface HelloRequest {
  method: 'hello'
  params: undefined
}

export interface GetAddressRequest {
  method: 'get_address'
  params: {
    chainId: ChainId
    derivationPath: number
  }
}

export interface BTCGetAddressRequest {
  method: 'btc_getAddress'
  params: undefined
}

export interface BTCSignTransactionRequest {
  method: 'btc_signTransaction'
  params: {
    transaction: BTCSignTx
  }
}

export interface BTCSignMessageRequest {
  method: 'btc_signMessage'
  params: {
    message: BTCSignMessage
  }
}

export interface BTCVerifyMessageRequest {
  method: 'btc_verifyMessage'
  params: {
    message: BTCVerifyMessage
  }
}

export interface CosmosGetAddressRequest {
  method: 'cosmos_getAddress'
  params: undefined
}
export interface CosmosSignTransactionRequest {
  method: 'cosmos_signTransaction'
  params: {
    transaction: CosmosSignTx
  }
}

export interface ETHGetAddressRequest {
  method: 'eth_getAddress'
  params: undefined
}

export interface ETHSignMessageRequest {
  method: 'eth_signMessage'
  params: {
    message: ETHSignMessage
  }
}

export interface ETHSignTransactionRequest {
  method: 'eth_signTransaction'
  params: {
    transaction: ETHSignTx
  }
}

export interface ETHVerifyMessageRequest {
  method: 'eth_verifyMessage'
  params: {
    message: ETHVerifyMessage
  }
}

export type MetaMaskRPCRequest =
  | HelloRequest
  | GetAddressRequest
  | BTCGetAddressRequest
  | BTCSignTransactionRequest
  | BTCSignMessageRequest
  | BTCVerifyMessageRequest
  | CosmosGetAddressRequest
  | CosmosSignTransactionRequest
  | ETHGetAddressRequest
  | ETHSignMessageRequest
  | ETHSignTransactionRequest
  | ETHVerifyMessageRequest
