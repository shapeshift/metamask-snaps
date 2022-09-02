import { JsonRpcError } from '@metamask/types'

import {
  BinanceSignedTransaction,
  BitcoinCashSignedMessage,
  BitcoinCashSignedTransaction,
  BitcoinSignedMessage,
  BitcoinSignedTransaction,
  CosmosSignedTransaction,
  DogecoinSignedMessage,
  DogecoinSignedTransaction,
  EthereumSignedMessage,
  EthereumSignedTransaction,
  KavaSignedTransaction,
  LitecoinSignedMessage,
  LitecoinSignedTransaction,
  OsmosisSignedTransaction,
  SecretSignedTransaction,
  TerraSignedTransaction,
  ThorchainSignedTransaction,
} from './common'

export type RPCHandlerError = Error | JsonRpcError | string | null
export type RPCHandlerResponse<T> = T | RPCHandlerError

export type BinanceBroadcastTransactionResponse = RPCHandlerResponse<string>
export type BinanceGetAddressResponse = RPCHandlerResponse<string>
export type BinanceSignTransactionResponse = RPCHandlerResponse<BinanceSignedTransaction>
export type BitcoinBroadcastTransactionResponse = RPCHandlerResponse<string>
export type BitcoinCashBroadcastTransactionResponse = RPCHandlerResponse<string>
export type BitcoinCashGetAddressResponse = RPCHandlerResponse<string>
export type BitcoinCashSignMessageResponse = RPCHandlerResponse<BitcoinCashSignedMessage | string>
export type BitcoinCashSignTransactionResponse = RPCHandlerResponse<BitcoinCashSignedTransaction>
export type BitcoinCashVerifyMessageResponse = RPCHandlerResponse<boolean>
export type BitcoinGetAddressResponse = RPCHandlerResponse<string>
export type BitcoinSignMessageResponse = RPCHandlerResponse<BitcoinSignedMessage>
export type BitcoinSignTransactionResponse = RPCHandlerResponse<BitcoinSignedTransaction>
export type BitcoinVerifyMessageResponse = RPCHandlerResponse<boolean>
export type CosmosBroadcastTransactionResponse = RPCHandlerResponse<string>
export type CosmosGetAddressResponse = RPCHandlerResponse<string>
export type CosmosSignTransactionResponse = RPCHandlerResponse<CosmosSignedTransaction>
export type DogecoinBroadcastTransactionResponse = RPCHandlerResponse<string>
export type DogecoinGetAddressResponse = RPCHandlerResponse<string>
export type DogecoinSignMessageResponse = RPCHandlerResponse<DogecoinSignedMessage>
export type DogecoinSignTransactionResponse = RPCHandlerResponse<DogecoinSignedTransaction>
export type DogecoinVerifyMessageResponse = RPCHandlerResponse<boolean>
export type EthereumBroadcastTransactionResponse = RPCHandlerResponse<string>
export type EthereumGetAddressResponse = RPCHandlerResponse<string>
export type EthereumSignMessageResponse = RPCHandlerResponse<EthereumSignedMessage>
export type EthereumSignTransactionResponse = RPCHandlerResponse<EthereumSignedTransaction>
export type EthereumVerifyMessageResponse = RPCHandlerResponse<boolean>
export type KavaBroadcastTransactionResponse = RPCHandlerResponse<string>
export type KavaGetAddressResponse = RPCHandlerResponse<string>
export type KavaSignTransactionResponse = RPCHandlerResponse<KavaSignedTransaction>
export type LitecoinBroadcastTransactionResponse = RPCHandlerResponse<string>
export type LitecoinGetAddressResponse = RPCHandlerResponse<string>
export type LitecoinSignMessageResponse = RPCHandlerResponse<LitecoinSignedMessage>
export type LitecoinSignTransactionResponse = RPCHandlerResponse<LitecoinSignedTransaction>
export type LitecoinVerifyMessageResponse = RPCHandlerResponse<boolean>
export type OsmosisBroadcastTransactionResponse = RPCHandlerResponse<string>
export type OsmosisGetAddressResponse = RPCHandlerResponse<string>
export type OsmosisSignTransactionResponse = RPCHandlerResponse<OsmosisSignedTransaction>
export type PingResponse = RPCHandlerResponse<string>
export type SecretBroadcastTransactionResponse = RPCHandlerResponse<string>
export type SecretGetAddressResponse = RPCHandlerResponse<string>
export type SecretSignTransactionResponse = RPCHandlerResponse<SecretSignedTransaction>
export type TerraBroadcastTransactionResponse = RPCHandlerResponse<string>
export type TerraGetAddressResponse = RPCHandlerResponse<string>
export type TerraSignTransactionResponse = RPCHandlerResponse<TerraSignedTransaction>
export type ThorchainBroadcastTransactionResponse = RPCHandlerResponse<string>
export type ThorchainGetAddressResponse = RPCHandlerResponse<string>
export type ThorchainSignTransactionResponse = RPCHandlerResponse<ThorchainSignedTransaction>

export type ShapeShiftSnapRPCResponse =
  | BinanceBroadcastTransactionResponse
  | BinanceGetAddressResponse
  | BinanceSignTransactionResponse
  | BitcoinBroadcastTransactionResponse
  | BitcoinCashBroadcastTransactionResponse
  | BitcoinCashGetAddressResponse
  | BitcoinCashSignMessageResponse
  | BitcoinCashSignTransactionResponse
  | BitcoinCashVerifyMessageResponse
  | BitcoinGetAddressResponse
  | BitcoinSignMessageResponse
  | BitcoinSignTransactionResponse
  | BitcoinVerifyMessageResponse
  | CosmosBroadcastTransactionResponse
  | CosmosGetAddressResponse
  | CosmosSignTransactionResponse
  | DogecoinBroadcastTransactionResponse
  | DogecoinGetAddressResponse
  | DogecoinSignMessageResponse
  | DogecoinSignTransactionResponse
  | DogecoinVerifyMessageResponse
  | EthereumBroadcastTransactionResponse
  | EthereumGetAddressResponse
  | EthereumSignMessageResponse
  | EthereumSignTransactionResponse
  | EthereumVerifyMessageResponse
  | KavaBroadcastTransactionResponse
  | KavaGetAddressResponse
  | KavaSignTransactionResponse
  | LitecoinBroadcastTransactionResponse
  | LitecoinGetAddressResponse
  | LitecoinSignMessageResponse
  | LitecoinSignTransactionResponse
  | LitecoinVerifyMessageResponse
  | OsmosisBroadcastTransactionResponse
  | OsmosisGetAddressResponse
  | OsmosisSignTransactionResponse
  | PingResponse
  | SecretBroadcastTransactionResponse
  | SecretGetAddressResponse
  | SecretSignTransactionResponse
  | TerraBroadcastTransactionResponse
  | TerraGetAddressResponse
  | TerraSignTransactionResponse
  | ThorchainBroadcastTransactionResponse
  | ThorchainGetAddressResponse
  | ThorchainSignTransactionResponse
