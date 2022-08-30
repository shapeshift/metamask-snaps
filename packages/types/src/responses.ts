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
  LitecoinSignedMessage,
  LitecoinSignedTransaction,
  OsmosisSignedTransaction,
  ThorchainSignedTransaction,
} from './common'

export type RPCHandlerError = Error | string | null
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
export type LitecoinBroadcastTransactionResponse = RPCHandlerResponse<string>
export type LitecoinGetAddressResponse = RPCHandlerResponse<string>
export type LitecoinSignMessageResponse = RPCHandlerResponse<LitecoinSignedMessage>
export type LitecoinSignTransactionResponse = RPCHandlerResponse<LitecoinSignedTransaction>
export type LitecoinVerifyMessageResponse = RPCHandlerResponse<boolean>
export type OsmosisBroadcastTransactionResponse = RPCHandlerResponse<string>
export type OsmosisGetAddressResponse = RPCHandlerResponse<string>
export type OsmosisSignTransactionResponse = RPCHandlerResponse<OsmosisSignedTransaction>
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
  | LitecoinBroadcastTransactionResponse
  | LitecoinGetAddressResponse
  | LitecoinSignMessageResponse
  | LitecoinSignTransactionResponse
  | LitecoinVerifyMessageResponse
  | OsmosisBroadcastTransactionResponse
  | OsmosisGetAddressResponse
  | OsmosisSignTransactionResponse
  | ThorchainBroadcastTransactionResponse
  | ThorchainGetAddressResponse
  | ThorchainSignTransactionResponse
