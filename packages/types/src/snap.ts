import type { JsonRpcError } from '@metamask/types'
import type * as unchained from '@shapeshiftoss/unchained-client'

import type {
  AvalancheAddress,
  AvalancheGetAddress,
  AvalancheSignedMessage,
  AvalancheSignMessage,
  AvalancheSignTransaction,
  BinanceAddress,
  BinanceGetAddress,
  BinanceSignedTransaction,
  BinanceSignTransaction,
  BitcoinAddress,
  BitcoinCashAddress,
  BitcoinCashGetAddress,
  BitcoinCashSignedTransaction,
  BitcoinCashSignTransaction,
  BitcoinGetAddress,
  BitcoinSignedTransaction,
  BitcoinSignTransaction,
  CosmosAddress,
  CosmosGetAddress,
  CosmosSignedTransaction,
  CosmosSignTransaction,
  DogecoinAddress,
  DogecoinGetAddress,
  DogecoinSignedTransaction,
  DogecoinSignTransaction,
  EthereumAddress,
  EthereumGetAddress,
  EthereumSignedMessage,
  EthereumSignMessage,
  EthereumSignTransaction,
  KavaAddress,
  KavaGetAddress,
  KavaSignedTransaction,
  KavaSignTransaction,
  LitecoinAddress,
  LitecoinGetAddress,
  LitecoinSignedTransaction,
  LitecoinSignTransaction,
  OsmosisAddress,
  OsmosisGetAddress,
  OsmosisSignedTransaction,
  OsmosisSignTransaction,
  SecretAddress,
  SecretGetAddress,
  SecretSignedTransaction,
  SecretSignTransaction,
  TerraAddress,
  TerraGetAddress,
  TerraSignedTransaction,
  TerraSignTransaction,
  ThorchainAddress,
  ThorchainGetAddress,
  ThorchainSignedTransaction,
  ThorchainSignTransaction,
} from './common'

export { NativeHDWallet } from '@shapeshiftoss/hdwallet-native'

// TODO: Replace local definition with KnownChainIds imported from @shapeshiftoss/types once all chains here are added to KnownChainIds
export enum SupportedChainIds {
  AvalancheMainnet = 'eip155:43114',
  BinanceMainnet = 'cosmos:binance-chain-tigris',
  BitcoinCashMainnet = 'bip122:000000000000000000651ef99cb9fcbe',
  BitcoinMainnet = 'bip122:000000000019d6689c085ae165831e93',
  CosmosMainnet = 'cosmos:cosmoshub-4',
  DogecoinMainnet = 'bip122:00000000001a91e3dace36e2be3bf030',
  EthereumMainnet = 'eip155:1',
  KavaMainnet = 'cosmos:kava_2222-10',
  LitecoinMainnet = 'bip122:12a765e31ffd4059bada1e25190f6e98',
  OsmosisMainnet = 'cosmos:osmosis-1',
  SecretMainnet = 'cosmos:secret-4',
  TerraMainnet = 'cosmos:phoenix-1',
  ThorchainMainnet = 'cosmos:thorchain-mainnet-v1',
}

const CosmosSDKChainIdList = [
  SupportedChainIds.BinanceMainnet,
  SupportedChainIds.CosmosMainnet,
  SupportedChainIds.KavaMainnet,
  SupportedChainIds.OsmosisMainnet,
  SupportedChainIds.SecretMainnet,
  SupportedChainIds.TerraMainnet,
  SupportedChainIds.ThorchainMainnet,
] as const

const EVMChainIdList = [
  SupportedChainIds.AvalancheMainnet,
  SupportedChainIds.EthereumMainnet,
] as const

const UTXOChainIdList = [
  SupportedChainIds.BitcoinMainnet,
  SupportedChainIds.BitcoinCashMainnet,
  SupportedChainIds.DogecoinMainnet,
  SupportedChainIds.LitecoinMainnet,
] as const

export type CosmosSDKChainIds = (typeof CosmosSDKChainIdList)[number]
export type EVMChainIds = (typeof EVMChainIdList)[number]
export type UTXOChainIds = (typeof UTXOChainIdList)[number]

/**  TYPES USED WITH GETADDRESS() METHODS ** */
export type GetAddressParams<T> = {
  addressParams: T
  chainId?: string
}

