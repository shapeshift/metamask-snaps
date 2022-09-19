import {
  BinanceBroadcastTransactionParams,
  BinanceGetAddressParams,
  BinanceSignTransactionParams,
  BitcoinBroadcastTransactionParams,
  BitcoinCashBroadcastTransactionParams,
  BitcoinCashGetAddressParams,
  BitcoinCashSignTransactionParams,
  BitcoinGetAddressParams,
  BitcoinSignTransactionParams,
  CosmosBroadcastTransactionParams,
  CosmosGetAddressParams,
  CosmosSignTransactionParams,
  DogecoinBroadcastTransactionParams,
  DogecoinGetAddressParams,
  DogecoinSignTransactionParams,
  EthereumBroadcastTransactionParams,
  EthereumGetAddressParams,
  EthereumSignMessageParams,
  EthereumSignTransactionParams,
  EthereumVerifyMessageParams,
  KavaBroadcastTransactionParams,
  KavaGetAddressParams,
  KavaSignTransactionParams,
  LitecoinBroadcastTransactionParams,
  LitecoinGetAddressParams,
  LitecoinSignTransactionParams,
  OsmosisBroadcastTransactionParams,
  OsmosisGetAddressParams,
  OsmosisSignTransactionParams,
  SecretBroadcastTransactionParams,
  SecretGetAddressParams,
  SecretSignTransactionParams,
  TerraBroadcastTransactionParams,
  TerraGetAddressParams,
  TerraSignTransactionParams,
  ThorchainBroadcastTransactionParams,
  ThorchainGetAddressParams,
  ThorchainSignTransactionParams,
} from './params'

export interface BitcoinCashGetAddressRequest {
  method: 'bch_getAddress'
  params: BitcoinCashGetAddressParams
}

export interface BitcoinCashSignTransactionRequest {
  method: 'bch_signTransaction'
  params: BitcoinCashSignTransactionParams
}

export interface BitcoinCashBroadcastTransactionRequest {
  method: 'bch_broadcastTransaction'
  params: BitcoinCashBroadcastTransactionParams
}

export interface BinanceGetAddressRequest {
  method: 'binance_getAddress'
  params: BinanceGetAddressParams
}
export interface BinanceSignTransactionRequest {
  method: 'binance_signTransaction'
  params: BinanceSignTransactionParams
}

export interface BinanceBroadcastTransactionRequest {
  method: 'binance_broadcastTransaction'
  params: BinanceBroadcastTransactionParams
}

export interface BitcoinGetAddressRequest {
  method: 'btc_getAddress'
  params: BitcoinGetAddressParams
}

export interface BitcoinSignTransactionRequest {
  method: 'btc_signTransaction'
  params: BitcoinSignTransactionParams
}

export interface BitcoinBroadcastTransactionRequest {
  method: 'btc_broadcastTransaction'
  params: BitcoinBroadcastTransactionParams
}

export interface CosmosGetAddressRequest {
  method: 'cosmos_getAddress'
  params: CosmosGetAddressParams
}
export interface CosmosSignTransactionRequest {
  method: 'cosmos_signTransaction'
  params: CosmosSignTransactionParams
}

export interface CosmosBroadcastTransactionRequest {
  method: 'cosmos_broadcastTransaction'
  params: CosmosBroadcastTransactionParams
}

export interface DogecoinGetAddressRequest {
  method: 'doge_getAddress'
  params: DogecoinGetAddressParams
}

export interface DogecoinSignTransactionRequest {
  method: 'doge_signTransaction'
  params: DogecoinSignTransactionParams
}

export interface DogecoinBroadcastTransactionRequest {
  method: 'doge_broadcastTransaction'
  params: DogecoinBroadcastTransactionParams
}

export interface EthereumGetAddressRequest {
  method: 'eth_getAddress'
  params: EthereumGetAddressParams
}

export interface EthereumSignMessageRequest {
  method: 'eth_signMessage'
  params: EthereumSignMessageParams
}

export interface EthereumSignTransactionRequest {
  method: 'eth_signTransaction'
  params: EthereumSignTransactionParams
}

export interface EthereumVerifyMessageRequest {
  method: 'eth_verifyMessage'
  params: EthereumVerifyMessageParams
}

export interface EthereumBroadcastTransactionRequest {
  method: 'eth_broadcastTransaction'
  params: EthereumBroadcastTransactionParams
}

export interface KavaGetAddressRequest {
  method: 'kava_getAddress'
  params: KavaGetAddressParams
}
export interface KavaSignTransactionRequest {
  method: 'kava_signTransaction'
  params: KavaSignTransactionParams
}

export interface KavaBroadcastTransactionRequest {
  method: 'kava_broadcastTransaction'
  params: KavaBroadcastTransactionParams
}

export interface LitecoinGetAddressRequest {
  method: 'ltc_getAddress'
  params: LitecoinGetAddressParams
}

export interface LitecoinSignTransactionRequest {
  method: 'ltc_signTransaction'
  params: LitecoinSignTransactionParams
}

export interface LitecoinBroadcastTransactionRequest {
  method: 'ltc_broadcastTransaction'
  params: LitecoinBroadcastTransactionParams
}

export interface OsmosisGetAddressRequest {
  method: 'osmosis_getAddress'
  params: OsmosisGetAddressParams
}
export interface OsmosisSignTransactionRequest {
  method: 'osmosis_signTransaction'
  params: OsmosisSignTransactionParams
}

export interface OsmosisBroadcastTransactionRequest {
  method: 'osmosis_broadcastTransaction'
  params: OsmosisBroadcastTransactionParams
}

export interface PingRequest {
  method: 'ping'
  params: null
}

export interface SecretGetAddressRequest {
  method: 'secret_getAddress'
  params: SecretGetAddressParams
}
export interface SecretSignTransactionRequest {
  method: 'secret_signTransaction'
  params: SecretSignTransactionParams
}

export interface SecretBroadcastTransactionRequest {
  method: 'secret_broadcastTransaction'
  params: SecretBroadcastTransactionParams
}

export interface TerraGetAddressRequest {
  method: 'terra_getAddress'
  params: TerraGetAddressParams
}
export interface TerraSignTransactionRequest {
  method: 'terra_signTransaction'
  params: TerraSignTransactionParams
}

export interface TerraBroadcastTransactionRequest {
  method: 'terra_broadcastTransaction'
  params: TerraBroadcastTransactionParams
}

export interface ThorchainGetAddressRequest {
  method: 'thorchain_getAddress'
  params: ThorchainGetAddressParams
}
export interface ThorchainSignTransactionRequest {
  method: 'thorchain_signTransaction'
  params: ThorchainSignTransactionParams
}

export interface ThorchainBroadcastTransactionRequest {
  method: 'thorchain_broadcastTransaction'
  params: ThorchainBroadcastTransactionParams
}

export type ShapeShiftSnapRPCRequest =
  | BinanceBroadcastTransactionRequest
  | BinanceGetAddressRequest
  | BinanceSignTransactionRequest
  | BitcoinBroadcastTransactionRequest
  | BitcoinCashBroadcastTransactionRequest
  | BitcoinCashGetAddressRequest
  | BitcoinCashSignTransactionRequest
  | BitcoinGetAddressRequest
  | BitcoinSignTransactionRequest
  | CosmosBroadcastTransactionRequest
  | CosmosGetAddressRequest
  | CosmosSignTransactionRequest
  | DogecoinBroadcastTransactionRequest
  | DogecoinGetAddressRequest
  | DogecoinSignTransactionRequest
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
  | LitecoinSignTransactionRequest
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
