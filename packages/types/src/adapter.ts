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
  BitcoinCashSignTransaction,
  BitcoinSignedTransaction,
  BitcoinSignTransaction,
  CosmosSignedTransaction,
  CosmosSignTransaction,
  DogecoinSignedTransaction,
  DogecoinSignTransaction,
  EthereumSignedTransaction,
  EthereumSignMessage,
  EthereumSignTransaction,
  EthereumVerifyMessage,
  KavaSignedTransaction,
  KavaSignTransaction,
  LitecoinSignedTransaction,
  LitecoinSignTransaction,
  OsmosisSignedTransaction,
  OsmosisSignTransaction,
  SecretSignedTransaction,
  SecretSignTransaction,
  TerraSignedTransaction,
  TerraSignTransaction,
  ThorchainSignedTransaction,
  ThorchainSignTransaction,
} from './common'
import {
  BroadcastTransactionParams,
  GetAddressParams,
  SignMessageParams,
  SignTransactionParams,
  VerifyMessageParams,
} from './params'

export type BroadcastTransactionAdapterParams<T> = BroadcastTransactionParams<T> & {
  snapId: string
}
export type GetAddressAdapterParams<T> = GetAddressParams<T> & { snapId: string }
export type SignMessageAdapterParams<T> = SignMessageParams<T> & { snapId: string }
export type SignTransactionAdapterParams<T> = SignTransactionParams<T> & { snapId: string }
export type VerifyMessageAdapterParams<T> = VerifyMessageParams<T> & { snapId: string }

export type BinanceBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<BinanceSignedTransaction>
export type BinanceGetAddressAdapterParams = GetAddressAdapterParams<BinanceGetAddress>
export type BinanceSignTransactionAdapterParams =
  SignTransactionAdapterParams<BinanceSignTransaction>
export type BitcoinBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<BitcoinSignedTransaction>
export type BitcoinCashBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<BitcoinCashSignedTransaction>
export type BitcoinCashGetAddressAdapterParams = GetAddressAdapterParams<BitcoinCashGetAddress>
export type BitcoinCashSignTransactionAdapterParams =
  SignTransactionAdapterParams<BitcoinCashSignTransaction>
export type BitcoinGetAddressAdapterParams = GetAddressAdapterParams<BTCGetAddress>
export type BitcoinSignTransactionAdapterParams =
  SignTransactionAdapterParams<BitcoinSignTransaction>
export type CosmosBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<CosmosSignedTransaction>
export type CosmosGetAddressAdapterParams = GetAddressAdapterParams<CosmosGetAddress>
export type CosmosSignTransactionAdapterParams = SignTransactionAdapterParams<CosmosSignTransaction>
export type DecretBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<SecretSignedTransaction>
export type DecretGetAddressAdapterParams = GetAddressAdapterParams<SecretGetAddress>
export type DecretSignTransactionAdapterParams = SignTransactionAdapterParams<SecretSignTransaction>
export type DogecoinBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<DogecoinSignedTransaction>
export type DogecoinGetAddressAdapterParams = GetAddressAdapterParams<DogecoinGetAddress>
export type DogecoinSignTransactionAdapterParams =
  SignTransactionAdapterParams<DogecoinSignTransaction>
export type EthereumBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<EthereumSignedTransaction>
export type EthereumGetAddressAdapterParams = GetAddressAdapterParams<ETHGetAddress>
export type EthereumSignMessageAdapterParams = SignMessageAdapterParams<EthereumSignMessage>
export type EthereumSignTransactionAdapterParams =
  SignTransactionAdapterParams<EthereumSignTransaction>
export type EthereumVerifyMessageAdapterParams = VerifyMessageAdapterParams<EthereumVerifyMessage>
export type KavaBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<KavaSignedTransaction>
export type KavaGetAddressAdapterParams = GetAddressAdapterParams<KavaGetAddress>
export type KavaSignTransactionAdapterParams = SignTransactionAdapterParams<KavaSignTransaction>
export type LitecoinBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<LitecoinSignedTransaction>
export type LitecoinGetAddressAdapterParams = GetAddressAdapterParams<LitecoinGetAddress>
export type LitecoinSignTransactionAdapterParams =
  SignTransactionAdapterParams<LitecoinSignTransaction>
export type OsmosisBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<OsmosisSignedTransaction>
export type OsmosisGetAddressAdapterParams = GetAddressAdapterParams<OsmosisGetAddress>
export type OsmosisSignTransactionAdapterParams =
  SignTransactionAdapterParams<OsmosisSignTransaction>
export type SecretBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<SecretSignedTransaction>
export type SecretGetAddressAdapterParams = GetAddressAdapterParams<SecretGetAddress>
export type SecretSignTransactionAdapterParams = SignTransactionAdapterParams<SecretSignTransaction>
export type TerraBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<TerraSignedTransaction>
export type TerraGetAddressAdapterParams = GetAddressAdapterParams<TerraGetAddress>
export type TerraSignTransactionAdapterParams = SignTransactionAdapterParams<TerraSignTransaction>
export type ThorchainBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<ThorchainSignedTransaction>
export type ThorchainGetAddressAdapterParams = GetAddressAdapterParams<ThorchainGetAddress>
export type ThorchainSignTransactionAdapterParams =
  SignTransactionAdapterParams<ThorchainSignTransaction>