export type AvalancheGetAddressParams = GetAddressParams<AvalancheGetAddress>
export type BinanceGetAddressParams = GetAddressParams<BinanceGetAddress>
export type BitcoinCashGetAddressParams = GetAddressParams<BitcoinCashGetAddress>
export type BitcoinGetAddressParams = GetAddressParams<BitcoinGetAddress>
export type CosmosGetAddressParams = GetAddressParams<CosmosGetAddress>
export type DogecoinGetAddressParams = GetAddressParams<DogecoinGetAddress>
export type EthereumGetAddressParams = GetAddressParams<EthereumGetAddress>
export type KavaGetAddressParams = GetAddressParams<KavaGetAddress>
export type LitecoinGetAddressParams = GetAddressParams<LitecoinGetAddress>
export type OsmosisGetAddressParams = GetAddressParams<OsmosisGetAddress>
export type SecretGetAddressParams = GetAddressParams<SecretGetAddress>
export type TerraGetAddressParams = GetAddressParams<TerraGetAddress>
export type ThorchainGetAddressParams = GetAddressParams<ThorchainGetAddress>

type GetAddressParamsTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: AvalancheGetAddressParams
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

export type GetAddressParamsType<T> = T extends keyof GetAddressParamsTypeTable
  ? GetAddressParamsTypeTable[T]
  : never

export interface AvalancheGetAddressRequest {
  method: 'avax_getAddress'
  params: AvalancheGetAddressParams
}
export interface BinanceGetAddressRequest {
  method: 'binance_getAddress'
  params: BinanceGetAddressParams
}

export interface BitcoinCashGetAddressRequest {
  method: 'bch_getAddress'
  params: BitcoinCashGetAddressParams
}

export interface BitcoinGetAddressRequest {
  method: 'btc_getAddress'
  params: BitcoinGetAddressParams
}

export interface CosmosGetAddressRequest {
  method: 'cosmos_getAddress'
  params: CosmosGetAddressParams
}

export interface DogecoinGetAddressRequest {
  method: 'doge_getAddress'
  params: DogecoinGetAddressParams
}

export interface EthereumGetAddressRequest {
  method: 'eth_getAddress'
  params: EthereumGetAddressParams
}

export interface KavaGetAddressRequest {
  method: 'kava_getAddress'
  params: KavaGetAddressParams
}

export interface LitecoinGetAddressRequest {
  method: 'ltc_getAddress'
  params: LitecoinGetAddressParams
}

export interface OsmosisGetAddressRequest {
  method: 'osmosis_getAddress'
  params: OsmosisGetAddressParams
}

export interface SecretGetAddressRequest {
  method: 'secret_getAddress'
  params: SecretGetAddressParams
}

export interface TerraGetAddressRequest {
  method: 'terra_getAddress'
  params: TerraGetAddressParams
}

export interface ThorchainGetAddressRequest {
  method: 'thorchain_getAddress'
  params: ThorchainGetAddressParams
}

export type MaybeRpcResponse<T> = T | JsonRpcError
export type AvalancheGetAddressResponse = MaybeRpcResponse<AvalancheAddress>
export type BinanceGetAddressResponse = MaybeRpcResponse<BinanceAddress>
export type BitcoinCashGetAddressResponse = MaybeRpcResponse<BitcoinCashAddress>
export type BitcoinGetAddressResponse = MaybeRpcResponse<BitcoinAddress>
export type CosmosGetAddressResponse = MaybeRpcResponse<CosmosAddress>
export type DogecoinGetAddressResponse = MaybeRpcResponse<DogecoinAddress>
export type EthereumGetAddressResponse = MaybeRpcResponse<EthereumAddress>
export type KavaGetAddressResponse = MaybeRpcResponse<KavaAddress>
export type LitecoinGetAddressResponse = MaybeRpcResponse<LitecoinAddress>
export type OsmosisGetAddressResponse = MaybeRpcResponse<OsmosisAddress>
export type SecretGetAddressResponse = MaybeRpcResponse<SecretAddress>
export type TerraGetAddressResponse = MaybeRpcResponse<TerraAddress>
export type ThorchainGetAddressResponse = MaybeRpcResponse<ThorchainAddress>

type GetAddressResponseTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: AvalancheGetAddressResponse
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

export type GetAddressResponseType<T> = T extends keyof GetAddressResponseTypeTable
  ? GetAddressResponseTypeTable[T]
  : never

/** TYPES USED WITH SENDTRANSACTION() METHODS */
export type SendTransactionParams<T> = {
  transaction: T
  chainId?: string
  origin?: string
}

export type AvalancheSendTransactionParams = SendTransactionParams<AvalancheSignTransaction>
export type EthereumSendTransactionParams = SendTransactionParams<EthereumSignTransaction>

type SendTransactionParamsTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: AvalancheSendTransactionParams
  [SupportedChainIds.EthereumMainnet]: EthereumSendTransactionParams
}

export type SendTransactionParamsType<T> = T extends keyof SendTransactionParamsTypeTable
  ? SendTransactionParamsTypeTable[T]
  : never

export interface AvalancheSendTransactionRequest {
  method: 'avax_sendTransaction'
  params: AvalancheSendTransactionParams
}

export interface EthereumSendTransactionRequest {
  method: 'eth_sendTransaction'
  params: EthereumSendTransactionParams
}

export type AvalancheSendTransactionResponse = string
export type EthereumSendTransactionResponse = string

export type SendTransactionResponseTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: AvalancheSendTransactionResponse
  [SupportedChainIds.EthereumMainnet]: EthereumSendTransactionResponse
}

export type SendTransactionResponseType<T> = T extends keyof SendTransactionResponseTypeTable
  ? SendTransactionResponseTypeTable[T]
  : never

/**  TYPES USED WITH SIGNTRANSACTION() METHODS */
export type SignTransactionParams<T> = {
  transaction: T
  chainId?: string
  origin?: string
}

export type BinanceSignTransactionParams = SignTransactionParams<BinanceSignTransaction>
export type BitcoinCashSignTransactionParams = SignTransactionParams<BitcoinCashSignTransaction>
export type BitcoinSignTransactionParams = SignTransactionParams<BitcoinSignTransaction>
export type CosmosSignTransactionParams = SignTransactionParams<CosmosSignTransaction>
export type DogecoinSignTransactionParams = SignTransactionParams<DogecoinSignTransaction>
export type KavaSignTransactionParams = SignTransactionParams<KavaSignTransaction>
export type LitecoinSignTransactionParams = SignTransactionParams<LitecoinSignTransaction>
export type OsmosisSignTransactionParams = SignTransactionParams<OsmosisSignTransaction>
export type SecretSignTransactionParams = SignTransactionParams<SecretSignTransaction>
export type TerraSignTransactionParams = SignTransactionParams<TerraSignTransaction>
export type ThorchainSignTransactionParams = SignTransactionParams<ThorchainSignTransaction>

type SignTransactionParamsTypeTable = {
  [SupportedChainIds.BinanceMainnet]: BinanceSignTransactionParams
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashSignTransactionParams
  [SupportedChainIds.BitcoinMainnet]: BitcoinSignTransactionParams
  [SupportedChainIds.CosmosMainnet]: CosmosSignTransactionParams
  [SupportedChainIds.DogecoinMainnet]: DogecoinSignTransactionParams
  [SupportedChainIds.KavaMainnet]: KavaSignTransactionParams
  [SupportedChainIds.LitecoinMainnet]: LitecoinSignTransactionParams
  [SupportedChainIds.OsmosisMainnet]: OsmosisSignTransactionParams
  [SupportedChainIds.SecretMainnet]: SecretSignTransactionParams
  [SupportedChainIds.TerraMainnet]: TerraSignTransactionParams
  [SupportedChainIds.ThorchainMainnet]: ThorchainSignTransactionParams
}

export type SignTransactionParamsType<T> = T extends keyof SignTransactionParamsTypeTable
  ? SignTransactionParamsTypeTable[T]
  : never

export interface BinanceSignTransactionRequest {
  method: 'binance_signTransaction'
  params: BinanceSignTransactionParams
}

export interface BitcoinCashSignTransactionRequest {
  method: 'bch_signTransaction'
  params: BitcoinCashSignTransactionParams
}

