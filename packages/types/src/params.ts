import {
  BinanceGetAddress,
  BTCGetAddress as BitcoinCashGetAddress,
  BTCGetAddress,
  BTCGetAddress as DogecoinGetAddress,
  BTCGetAddress as LitecoinGetAddress,
  CosmosGetAddress,
  ETHGetAddress,
  KavaGetAddress,
  OsmosisGetAddress,
  SecretGetAddress,
  TerraGetAddress,
  ThorchainGetAddress,
} from '@shapeshiftoss/hdwallet-core'

import {
  BinanceSignedTransaction,
  BinanceSignTransaction,
  BitcoinCashSignedTransaction,
  BitcoinCashSignMessage,
  BitcoinCashSignTransaction,
  BitcoinCashVerifyMessage,
  BitcoinSignedTransaction,
  BitcoinSignMessage,
  BitcoinSignTransaction,
  BitcoinVerifyMessage,
  CosmosSignedTransaction,
  CosmosSignTransaction,
  DogecoinSignedTransaction,
  DogecoinSignMessage,
  DogecoinSignTransaction,
  DogecoinVerifyMessage,
  EthereumSignedTransaction,
  EthereumSignMessage,
  EthereumSignTransaction,
  EthereumVerifyMessage,
  KavaSignedTransaction,
  KavaSignTransaction,
  LitecoinSignedTransaction,
  LitecoinSignMessage,
  LitecoinSignTransaction,
  LitecoinVerifyMessage,
  OsmosisSignedTransaction,
  OsmosisSignTransaction,
  SecretSignedTransaction,
  SecretSignTransaction,
  TerraSignedTransaction,
  TerraSignTransaction,
  ThorchainSignedTransaction,
  ThorchainSignTransaction,
} from './common'

export type BroadcastTransactionParams<T> = {
  transaction: T
  baseUrl: string
}

export type GetAddressParams<T> = {
  addressParams: T
}

export type SignMessageParams<T> = {
  message: T
}

export type SignTransactionParams<T> = {
  transaction: T
}

export type VerifyMessageParams<T> = {
  message: T
}

export type BinanceBroadcastTransactionParams = BroadcastTransactionParams<BinanceSignedTransaction>
export type BinanceGetAddressParams = GetAddressParams<BinanceGetAddress>
export type BinanceSignTransactionParams = SignTransactionParams<BinanceSignTransaction>
export type BitcoinBroadcastTransactionParams = BroadcastTransactionParams<BitcoinSignedTransaction>
export type BitcoinCashBroadcastTransactionParams =
  BroadcastTransactionParams<BitcoinCashSignedTransaction>
export type BitcoinCashGetAddressParams = GetAddressParams<BitcoinCashGetAddress>
export type BitcoinCashSignMessageParams = SignMessageParams<BitcoinCashSignMessage>
export type BitcoinCashSignTransactionParams = SignTransactionParams<BitcoinCashSignTransaction>
export type BitcoinCashVerifyMessageParams = VerifyMessageParams<BitcoinCashVerifyMessage>
export type BitcoinGetAddressParams = GetAddressParams<BTCGetAddress>
export type BitcoinSignMessageParams = SignMessageParams<BitcoinSignMessage>
export type BitcoinSignTransactionParams = SignTransactionParams<BitcoinSignTransaction>
export type BitcoinVerifyMessageParams = VerifyMessageParams<BitcoinVerifyMessage>
export type CosmosBroadcastTransactionParams = BroadcastTransactionParams<CosmosSignedTransaction>
export type CosmosGetAddressParams = GetAddressParams<CosmosGetAddress>
export type CosmosSignTransactionParams = SignTransactionParams<CosmosSignTransaction>
export type DogecoinBroadcastTransactionParams =
  BroadcastTransactionParams<DogecoinSignedTransaction>
export type DogecoinGetAddressParams = GetAddressParams<DogecoinGetAddress>
export type DogecoinSignMessageParams = SignMessageParams<DogecoinSignMessage>
export type DogecoinSignTransactionParams = SignTransactionParams<DogecoinSignTransaction>
export type DogecoinVerifyMessageParams = VerifyMessageParams<DogecoinVerifyMessage>
export type EthereumBroadcastTransactionParams =
  BroadcastTransactionParams<EthereumSignedTransaction>
export type EthereumGetAddressParams = GetAddressParams<ETHGetAddress>
export type EthereumSignMessageParams = SignMessageParams<EthereumSignMessage>
export type EthereumSignTransactionParams = SignTransactionParams<EthereumSignTransaction>
export type EthereumVerifyMessageParams = VerifyMessageParams<EthereumVerifyMessage>
export type KavaBroadcastTransactionParams = BroadcastTransactionParams<KavaSignedTransaction>
export type KavaGetAddressParams = GetAddressParams<KavaGetAddress>
export type KavaSignTransactionParams = SignTransactionParams<KavaSignTransaction>
export type LitecoinBroadcastTransactionParams =
  BroadcastTransactionParams<LitecoinSignedTransaction>
export type LitecoinGetAddressParams = GetAddressParams<LitecoinGetAddress>
export type LitecoinSignMessageParams = SignMessageParams<LitecoinSignMessage>
export type LitecoinSignTransactionParams = SignTransactionParams<LitecoinSignTransaction>
export type LitecoinVerifyMessageParams = VerifyMessageParams<LitecoinVerifyMessage>
export type OsmosisBroadcastTransactionParams = BroadcastTransactionParams<OsmosisSignedTransaction>
export type OsmosisGetAddressParams = GetAddressParams<OsmosisGetAddress>
export type OsmosisSignTransactionParams = SignTransactionParams<OsmosisSignTransaction>
export type SecretBroadcastTransactionParams = BroadcastTransactionParams<SecretSignedTransaction>
export type SecretGetAddressParams = GetAddressParams<SecretGetAddress>
export type SecretSignTransactionParams = SignTransactionParams<SecretSignTransaction>
export type TerraBroadcastTransactionParams = BroadcastTransactionParams<TerraSignedTransaction>
export type TerraGetAddressParams = GetAddressParams<TerraGetAddress>
export type TerraSignTransactionParams = SignTransactionParams<TerraSignTransaction>
export type ThorchainBroadcastTransactionParams =
  BroadcastTransactionParams<ThorchainSignedTransaction>
export type ThorchainGetAddressParams = GetAddressParams<ThorchainGetAddress>
export type ThorchainSignTransactionParams = SignTransactionParams<ThorchainSignTransaction>
