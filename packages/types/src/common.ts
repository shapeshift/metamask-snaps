export {
  ETHGetAddress as AvalancheGetAddress,
  ETHSignedMessage as AvalancheSignedMessage,
  ETHSignedTx as AvalancheSignedTransaction,
  ETHSignMessage as AvalancheSignMessage,
  ETHSignTx as AvalancheSignTransaction,
  ETHVerifyMessage as AvalancheVerifyMessage,
  BinanceGetAddress,
  BinanceSignedTx as BinanceSignedTransaction,
  BinanceSignTx as BinanceSignTransaction,
  BTCGetAddress as BitcoinCashGetAddress,
  BTCSignedTx as BitcoinCashSignedTransaction,
  BTCSignTx as BitcoinCashSignTransaction,
  BTCGetAddress as BitcoinGetAddress,
  BTCSignedTx as BitcoinSignedTransaction,
  BTCSignTx as BitcoinSignTransaction,
  CosmosGetAddress,
  CosmosSignedTx as CosmosSignedTransaction,
  CosmosSignTx as CosmosSignTransaction,
  BTCGetAddress as DogecoinGetAddress,
  BTCSignedTx as DogecoinSignedTransaction,
  BTCSignTx as DogecoinSignTransaction,
  ETHGetAddress as EthereumGetAddress,
  ETHSignedMessage as EthereumSignedMessage,
  ETHSignedTx as EthereumSignedTransaction,
  ETHSignMessage as EthereumSignMessage,
  ETHSignTx as EthereumSignTransaction,
  ETHVerifyMessage as EthereumVerifyMessage,
  KavaGetAddress,
  KavaSignedTx as KavaSignedTransaction,
  KavaSignTx as KavaSignTransaction,
  BTCGetAddress as LitecoinGetAddress,
  BTCSignedTx as LitecoinSignedTransaction,
  BTCSignTx as LitecoinSignTransaction,
  OsmosisGetAddress,
  OsmosisSignedTx as OsmosisSignedTransaction,
  OsmosisSignTx as OsmosisSignTransaction,
  SecretGetAddress,
  SecretSignedTx as SecretSignedTransaction,
  SecretSignTx as SecretSignTransaction,
  TerraGetAddress,
  TerraSignedTx as TerraSignedTransaction,
  TerraSignTx as TerraSignTransaction,
  ThorchainGetAddress,
  ThorchainSignedTx as ThorchainSignedTransaction,
  ThorchainSignTx as ThorchainSignTransaction,
} from '@shapeshiftoss/hdwallet-core'

export type AvalancheAddress = string | null
export type BinanceAddress = string | null
export type BitcoinAddress = string | null
export type BitcoinCashAddress = string | null
export type CosmosAddress = string | null
export type DogecoinAddress = string | null
export type EthereumAddress = string | null
export type KavaAddress = string | null
export type LitecoinAddress = string | null
export type OsmosisAddress = string | null
export type SecretAddress = string | null
export type TerraAddress = string | null
export type ThorchainAddress = string | null

export interface WalletEnableParam {
  params: {
    [snapId: string]: {
      version?: string
    }
  }
  permissionName?: Record<string, never>
}

export interface userConfirmParam {
  prompt: string
  description: string
  textAreaContent: string
}

export interface WalletEnableResult {
  // The user's Ethereum accounts, if the eth_accounts permission has been
  // granted.
  accounts: string[]
  // The permissions granted to the requester.
  permissions: any[]
  // The user's installed snaps that the requester is permitted to access.
  snaps: any
  errors?: Error[] // Any errors encountered during processing.
}

export interface EnableShapeShiftSnapResult {
  success: boolean
  message: WalletEnableResult
}

export interface RequestSnapsParams {
  [snapId: string]: {
    version?: string
  }
}

export interface WalletGetSnapsResult {
  [snapId: string]: {
    /**
     * The ID of the Snap.
     */
    id: string

    /**
     * The initial permissions of the Snap, which will be requested when it is
     * installed.
     */
    initialPermissions: any[]

    /**
     * The name of the permission used to invoke the Snap.
     */
    permissionName: string

    /**
     * The version of the Snap.
     */
    version: string
  }
}

export interface RequestSnapsResult {
  [snapId: string]: WalletGetSnapsResult[string]
}