export interface BitcoinSignTransactionRequest {
  method: 'btc_signTransaction'
  params: BitcoinSignTransactionParams
}

export interface CosmosSignTransactionRequest {
  method: 'cosmos_signTransaction'
  params: CosmosSignTransactionParams
}

export interface DogecoinSignTransactionRequest {
  method: 'doge_signTransaction'
  params: DogecoinSignTransactionParams
}

export interface KavaSignTransactionRequest {
  method: 'kava_signTransaction'
  params: KavaSignTransactionParams
}

export interface LitecoinSignTransactionRequest {
  method: 'ltc_signTransaction'
  params: LitecoinSignTransactionParams
}

export interface OsmosisSignTransactionRequest {
  method: 'osmosis_signTransaction'
  params: OsmosisSignTransactionParams
}
export interface SecretSignTransactionRequest {
  method: 'secret_signTransaction'
  params: SecretSignTransactionParams
}

export interface TerraSignTransactionRequest {
  method: 'terra_signTransaction'
  params: TerraSignTransactionParams
}

export interface ThorchainSignTransactionRequest {
  method: 'thorchain_signTransaction'
  params: ThorchainSignTransactionParams
}

export type BinanceSignTransactionResponse = BinanceSignedTransaction
export type BitcoinCashSignTransactionResponse = BitcoinCashSignedTransaction
export type BitcoinSignTransactionResponse = BitcoinSignedTransaction
export type CosmosSignTransactionResponse = CosmosSignedTransaction
export type DogecoinSignTransactionResponse = DogecoinSignedTransaction
export type KavaSignTransactionResponse = KavaSignedTransaction
export type LitecoinSignTransactionResponse = LitecoinSignedTransaction
export type OsmosisSignTransactionResponse = OsmosisSignedTransaction
export type SecretSignTransactionResponse = SecretSignedTransaction
export type TerraSignTransactionResponse = TerraSignedTransaction
export type ThorchainSignTransactionResponse = ThorchainSignedTransaction

export type SignTransactionResponseTypeTable = {
  [SupportedChainIds.BinanceMainnet]: BinanceSignTransactionResponse
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashSignTransactionResponse
  [SupportedChainIds.BitcoinMainnet]: BitcoinSignTransactionResponse
  [SupportedChainIds.CosmosMainnet]: CosmosSignTransactionResponse
  [SupportedChainIds.DogecoinMainnet]: DogecoinSignTransactionResponse
  [SupportedChainIds.KavaMainnet]: KavaSignTransactionResponse
  [SupportedChainIds.LitecoinMainnet]: LitecoinSignTransactionResponse
  [SupportedChainIds.OsmosisMainnet]: OsmosisSignTransactionResponse
  [SupportedChainIds.SecretMainnet]: SecretSignTransactionResponse
  [SupportedChainIds.TerraMainnet]: TerraSignTransactionResponse
  [SupportedChainIds.ThorchainMainnet]: ThorchainSignTransactionResponse
}

export type SignTransactionResponseType<T> = T extends keyof SignTransactionResponseTypeTable
  ? SignTransactionResponseTypeTable[T]
  : never

/**  TYPES USED WITH SIGNMESSAGE() METHODS * */
export type SignMessageParams<T> = {
  message: T
  chainId?: string
  origin?: string
}

export type AvalancheSignMessageParams = SignMessageParams<AvalancheSignMessage>
export type EthereumSignMessageParams = SignMessageParams<EthereumSignMessage>

type SignMessageParamsTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: AvalancheSignMessageParams
  [SupportedChainIds.EthereumMainnet]: EthereumSignMessageParams
}

export type SignMessageParamsType<T> = T extends keyof SignMessageParamsTypeTable
  ? SignMessageParamsTypeTable[T]
  : never

export interface AvalancheSignMessageRequest {
  method: 'avax_signMessage'
  params: AvalancheSignMessageParams
}
export interface EthereumSignMessageRequest {
  method: 'eth_signMessage'
  params: EthereumSignMessageParams
}

export type AvalancheSignMessageResponse = AvalancheSignedMessage
export type EthereumSignMessageResponse = EthereumSignedMessage

type SignMessageResponseTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: AvalancheSignMessageResponse
  [SupportedChainIds.EthereumMainnet]: EthereumSignMessageResponse
}

