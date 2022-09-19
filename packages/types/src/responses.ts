import { JsonRpcError } from '@metamask/types'

import {
  BinanceAddress,
  BinanceSignedTransaction,
  BitcoinAddress,
  BitcoinCashAddress,
  BitcoinCashSignedTransaction,
  BitcoinSignedTransaction,
  CosmosAddress,
  CosmosSignedTransaction,
  DogecoinAddress,
  DogecoinSignedTransaction,
  EthereumAddress,
  EthereumSignedMessage,
  EthereumSignedTransaction,
  KavaAddress,
  KavaSignedTransaction,
  LitecoinAddress,
  LitecoinSignedTransaction,
  OsmosisAddress,
  OsmosisSignedTransaction,
  SecretAddress,
  SecretSignedTransaction,
  TerraAddress,
  TerraSignedTransaction,
  ThorchainAddress,
  ThorchainSignedTransaction,
} from './common'

export type RPCHandlerError = Error | JsonRpcError

export type BinanceBroadcastTransactionResponse = string
export type BinanceGetAddressResponse = BinanceAddress
export type BinanceSignTransactionResponse = BinanceSignedTransaction
export type BitcoinBroadcastTransactionResponse = string
export type BitcoinCashBroadcastTransactionResponse = string
export type BitcoinCashGetAddressResponse = BitcoinCashAddress
export type BitcoinCashSignTransactionResponse = BitcoinCashSignedTransaction
export type BitcoinGetAddressResponse = BitcoinAddress
export type BitcoinSignTransactionResponse = BitcoinSignedTransaction
export type CosmosBroadcastTransactionResponse = string
export type CosmosGetAddressResponse = CosmosAddress
export type CosmosSignTransactionResponse = CosmosSignedTransaction
export type DogecoinBroadcastTransactionResponse = string
export type DogecoinGetAddressResponse = DogecoinAddress
export type DogecoinSignTransactionResponse = DogecoinSignedTransaction
export type EthereumBroadcastTransactionResponse = string
export type EthereumGetAddressResponse = EthereumAddress
export type EthereumSignMessageResponse = EthereumSignedMessage
export type EthereumSignTransactionResponse = EthereumSignedTransaction
export type EthereumVerifyMessageResponse = boolean
export type KavaBroadcastTransactionResponse = string
export type KavaGetAddressResponse = KavaAddress
export type KavaSignTransactionResponse = KavaSignedTransaction
export type LitecoinBroadcastTransactionResponse = string
export type LitecoinGetAddressResponse = LitecoinAddress
export type LitecoinSignTransactionResponse = LitecoinSignedTransaction
export type OsmosisBroadcastTransactionResponse = string
export type OsmosisGetAddressResponse = OsmosisAddress
export type OsmosisSignTransactionResponse = OsmosisSignedTransaction
export type PingResponse = string
export type SecretBroadcastTransactionResponse = string
export type SecretGetAddressResponse = SecretAddress
export type SecretSignTransactionResponse = SecretSignedTransaction
export type TerraBroadcastTransactionResponse = string
export type TerraGetAddressResponse = TerraAddress
export type TerraSignTransactionResponse = TerraSignedTransaction
export type ThorchainBroadcastTransactionResponse = string
export type ThorchainGetAddressResponse = ThorchainAddress
export type ThorchainSignTransactionResponse = ThorchainSignedTransaction

export type ShapeShiftSnapRPCResponse =
  | BinanceBroadcastTransactionResponse
  | BinanceGetAddressResponse
  | BinanceSignTransactionResponse
  | BitcoinBroadcastTransactionResponse
  | BitcoinCashBroadcastTransactionResponse
  | BitcoinCashGetAddressResponse
  | BitcoinCashSignTransactionResponse
  | BitcoinGetAddressResponse
  | BitcoinSignTransactionResponse
  | CosmosBroadcastTransactionResponse
  | CosmosGetAddressResponse
  | CosmosSignTransactionResponse
  | DogecoinBroadcastTransactionResponse
  | DogecoinGetAddressResponse
  | DogecoinSignTransactionResponse
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
  | LitecoinSignTransactionResponse
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
