import {
  BinanceAddress,
  BinanceBroadcastTransactionParams,
  BinanceBroadcastTransactionResponse,
  BinanceGetAddress,
  BinanceGetAddressParams,
  BinanceGetAddressResponse,
  BinanceSignedTransaction,
  BinanceSignTransaction,
  BinanceSignTransactionParams,
  BinanceSignTransactionResponse,
  BitcoinAddress,
  BitcoinBroadcastTransactionParams,
  BitcoinBroadcastTransactionResponse,
  BitcoinCashAddress,
  BitcoinCashBroadcastTransactionParams,
  BitcoinCashBroadcastTransactionResponse,
  BitcoinCashGetAddress,
  BitcoinCashGetAddressParams,
  BitcoinCashGetAddressResponse,
  BitcoinCashSignedTransaction,
  BitcoinCashSignTransaction,
  BitcoinCashSignTransactionParams,
  BitcoinCashSignTransactionResponse,
  BitcoinGetAddress,
  BitcoinGetAddressParams,
  BitcoinGetAddressResponse,
  BitcoinSignedTransaction,
  BitcoinSignTransaction,
  BitcoinSignTransactionParams,
  BitcoinSignTransactionResponse,
  CosmosAddress,
  CosmosBroadcastTransactionParams,
  CosmosBroadcastTransactionResponse,
  CosmosGetAddress,
  CosmosGetAddressParams,
  CosmosGetAddressResponse,
  CosmosSignedTransaction,
  CosmosSignTransaction,
  CosmosSignTransactionParams,
  CosmosSignTransactionResponse,
  DogecoinAddress,
  DogecoinBroadcastTransactionParams,
  DogecoinBroadcastTransactionResponse,
  DogecoinGetAddress,
  DogecoinGetAddressParams,
  DogecoinGetAddressResponse,
  DogecoinSignedTransaction,
  DogecoinSignTransaction,
  DogecoinSignTransactionParams,
  DogecoinSignTransactionResponse,
  EthereumAddress,
  EthereumBroadcastTransactionParams,
  EthereumBroadcastTransactionResponse,
  EthereumGetAddress,
  EthereumGetAddressParams,
  EthereumGetAddressResponse,
  EthereumSignedTransaction,
  EthereumSignMessageParams,
  EthereumSignMessageResponse,
  EthereumSignTransaction,
  EthereumSignTransactionParams,
  EthereumSignTransactionResponse,
  EthereumVerifyMessageParams,
  EthereumVerifyMessageResponse,
  KavaAddress,
  KavaBroadcastTransactionParams,
  KavaBroadcastTransactionResponse,
  KavaGetAddress,
  KavaGetAddressParams,
  KavaGetAddressResponse,
  KavaSignedTransaction,
  KavaSignTransaction,
  KavaSignTransactionParams,
  KavaSignTransactionResponse,
  LitecoinAddress,
  LitecoinBroadcastTransactionParams,
  LitecoinBroadcastTransactionResponse,
  LitecoinGetAddress,
  LitecoinGetAddressParams,
  LitecoinGetAddressResponse,
  LitecoinSignedTransaction,
  LitecoinSignTransaction,
  LitecoinSignTransactionParams,
  LitecoinSignTransactionResponse,
  OsmosisAddress,
  OsmosisBroadcastTransactionParams,
  OsmosisBroadcastTransactionResponse,
  OsmosisGetAddress,
  OsmosisGetAddressParams,
  OsmosisGetAddressResponse,
  OsmosisSignedTransaction,
  OsmosisSignTransaction,
  OsmosisSignTransactionParams,
  OsmosisSignTransactionResponse,
  SecretAddress,
  SecretBroadcastTransactionParams,
  SecretBroadcastTransactionResponse,
  SecretGetAddress,
  SecretGetAddressParams,
  SecretGetAddressResponse,
  SecretSignedTransaction,
  SecretSignTransaction,
  SecretSignTransactionParams,
  SecretSignTransactionResponse,
  TerraAddress,
  TerraBroadcastTransactionParams,
  TerraBroadcastTransactionResponse,
  TerraGetAddress,
  TerraGetAddressParams,
  TerraGetAddressResponse,
  TerraSignedTransaction,
  TerraSignTransaction,
  TerraSignTransactionParams,
  TerraSignTransactionResponse,
  ThorchainAddress,
  ThorchainBroadcastTransactionParams,
  ThorchainBroadcastTransactionResponse,
  ThorchainGetAddress,
  ThorchainGetAddressParams,
  ThorchainGetAddressResponse,
  ThorchainSignedTransaction,
  ThorchainSignTransaction,
  ThorchainSignTransactionParams,
  ThorchainSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import * as unchained from '@shapeshiftoss/unchained-client'

export { NativeHDWallet } from '@shapeshiftoss/hdwallet-native'
export { Logger } from '@shapeshiftoss/logger'
export {
  BinanceBroadcastTransactionParams,
  BinanceBroadcastTransactionResponse,
  BinanceGetAddressParams,
  BinanceSignTransactionParams,
  BinanceSignTransactionResponse,
  BitcoinBroadcastTransactionParams,
  BitcoinBroadcastTransactionResponse,
  BitcoinCashBroadcastTransactionParams,
  BitcoinCashBroadcastTransactionResponse,
  BitcoinCashGetAddressParams,
  BitcoinCashSignTransactionParams,
  BitcoinCashSignTransactionResponse,
  BitcoinGetAddressParams,
  BitcoinSignTransactionParams,
  BitcoinSignTransactionResponse,
  CosmosBroadcastTransactionParams,
  CosmosBroadcastTransactionResponse,
  CosmosGetAddressParams,
  CosmosSignTransactionParams,
  CosmosSignTransactionResponse,
  DogecoinBroadcastTransactionParams,
  DogecoinBroadcastTransactionResponse,
  DogecoinGetAddressParams,
  DogecoinSignTransactionParams,
  DogecoinSignTransactionResponse,
  EthereumBroadcastTransactionParams,
  EthereumBroadcastTransactionResponse,
  EthereumGetAddressParams,
  EthereumSignTransactionParams,
  EthereumSignTransactionResponse,
  KavaBroadcastTransactionParams,
  KavaBroadcastTransactionResponse,
  KavaGetAddressParams,
  KavaSignTransactionParams,
  KavaSignTransactionResponse,
  LitecoinBroadcastTransactionParams,
  LitecoinBroadcastTransactionResponse,
  LitecoinGetAddressParams,
  LitecoinSignTransactionParams,
  LitecoinSignTransactionResponse,
  OsmosisBroadcastTransactionParams,
  OsmosisBroadcastTransactionResponse,
  OsmosisGetAddressParams,
  OsmosisSignTransactionParams,
  OsmosisSignTransactionResponse,
  SecretBroadcastTransactionParams,
  SecretBroadcastTransactionResponse,
  SecretGetAddressParams,
  SecretSignTransactionParams,
  SecretSignTransactionResponse,
  TerraBroadcastTransactionParams,
  TerraBroadcastTransactionResponse,
  TerraGetAddressParams,
  TerraSignTransactionParams,
  TerraSignTransactionResponse,
  ThorchainBroadcastTransactionParams,
  ThorchainBroadcastTransactionResponse,
  ThorchainGetAddressParams,
  ThorchainSignTransactionParams,
  ThorchainSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

// TODO: Replace local definition with KnownChainIds imported from @shapeshiftoss/types once all chains here are added to KnownChainIds
export enum SupportedChainIds {
  EthereumMainnet = 'eip155:1',
  AvalancheMainnet = 'eip155:43114',
  BitcoinMainnet = 'bip122:000000000019d6689c085ae165831e93',
  BitcoinCashMainnet = 'bip122:000000000000000000651ef99cb9fcbe',
  DogecoinMainnet = 'bip122:00000000001a91e3dace36e2be3bf030',
  LitecoinMainnet = 'bip122:12a765e31ffd4059bada1e25190f6e98',
  CosmosMainnet = 'cosmos:cosmoshub-4',
  OsmosisMainnet = 'cosmos:osmosis-1',
  ThorchainMainnet = 'cosmos:thorchain-mainnet-v1',
  BinanceMainnet = 'cosmos:binance-chain-tigris',
  KavaMainnet = 'cosmos:kava_2222-10',
  TerraMainnet = 'cosmos:phoenix-1',
  SecretMainnet = 'cosmos:secret-4',
}

type GetAddressParamsTypeTable = {
  //   [SupportedChainIds.AvalancheMainnet]: AvalancheGetAddressParams
  [SupportedChainIds.BinanceMainnet]: BinanceGetAddressParams
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashGetAddressParams
  [SupportedChainIds.BitcoinMainnet]: BitcoinGetAddressParams
  [SupportedChainIds.CosmosMainnet]: CosmosGetAddressParams
  [SupportedChainIds.DogecoinMainnet]: DogecoinGetAddressParams
  [SupportedChainIds.EthereumMainnet]: EthereumGetAddressParams
  [SupportedChainIds.KavaMainnet]: KavaGetAddressParams
  [SupportedChainIds.LitecoinMainnet]: LitecoinGetAddressParams
  [SupportedChainIds.OsmosisMainnet]: OsmosisGetAddressParams
  [SupportedChainIds.SecretMainnet]: SecretGetAddressParams
  [SupportedChainIds.TerraMainnet]: TerraGetAddressParams
  [SupportedChainIds.ThorchainMainnet]: ThorchainGetAddressParams
}

type GetAddressResponseTypeTable = {
  // [SupportedChainIds.AvalancheMainnet]: AvalancheGetAddressResponse
  [SupportedChainIds.BinanceMainnet]: BinanceGetAddressResponse
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashGetAddressResponse
  [SupportedChainIds.BitcoinMainnet]: BitcoinGetAddressResponse
  [SupportedChainIds.CosmosMainnet]: CosmosGetAddressResponse
  [SupportedChainIds.DogecoinMainnet]: DogecoinGetAddressResponse
  [SupportedChainIds.EthereumMainnet]: EthereumGetAddressResponse
  [SupportedChainIds.KavaMainnet]: KavaGetAddressResponse
  [SupportedChainIds.LitecoinMainnet]: LitecoinGetAddressResponse
  [SupportedChainIds.OsmosisMainnet]: OsmosisGetAddressResponse
  [SupportedChainIds.SecretMainnet]: SecretGetAddressResponse
  [SupportedChainIds.TerraMainnet]: TerraGetAddressResponse
  [SupportedChainIds.ThorchainMainnet]: ThorchainGetAddressResponse
}

type SignTransactionParamsTypeTable = {
  // [SupportedChainIds.AvalancheMainnet]: AvalancheSignTransactionParams
  [SupportedChainIds.BinanceMainnet]: BinanceSignTransactionParams
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashSignTransactionParams
  [SupportedChainIds.BitcoinMainnet]: BitcoinSignTransactionParams
  [SupportedChainIds.CosmosMainnet]: CosmosSignTransactionParams
  [SupportedChainIds.DogecoinMainnet]: DogecoinSignTransactionParams
  [SupportedChainIds.EthereumMainnet]: EthereumSignTransactionParams
  [SupportedChainIds.KavaMainnet]: KavaSignTransactionParams
  [SupportedChainIds.LitecoinMainnet]: LitecoinSignTransactionParams
  [SupportedChainIds.OsmosisMainnet]: OsmosisSignTransactionParams
  [SupportedChainIds.SecretMainnet]: SecretSignTransactionParams
  [SupportedChainIds.TerraMainnet]: TerraSignTransactionParams
  [SupportedChainIds.ThorchainMainnet]: ThorchainSignTransactionParams
}

export type SignTransactionResponseTypeTable = {
  // [SupportedChainIds.AvalancheMainnet]: AvalancheSignTransactionResponse
  [SupportedChainIds.BinanceMainnet]: BinanceSignTransactionResponse
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashSignTransactionResponse
  [SupportedChainIds.BitcoinMainnet]: BitcoinSignTransactionResponse
  [SupportedChainIds.CosmosMainnet]: CosmosSignTransactionResponse
  [SupportedChainIds.DogecoinMainnet]: DogecoinSignTransactionResponse
  [SupportedChainIds.EthereumMainnet]: EthereumSignTransactionResponse
  [SupportedChainIds.KavaMainnet]: KavaSignTransactionResponse
  [SupportedChainIds.LitecoinMainnet]: LitecoinSignTransactionResponse
  [SupportedChainIds.OsmosisMainnet]: OsmosisSignTransactionResponse
  [SupportedChainIds.SecretMainnet]: SecretSignTransactionResponse
  [SupportedChainIds.TerraMainnet]: TerraSignTransactionResponse
  [SupportedChainIds.ThorchainMainnet]: ThorchainSignTransactionResponse
}

type BroadcastTransactionParamsTypeTable = {
  // [SupportedChainIds.AvalancheMainnet]: AvalancheBroadcastTransactionParams
  [SupportedChainIds.BinanceMainnet]: BinanceBroadcastTransactionParams
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashBroadcastTransactionParams
  [SupportedChainIds.BitcoinMainnet]: BitcoinBroadcastTransactionParams
  [SupportedChainIds.CosmosMainnet]: CosmosBroadcastTransactionParams
  [SupportedChainIds.DogecoinMainnet]: DogecoinBroadcastTransactionParams
  [SupportedChainIds.EthereumMainnet]: EthereumBroadcastTransactionParams
  [SupportedChainIds.KavaMainnet]: KavaBroadcastTransactionParams
  [SupportedChainIds.LitecoinMainnet]: LitecoinBroadcastTransactionParams
  [SupportedChainIds.OsmosisMainnet]: OsmosisBroadcastTransactionParams
  [SupportedChainIds.SecretMainnet]: SecretBroadcastTransactionParams
  [SupportedChainIds.TerraMainnet]: TerraBroadcastTransactionParams
  [SupportedChainIds.ThorchainMainnet]: ThorchainBroadcastTransactionParams
}

type BroadcastTransactionResponseTypeTable = {
  // [SupportedChainIds.AvalancheMainnet]: AvalancheBroadcastTransactionResponse
  [SupportedChainIds.BinanceMainnet]: BinanceBroadcastTransactionResponse
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashBroadcastTransactionResponse
  [SupportedChainIds.BitcoinMainnet]: BitcoinBroadcastTransactionResponse
  [SupportedChainIds.CosmosMainnet]: CosmosBroadcastTransactionResponse
  [SupportedChainIds.DogecoinMainnet]: DogecoinBroadcastTransactionResponse
  [SupportedChainIds.EthereumMainnet]: EthereumBroadcastTransactionResponse
  [SupportedChainIds.KavaMainnet]: KavaBroadcastTransactionResponse
  [SupportedChainIds.LitecoinMainnet]: LitecoinBroadcastTransactionResponse
  [SupportedChainIds.OsmosisMainnet]: OsmosisBroadcastTransactionResponse
  [SupportedChainIds.SecretMainnet]: SecretBroadcastTransactionResponse
  [SupportedChainIds.TerraMainnet]: TerraBroadcastTransactionResponse
  [SupportedChainIds.ThorchainMainnet]: ThorchainBroadcastTransactionResponse
}

type SignMessageParamsTypeTable = {
  // [SupportedChainIds.AvalancheMainnet]: AvalancheSignMessageParams
  [SupportedChainIds.EthereumMainnet]: EthereumSignMessageParams
}

type VerifyMessageParamsTypeTable = {
  // [SupportedChainIds.AvalancheMainnet]: AvalancheVerifyMessageParams
  [SupportedChainIds.EthereumMainnet]: EthereumVerifyMessageParams
}

type SignMessageResponseTypeTable = {
  // [SupportedChainIds.AvalancheMainnet]: AvalancheSignMessageResponse
  [SupportedChainIds.EthereumMainnet]: EthereumSignMessageResponse
}

type VerifyMessageResponseTypeTable = {
  // [SupportedChainIds.AvalancheMainnet]: AvalancheVerifyMessageResponse
  [SupportedChainIds.EthereumMainnet]: EthereumVerifyMessageResponse
}

type HTTPConfigurationTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: unchained.avalanche.Configuration
  [SupportedChainIds.BinanceMainnet]: undefined
  [SupportedChainIds.BitcoinCashMainnet]: unchained.bitcoincash.Configuration
  [SupportedChainIds.BitcoinMainnet]: unchained.bitcoin.Configuration
  [SupportedChainIds.CosmosMainnet]: unchained.cosmos.Configuration
  [SupportedChainIds.DogecoinMainnet]: unchained.dogecoin.Configuration
  [SupportedChainIds.EthereumMainnet]: unchained.ethereum.Configuration
  [SupportedChainIds.KavaMainnet]: undefined
  [SupportedChainIds.LitecoinMainnet]: unchained.litecoin.Configuration
  [SupportedChainIds.OsmosisMainnet]: unchained.osmosis.Configuration
  [SupportedChainIds.SecretMainnet]: undefined
  [SupportedChainIds.TerraMainnet]: undefined
  [SupportedChainIds.ThorchainMainnet]: unchained.thorchain.Configuration
}

type HTTPProviderTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: unchained.avalanche.V1Api
  [SupportedChainIds.BinanceMainnet]: undefined
  [SupportedChainIds.BitcoinCashMainnet]: unchained.bitcoincash.V1Api
  [SupportedChainIds.BitcoinMainnet]: unchained.bitcoin.V1Api
  [SupportedChainIds.CosmosMainnet]: unchained.cosmos.V1Api
  [SupportedChainIds.DogecoinMainnet]: unchained.dogecoin.V1Api
  [SupportedChainIds.EthereumMainnet]: unchained.ethereum.V1Api
  [SupportedChainIds.KavaMainnet]: undefined
  [SupportedChainIds.LitecoinMainnet]: unchained.litecoin.V1Api
  [SupportedChainIds.OsmosisMainnet]: unchained.osmosis.V1Api
  [SupportedChainIds.SecretMainnet]: undefined
  [SupportedChainIds.TerraMainnet]: undefined
  [SupportedChainIds.ThorchainMainnet]: unchained.thorchain.V1Api
}

type SignerSignTransactionTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: EthereumSignTransaction
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashSignTransaction
  [SupportedChainIds.BitcoinMainnet]: BitcoinSignTransaction
  [SupportedChainIds.CosmosMainnet]: CosmosSignTransaction
  [SupportedChainIds.DogecoinMainnet]: DogecoinSignTransaction
  [SupportedChainIds.EthereumMainnet]: EthereumSignTransaction
  [SupportedChainIds.LitecoinMainnet]: LitecoinSignTransaction
  [SupportedChainIds.OsmosisMainnet]: OsmosisSignTransaction
  [SupportedChainIds.ThorchainMainnet]: ThorchainSignTransaction
  [SupportedChainIds.BinanceMainnet]: BinanceSignTransaction
  [SupportedChainIds.TerraMainnet]: TerraSignTransaction
  [SupportedChainIds.KavaMainnet]: KavaSignTransaction
  [SupportedChainIds.SecretMainnet]: SecretSignTransaction
}

type SignerSignTransactionReturnTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: EthereumSignedTransaction
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashSignedTransaction
  [SupportedChainIds.BitcoinMainnet]: BitcoinSignedTransaction
  [SupportedChainIds.CosmosMainnet]: CosmosSignedTransaction
  [SupportedChainIds.DogecoinMainnet]: DogecoinSignedTransaction
  [SupportedChainIds.EthereumMainnet]: EthereumSignedTransaction
  [SupportedChainIds.LitecoinMainnet]: LitecoinSignedTransaction
  [SupportedChainIds.OsmosisMainnet]: OsmosisSignedTransaction
  [SupportedChainIds.ThorchainMainnet]: ThorchainSignedTransaction
  [SupportedChainIds.BinanceMainnet]: BinanceSignedTransaction
  [SupportedChainIds.TerraMainnet]: TerraSignedTransaction
  [SupportedChainIds.KavaMainnet]: KavaSignedTransaction
  [SupportedChainIds.SecretMainnet]: SecretSignedTransaction
}

type SignerGetAddressTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: EthereumGetAddress
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashGetAddress
  [SupportedChainIds.BitcoinMainnet]: BitcoinGetAddress
  [SupportedChainIds.CosmosMainnet]: CosmosGetAddress
  [SupportedChainIds.DogecoinMainnet]: DogecoinGetAddress
  [SupportedChainIds.EthereumMainnet]: EthereumGetAddress
  [SupportedChainIds.LitecoinMainnet]: LitecoinGetAddress
  [SupportedChainIds.OsmosisMainnet]: OsmosisGetAddress
  [SupportedChainIds.ThorchainMainnet]: ThorchainGetAddress
  [SupportedChainIds.BinanceMainnet]: BinanceGetAddress
  [SupportedChainIds.TerraMainnet]: TerraGetAddress
  [SupportedChainIds.KavaMainnet]: KavaGetAddress
  [SupportedChainIds.SecretMainnet]: SecretGetAddress
}

type SignerGetAddressReturnTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: EthereumAddress
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashAddress
  [SupportedChainIds.BitcoinMainnet]: BitcoinAddress
  [SupportedChainIds.CosmosMainnet]: CosmosAddress
  [SupportedChainIds.DogecoinMainnet]: DogecoinAddress
  [SupportedChainIds.EthereumMainnet]: EthereumAddress
  [SupportedChainIds.LitecoinMainnet]: LitecoinAddress
  [SupportedChainIds.OsmosisMainnet]: OsmosisAddress
  [SupportedChainIds.ThorchainMainnet]: ThorchainAddress
  [SupportedChainIds.BinanceMainnet]: BinanceAddress
  [SupportedChainIds.TerraMainnet]: TerraAddress
  [SupportedChainIds.KavaMainnet]: KavaAddress
  [SupportedChainIds.SecretMainnet]: SecretAddress
}