export type SignMessageResponseType<T> = T extends keyof SignMessageResponseTypeTable
  ? SignMessageResponseTypeTable[T]
  : never

/**  TYPES USED WITH VERIFYMESSAGE() METHODS ** */
export type VerifyMessageParams<T> = {
  message: T
  chainId?: string
}

/**  TYPES USED WITH BROADCASTTRANSACTION() METHODS ** */
export type BroadcastTransactionParams<T> = {
  transaction: T
  baseUrl: string
  origin?: string
}

export type BinanceBroadcastTransactionParams = BroadcastTransactionParams<BinanceSignedTransaction>
export type BitcoinBroadcastTransactionParams = BroadcastTransactionParams<BitcoinSignedTransaction>
export type BitcoinCashBroadcastTransactionParams =
  BroadcastTransactionParams<BitcoinCashSignedTransaction>
export type CosmosBroadcastTransactionParams = BroadcastTransactionParams<CosmosSignedTransaction>
export type DogecoinBroadcastTransactionParams =
  BroadcastTransactionParams<DogecoinSignedTransaction>
export type KavaBroadcastTransactionParams = BroadcastTransactionParams<KavaSignedTransaction>
export type LitecoinBroadcastTransactionParams =
  BroadcastTransactionParams<LitecoinSignedTransaction>
export type OsmosisBroadcastTransactionParams = BroadcastTransactionParams<OsmosisSignedTransaction>
export type SecretBroadcastTransactionParams = BroadcastTransactionParams<SecretSignedTransaction>
export type TerraBroadcastTransactionParams = BroadcastTransactionParams<TerraSignedTransaction>
export type ThorchainBroadcastTransactionParams =
  BroadcastTransactionParams<ThorchainSignedTransaction>

type BroadcastTransactionParamsTypeTable = {
  [SupportedChainIds.BinanceMainnet]: BroadcastTransactionParams<BinanceSignedTransaction>
  [SupportedChainIds.BitcoinCashMainnet]: BroadcastTransactionParams<BitcoinCashSignedTransaction>
  [SupportedChainIds.BitcoinMainnet]: BroadcastTransactionParams<BitcoinSignedTransaction>
  [SupportedChainIds.CosmosMainnet]: BroadcastTransactionParams<CosmosSignedTransaction>
  [SupportedChainIds.DogecoinMainnet]: BroadcastTransactionParams<DogecoinSignedTransaction>
  [SupportedChainIds.KavaMainnet]: BroadcastTransactionParams<KavaSignedTransaction>
  [SupportedChainIds.LitecoinMainnet]: BroadcastTransactionParams<LitecoinSignedTransaction>
  [SupportedChainIds.OsmosisMainnet]: BroadcastTransactionParams<OsmosisSignedTransaction>
  [SupportedChainIds.SecretMainnet]: BroadcastTransactionParams<SecretSignedTransaction>
  [SupportedChainIds.TerraMainnet]: BroadcastTransactionParams<TerraSignedTransaction>
  [SupportedChainIds.ThorchainMainnet]: BroadcastTransactionParams<ThorchainSignedTransaction>
}

export type BroadcastTransactionParamsType<T> = T extends keyof BroadcastTransactionParamsTypeTable
  ? BroadcastTransactionParamsTypeTable[T]
  : never

export interface BinanceBroadcastTransactionRequest {
  method: 'binance_broadcastTransaction'
  params: BinanceBroadcastTransactionParams
}
export interface BitcoinCashBroadcastTransactionRequest {
  method: 'bch_broadcastTransaction'
  params: BitcoinCashBroadcastTransactionParams
}

export interface BitcoinBroadcastTransactionRequest {
  method: 'btc_broadcastTransaction'
  params: BitcoinBroadcastTransactionParams
}

export interface CosmosBroadcastTransactionRequest {
  method: 'cosmos_broadcastTransaction'
  params: CosmosBroadcastTransactionParams
}

export interface DogecoinBroadcastTransactionRequest {
  method: 'doge_broadcastTransaction'
  params: DogecoinBroadcastTransactionParams
}

export interface KavaBroadcastTransactionRequest {
  method: 'kava_broadcastTransaction'
  params: KavaBroadcastTransactionParams
}

