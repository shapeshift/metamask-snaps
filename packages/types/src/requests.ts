import {
  BinanceGetAddressParams,
  BinanceSignedTransaction,
  BinanceSignTransaction,
  BitcoinCashGetAddressParams,
  BitcoinCashSignedTransaction,
  BitcoinCashSignMessage,
  BitcoinCashVerifyMessage,
  BitcoinGetAddressParams,
  BitcoinSignedTransaction,
  BitcoinSignMessage,
  BitcoinSignTransaction,
  BitcoinVerifyMessage,
  CosmosGetAddressParams,
  CosmosSignedTransaction,
  CosmosSignTransaction,
  DogecoinGetAddressParams,
  DogecoinSignedTransaction,
  DogecoinSignMessage,
  DogecoinSignTransaction,
  DogecoinVerifyMessage,
  EthereumGetAddressParams,
  EthereumSignedTransaction,
  EthereumSignMessage,
  EthereumSignTransaction,
  EthereumVerifyMessage,
  KavaGetAddressParams,
  KavaSignedTransaction,
  KavaSignTransaction,
  LitecoinGetAddressParams,
  LitecoinSignedTransaction,
  LitecoinSignMessage,
  LitecoinSignTransaction,
  LitecoinVerifyMessage,
  OsmosisGetAddressParams,
  OsmosisSignedTransaction,
  OsmosisSignTransaction,
  SecretGetAddressParams,
  SecretSignedTransaction,
  SecretSignTransaction,
  TerraGetAddressParams,
  TerraSignedTransaction,
  TerraSignTransaction,
  ThorchainGetAddressParams,
  ThorchainSignedTransaction,
  ThorchainSignTransaction,
} from './common'

export interface BitcoinCashGetAddressRequest {
  method: 'bch_getAddress'
  params: {
    params: BitcoinCashGetAddressParams
  }
}

export interface BitcoinCashSignTransactionRequest {
  method: 'bch_signTransaction'
  params: {
    transaction: BitcoinSignTransaction
  }
}

export interface BitcoinCashSignMessageRequest {
  method: 'bch_signMessage'
  params: {
    message: BitcoinCashSignMessage
  }
}

export interface BitcoinCashVerifyMessageRequest {
  method: 'bch_verifyMessage'
  params: {
    message: BitcoinCashVerifyMessage
  }
}

export interface BitcoinCashBroadcastTransactionRequest {
  method: 'bch_broadcastTransaction'
  params: {
    transaction: BitcoinCashSignedTransaction
  }
}

export interface BinanceGetAddressRequest {
  method: 'binance_getAddress'
  params: {
    params: BinanceGetAddressParams
  }
}
export interface BinanceSignTransactionRequest {
  method: 'binance_signTransaction'
  params: {
    transaction: BinanceSignTransaction
  }
}

export interface BinanceBroadcastTransactionRequest {
  method: 'binance_broadcastTransaction'
  params: {
    transaction: BinanceSignedTransaction
  }
}

export interface BitcoinGetAddressRequest {
  method: 'btc_getAddress'
  params: {
    params: BitcoinGetAddressParams
  }
}

export interface BitcoinSignTransactionRequest {
  method: 'btc_signTransaction'
  params: {
    transaction: BitcoinSignTransaction
  }
}

export interface BitcoinSignMessageRequest {
  method: 'btc_signMessage'
  params: {
    message: BitcoinSignMessage
  }
}

export interface BitcoinBroadcastTransactionRequest {
  method: 'btc_broadcastTransaction'
  params: {
    transaction: BitcoinSignedTransaction
  }
}

export interface BitcoinVerifyMessageRequest {
  method: 'btc_verifyMessage'
  params: {
    message: BitcoinVerifyMessage
  }
}

export interface CosmosGetAddressRequest {
  method: 'cosmos_getAddress'
  params: {
    params: CosmosGetAddressParams
  }
}
export interface CosmosSignTransactionRequest {
  method: 'cosmos_signTransaction'
  params: {
    transaction: CosmosSignTransaction
  }
}

export interface CosmosBroadcastTransactionRequest {
  method: 'cosmos_broadcastTransaction'
  params: {
    transaction: CosmosSignedTransaction
  }
}

export interface DogecoinGetAddressRequest {
  method: 'doge_getAddress'
  params: {
    params: DogecoinGetAddressParams
  }
}

export interface DogecoinSignTransactionRequest {
  method: 'doge_signTransaction'
  params: {
    transaction: DogecoinSignTransaction
  }
}

export interface DogecoinSignMessageRequest {
  method: 'doge_signMessage'
  params: {
    message: DogecoinSignMessage
  }
}

export interface DogecoinVerifyMessageRequest {
  method: 'doge_verifyMessage'
  params: {
    message: DogecoinVerifyMessage
  }
}

export interface DogecoinBroadcastTransactionRequest {
  method: 'doge_broadcastTransaction'
  params: {
    transaction: DogecoinSignedTransaction
  }
}

export interface EthereumGetAddressRequest {
  method: 'eth_getAddress'
  params: {
    params: EthereumGetAddressParams
  }
}

export interface EthereumSignMessageRequest {
  method: 'eth_signMessage'
  params: {
    message: EthereumSignMessage
  }
}

export interface EthereumSignTransactionRequest {
  method: 'eth_signTransaction'
  params: {
    transaction: EthereumSignTransaction
  }
}