export type GetAddressParamsType<T> = T extends keyof GetAddressParamsTypeTable
  ? GetAddressParamsTypeTable[T]
  : never
export type GetAddressResponseType<T> = T extends keyof GetAddressResponseTypeTable
  ? GetAddressResponseTypeTable[T]
  : never
export type SignTransactionParamsType<T> = T extends keyof SignTransactionParamsTypeTable
  ? SignTransactionParamsTypeTable[T]
  : never
export type SignTransactionResponseType<T> = T extends keyof SignTransactionResponseTypeTable
  ? SignTransactionResponseTypeTable[T]
  : never
export type BroadcastTransactionParamsType<T> = T extends keyof BroadcastTransactionParamsTypeTable
  ? BroadcastTransactionParamsTypeTable[T]
  : never
export type BroadcastTransactionResponseType<T> =
  T extends keyof BroadcastTransactionResponseTypeTable
    ? BroadcastTransactionResponseTypeTable[T]
    : never
export type SignMessageParamsType<T> = T extends keyof SignMessageParamsTypeTable
  ? SignMessageParamsTypeTable[T]
  : never
export type VerifyMessageParamsType<T> = T extends keyof VerifyMessageParamsTypeTable
  ? VerifyMessageParamsTypeTable[T]
  : never
export type SignMessageResponseType<T> = T extends keyof SignMessageResponseTypeTable
  ? SignMessageResponseTypeTable[T]
  : never