export interface LitecoinBroadcastTransactionRequest {
  method: 'ltc_broadcastTransaction'
  params: LitecoinBroadcastTransactionParams
}

export interface OsmosisBroadcastTransactionRequest {
  method: 'osmosis_broadcastTransaction'
  params: OsmosisBroadcastTransactionParams
}

export interface SecretBroadcastTransactionRequest {
  method: 'secret_broadcastTransaction'
  params: SecretBroadcastTransactionParams
}

export interface TerraBroadcastTransactionRequest {
  method: 'terra_broadcastTransaction'
  params: TerraBroadcastTransactionParams
}

export interface ThorchainBroadcastTransactionRequest {
  method: 'thorchain_broadcastTransaction'
  params: ThorchainBroadcastTransactionParams
}

export type AvalancheBroadcastTransactionResponse = string
export type BinanceBroadcastTransactionResponse = string
export type BitcoinBroadcastTransactionResponse = string
export type BitcoinCashBroadcastTransactionResponse = string
export type CosmosBroadcastTransactionResponse = string
export type DogecoinBroadcastTransactionResponse = string
export type EthereumBroadcastTransactionResponse = string
export type KavaBroadcastTransactionResponse = string
export type LitecoinBroadcastTransactionResponse = string
export type OsmosisBroadcastTransactionResponse = string
export type SecretBroadcastTransactionResponse = string
export type TerraBroadcastTransactionResponse = string
export type ThorchainBroadcastTransactionResponse = string

type BroadcastTransactionResponseTypeTable = {
  [SupportedChainIds.BinanceMainnet]: BinanceBroadcastTransactionResponse
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashBroadcastTransactionResponse
  [SupportedChainIds.BitcoinMainnet]: BitcoinBroadcastTransactionResponse
  [SupportedChainIds.CosmosMainnet]: CosmosBroadcastTransactionResponse
  [SupportedChainIds.DogecoinMainnet]: DogecoinBroadcastTransactionResponse
  [SupportedChainIds.KavaMainnet]: KavaBroadcastTransactionResponse
  [SupportedChainIds.LitecoinMainnet]: LitecoinBroadcastTransactionResponse
  [SupportedChainIds.OsmosisMainnet]: OsmosisBroadcastTransactionResponse
  [SupportedChainIds.SecretMainnet]: SecretBroadcastTransactionResponse
  [SupportedChainIds.TerraMainnet]: TerraBroadcastTransactionResponse
  [SupportedChainIds.ThorchainMainnet]: ThorchainBroadcastTransactionResponse
}

export type BroadcastTransactionResponseType<T> =
  T extends keyof BroadcastTransactionResponseTypeTable
    ? BroadcastTransactionResponseTypeTable[T]
    : never

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

export type SignerGetAddressType<T> = T extends keyof SignerGetAddressTypeTable
  ? SignerGetAddressTypeTable[T]
  : never

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

export type SignerGetAddressReturnType<T> = T extends keyof SignerGetAddressReturnTypeTable
  ? SignerGetAddressReturnTypeTable[T]
  : never

type SignerSignMessageTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: EthereumSignMessage
  [SupportedChainIds.EthereumMainnet]: EthereumSignMessage
}

export type SignerSignMessageType<T> = T extends keyof SignerSignMessageTypeTable
  ? SignerSignMessageTypeTable[T]
  : never

type SignerSignMessageReturnTypeTable = {
  [SupportedChainIds.AvalancheMainnet]: EthereumSignedMessage
  [SupportedChainIds.EthereumMainnet]: EthereumSignedMessage
}

export type SignerSignMessageReturnType<T> = T extends keyof SignerSignMessageReturnTypeTable
  ? SignerSignMessageReturnTypeTable[T]
  : never

