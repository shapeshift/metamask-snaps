import {
  AvalancheGetAddress,
  AvalancheSignedTransaction,
  AvalancheSignMessage,
  AvalancheSignTransaction,
  AvalancheVerifyMessage,
  BinanceGetAddress,
  BinanceSignedTransaction,
  BinanceSignTransaction,
  BitcoinCashGetAddress,
  BitcoinCashSignedTransaction,
  BitcoinCashSignTransaction,
  BitcoinGetAddress,
  BitcoinSignedTransaction,
  BitcoinSignTransaction,
  CosmosGetAddress,
  CosmosSignedTransaction,
  CosmosSignTransaction,
  DogecoinGetAddress,
  DogecoinSignedTransaction,
  DogecoinSignTransaction,
  EthereumGetAddress,
  EthereumSignedTransaction,
  EthereumSignMessage,
  EthereumSignTransaction,
  EthereumVerifyMessage,
  KavaGetAddress,
  KavaSignedTransaction,
  KavaSignTransaction,
  LitecoinGetAddress,
  LitecoinSignedTransaction,
  LitecoinSignTransaction,
  OsmosisGetAddress,
  OsmosisSignedTransaction,
  OsmosisSignTransaction,
  SecretGetAddress,
  SecretSignedTransaction,
  SecretSignTransaction,
  TerraGetAddress,
  TerraSignedTransaction,
  TerraSignTransaction,
  ThorchainGetAddress,
  ThorchainSignedTransaction,
  ThorchainSignTransaction,
} from './common'
import {
  BroadcastTransactionParams,
  GetAddressParams,
  SignMessageParams,
  SignTransactionParams,
  VerifyMessageParams,
} from './snap'

export type BroadcastTransactionAdapterParams<T> = BroadcastTransactionParams<T> & {
  snapId: string
}
export type GetAddressAdapterParams<T> = GetAddressParams<T> & { snapId: string }
export type SignMessageAdapterParams<T> = SignMessageParams<T> & { snapId: string }
export type SignTransactionAdapterParams<T> = SignTransactionParams<T> & { snapId: string }
export type VerifyMessageAdapterParams<T> = VerifyMessageParams<T> & { snapId: string }

export type AvalancheBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<AvalancheSignedTransaction>
export type AvalancheGetAddressAdapterParams = GetAddressAdapterParams<AvalancheGetAddress>
export type AvalancheSignMessageAdapterParams = SignMessageAdapterParams<AvalancheSignMessage>
export type AvalancheSignTransactionAdapterParams =
  SignTransactionAdapterParams<AvalancheSignTransaction>
export type AvalancheVerifyMessageAdapterParams = VerifyMessageAdapterParams<AvalancheVerifyMessage>
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
export type BitcoinGetAddressAdapterParams = GetAddressAdapterParams<BitcoinGetAddress>
export type BitcoinSignTransactionAdapterParams =
  SignTransactionAdapterParams<BitcoinSignTransaction>
export type CosmosBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<CosmosSignedTransaction>
export type CosmosGetAddressAdapterParams = GetAddressAdapterParams<CosmosGetAddress>
export type CosmosSignTransactionAdapterParams = SignTransactionAdapterParams<CosmosSignTransaction>
export type DecretBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<SecretSignedTransaction>
export type DogecoinBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<DogecoinSignedTransaction>
export type DogecoinGetAddressAdapterParams = GetAddressAdapterParams<DogecoinGetAddress>
export type DogecoinSignTransactionAdapterParams =
  SignTransactionAdapterParams<DogecoinSignTransaction>
export type EthereumBroadcastTransactionAdapterParams =
  BroadcastTransactionAdapterParams<EthereumSignedTransaction>
export type EthereumGetAddressAdapterParams = GetAddressAdapterParams<EthereumGetAddress>
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