export type VerifyMessageResponseType<T> = T extends keyof VerifyMessageResponseTypeTable
  ? VerifyMessageResponseTypeTable[T]
  : never
export type HTTPConfigurationType<T> = T extends keyof HTTPConfigurationTypeTable
  ? HTTPConfigurationTypeTable[T]
  : never
export type HTTPProviderType<T> = T extends keyof HTTPProviderTypeTable
  ? HTTPProviderTypeTable[T]
  : never
export type SignerSignTransactionType<T> = T extends keyof SignerSignTransactionTypeTable
  ? SignerSignTransactionTypeTable[T]
  : never
export type SignerGetAddressType<T> = T extends keyof SignerGetAddressTypeTable
  ? SignerGetAddressTypeTable[T]
  : never
export type SignerSignTransactionReturnType<T> =
  T extends keyof SignerSignTransactionReturnTypeTable
    ? SignerSignTransactionReturnTypeTable[T]
    : never
export type SignerGetAddressReturnType<T> = T extends keyof SignerGetAddressReturnTypeTable
  ? SignerGetAddressReturnTypeTable[T]
  : never

export const CosmosSDKChainIds = [
  SupportedChainIds.BinanceMainnet,
  SupportedChainIds.CosmosMainnet,
  SupportedChainIds.KavaMainnet,
  SupportedChainIds.OsmosisMainnet,
  SupportedChainIds.SecretMainnet,
  SupportedChainIds.TerraMainnet,
  SupportedChainIds.ThorchainMainnet,
] as const

export const EVMChainIds = [
  SupportedChainIds.AvalancheMainnet,
  SupportedChainIds.EthereumMainnet,
] as const

export const UTXOChainIds = [
  SupportedChainIds.BitcoinMainnet,
  SupportedChainIds.BitcoinCashMainnet,
  SupportedChainIds.DogecoinMainnet,
  SupportedChainIds.LitecoinMainnet,
] as const

export type CosmosSDKChainIds = typeof CosmosSDKChainIds[number]
export type EVMChainIds = typeof EVMChainIds[number]
export type UTXOChainIds = typeof UTXOChainIds[number]