type SignerSignTransactionTypeTable = {
  [SupportedChainIds.BinanceMainnet]: BinanceSignTransaction
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashSignTransaction
  [SupportedChainIds.BitcoinMainnet]: BitcoinSignTransaction
  [SupportedChainIds.CosmosMainnet]: CosmosSignTransaction
  [SupportedChainIds.DogecoinMainnet]: DogecoinSignTransaction
  [SupportedChainIds.KavaMainnet]: KavaSignTransaction
  [SupportedChainIds.LitecoinMainnet]: LitecoinSignTransaction
  [SupportedChainIds.OsmosisMainnet]: OsmosisSignTransaction
  [SupportedChainIds.SecretMainnet]: SecretSignTransaction
  [SupportedChainIds.TerraMainnet]: TerraSignTransaction
  [SupportedChainIds.ThorchainMainnet]: ThorchainSignTransaction
}

export type SignerSignTransactionType<T> = T extends keyof SignerSignTransactionTypeTable
  ? SignerSignTransactionTypeTable[T]
  : never

type SignerSignTransactionReturnTypeTable = {
  [SupportedChainIds.BinanceMainnet]: BinanceSignedTransaction
  [SupportedChainIds.BitcoinCashMainnet]: BitcoinCashSignedTransaction
  [SupportedChainIds.BitcoinMainnet]: BitcoinSignedTransaction
  [SupportedChainIds.CosmosMainnet]: CosmosSignedTransaction
  [SupportedChainIds.DogecoinMainnet]: DogecoinSignedTransaction
  [SupportedChainIds.KavaMainnet]: KavaSignedTransaction
  [SupportedChainIds.LitecoinMainnet]: LitecoinSignedTransaction
  [SupportedChainIds.OsmosisMainnet]: OsmosisSignedTransaction
  [SupportedChainIds.SecretMainnet]: SecretSignedTransaction
  [SupportedChainIds.TerraMainnet]: TerraSignedTransaction
  [SupportedChainIds.ThorchainMainnet]: ThorchainSignedTransaction
}

export type SignerSignTransactionReturnType<T> =
  T extends keyof SignerSignTransactionReturnTypeTable
    ? SignerSignTransactionReturnTypeTable[T]
    : never

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

export type HTTPConfigurationType<T> = T extends keyof HTTPConfigurationTypeTable
  ? HTTPConfigurationTypeTable[T]
  : never

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

export type HTTPProviderType<T> = T extends keyof HTTPProviderTypeTable
  ? HTTPProviderTypeTable[T]
  : never

export type RPCHandlerError = Error | JsonRpcError | string | null
export type RPCHandlerResponse<T> = T

export type ShapeShiftSnapRPCRequest =
  | AvalancheGetAddressRequest
  | AvalancheSignMessageRequest
  | AvalancheSendTransactionRequest
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
  | EthereumGetAddressRequest
  | EthereumSignMessageRequest
  | EthereumSendTransactionRequest
  | KavaBroadcastTransactionRequest
  | KavaGetAddressRequest
  | KavaSignTransactionRequest
  | LitecoinBroadcastTransactionRequest
  | LitecoinGetAddressRequest
  | LitecoinSignTransactionRequest
  | OsmosisBroadcastTransactionRequest
  | OsmosisGetAddressRequest
  | OsmosisSignTransactionRequest
  | SecretBroadcastTransactionRequest
  | SecretGetAddressRequest
  | SecretSignTransactionRequest
  | TerraBroadcastTransactionRequest
  | TerraGetAddressRequest
  | TerraSignTransactionRequest
  | ThorchainBroadcastTransactionRequest
  | ThorchainGetAddressRequest
  | ThorchainSignTransactionRequest

export type ShapeShiftSnapRPCResponse =
  | AvalancheBroadcastTransactionResponse
  | AvalancheGetAddressResponse
  | AvalancheSignMessageResponse
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
  | KavaBroadcastTransactionResponse
  | KavaGetAddressResponse
  | KavaSignTransactionResponse
  | LitecoinBroadcastTransactionResponse
  | LitecoinGetAddressResponse
  | LitecoinSignTransactionResponse
  | OsmosisBroadcastTransactionResponse
  | OsmosisGetAddressResponse
  | OsmosisSignTransactionResponse
  | SecretBroadcastTransactionResponse
  | SecretGetAddressResponse
  | SecretSignTransactionResponse
  | TerraBroadcastTransactionResponse
  | TerraGetAddressResponse
  | TerraSignTransactionResponse
  | ThorchainBroadcastTransactionResponse
  | ThorchainGetAddressResponse
  | ThorchainSignTransactionResponse