export interface EthereumVerifyMessageRequest {
  method: 'eth_verifyMessage'
  params: {
    message: EthereumVerifyMessage
  }
}

export interface EthereumBroadcastTransactionRequest {
  method: 'eth_broadcastTransaction'
  params: {
    transaction: EthereumSignedTransaction
  }
}

export interface KavaGetAddressRequest {
  method: 'kava_getAddress'
  params: {
    params: KavaGetAddressParams
  }
}
export interface KavaSignTransactionRequest {
  method: 'kava_signTransaction'
  params: {
    transaction: KavaSignTransaction
  }
}

export interface KavaBroadcastTransactionRequest {
  method: 'kava_broadcastTransaction'
  params: {
    transaction: KavaSignedTransaction
  }
}

export interface LitecoinGetAddressRequest {
  method: 'ltc_getAddress'
  params: {
    params: LitecoinGetAddressParams
  }
}

export interface LitecoinSignTransactionRequest {
  method: 'ltc_signTransaction'
  params: {
    transaction: LitecoinSignTransaction
  }
}

export interface LitecoinSignMessageRequest {
  method: 'ltc_signMessage'
  params: {
    message: LitecoinSignMessage
  }
}

export interface LitecoinVerifyMessageRequest {
  method: 'ltc_verifyMessage'
  params: {
    message: LitecoinVerifyMessage
  }
}

export interface LitecoinBroadcastTransactionRequest {
  method: 'ltc_broadcastTransaction'
  params: {
    transaction: LitecoinSignedTransaction
  }
}

export interface OsmosisGetAddressRequest {
  method: 'osmosis_getAddress'
  params: {
    params: OsmosisGetAddressParams
  }
}
export interface OsmosisSignTransactionRequest {
  method: 'osmosis_signTransaction'
  params: {
    transaction: OsmosisSignTransaction
  }
}

export interface OsmosisBroadcastTransactionRequest {
  method: 'osmosis_broadcastTransaction'
  params: {
    transaction: OsmosisSignedTransaction
  }
}

export interface PingRequest {
  method: 'ping'
  params: null
}

export interface SecretGetAddressRequest {
  method: 'secret_getAddress'
  params: {
    params: SecretGetAddressParams
  }
}
export interface SecretSignTransactionRequest {
  method: 'secret_signTransaction'
  params: {
    transaction: SecretSignTransaction
  }
}

export interface SecretBroadcastTransactionRequest {
  method: 'secret_broadcastTransaction'
  params: {
    transaction: SecretSignedTransaction
  }
}

export interface TerraGetAddressRequest {
  method: 'terra_getAddress'
  params: {
    params: TerraGetAddressParams
  }
}
export interface TerraSignTransactionRequest {
  method: 'terra_signTransaction'
  params: {
    transaction: TerraSignTransaction
  }
}

export interface TerraBroadcastTransactionRequest {
  method: 'terra_broadcastTransaction'
  params: {
    transaction: TerraSignedTransaction
  }
}

export interface ThorchainGetAddressRequest {
  method: 'thorchain_getAddress'
  params: {
    params: ThorchainGetAddressParams
  }
}
export interface ThorchainSignTransactionRequest {
  method: 'thorchain_signTransaction'
  params: {
    transaction: ThorchainSignTransaction
  }
}

export interface ThorchainBroadcastTransactionRequest {
  method: 'thorchain_broadcastTransaction'
  params: {
    transaction: ThorchainSignedTransaction
  }
}

export type ShapeShiftSnapRPCRequest =
  | BinanceBroadcastTransactionRequest
  | BinanceGetAddressRequest
  | BinanceSignTransactionRequest
  | BitcoinBroadcastTransactionRequest
  | BitcoinCashBroadcastTransactionRequest
  | BitcoinCashGetAddressRequest
  | BitcoinCashSignMessageRequest
  | BitcoinCashSignTransactionRequest
  | BitcoinCashVerifyMessageRequest
  | BitcoinGetAddressRequest
  | BitcoinSignMessageRequest
  | BitcoinSignTransactionRequest
  | BitcoinVerifyMessageRequest
  | CosmosBroadcastTransactionRequest
  | CosmosGetAddressRequest
  | CosmosSignTransactionRequest
  | DogecoinBroadcastTransactionRequest
  | DogecoinGetAddressRequest
  | DogecoinSignMessageRequest
  | DogecoinSignTransactionRequest
  | DogecoinVerifyMessageRequest
  | EthereumBroadcastTransactionRequest
  | EthereumGetAddressRequest
  | EthereumSignMessageRequest
  | EthereumSignTransactionRequest
  | EthereumVerifyMessageRequest
  | KavaBroadcastTransactionRequest
  | KavaGetAddressRequest
  | KavaSignTransactionRequest
  | LitecoinBroadcastTransactionRequest
  | LitecoinGetAddressRequest
  | LitecoinSignMessageRequest
  | LitecoinSignTransactionRequest
  | LitecoinVerifyMessageRequest
  | OsmosisBroadcastTransactionRequest
  | OsmosisGetAddressRequest
  | OsmosisSignTransactionRequest
  | PingRequest
  | SecretBroadcastTransactionRequest
  | SecretGetAddressRequest
  | SecretSignTransactionRequest
  | TerraBroadcastTransactionRequest
  | TerraGetAddressRequest
  | TerraSignTransactionRequest
  | ThorchainBroadcastTransactionRequest
  | ThorchainGetAddressRequest
  | ThorchainSignTransactionRequest
