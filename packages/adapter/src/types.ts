export {
  BinanceSignedTx as BinanceSignedTransaction,
  BinanceSignTx as BinanceSignTransaction,
  BTCSignedMessage as BitcoinCashSignedMessage,
  BTCSignedTx as BitcoinCashSignedTransaction,
  BTCSignMessage as BitcoinCashSignMessage,
  BTCSignTx as BitcoinCashSignTransaction,
  BTCVerifyMessage as BitcoinCashVerifyMessage,
  BTCSignedMessage as BitcoinSignedMessage,
  BTCSignedTx as BitcoinSignedTransaction,
  BTCSignMessage as BitcoinSignMessage,
  BTCSignTx as BitcoinSignTransaction,
  BTCVerifyMessage as BitcoinVerifyMessage,
  CosmosSignedTx as CosmosSignedTransaction,
  CosmosSignTx as CosmosSignTransaction,
  BTCSignedMessage as DogecoinSignedMessage,
  BTCSignedTx as DogecoinSignedTransaction,
  BTCSignMessage as DogecoinSignMessage,
  BTCSignTx as DogecoinSignTransaction,
  BTCVerifyMessage as DogecoinVerifyMessage,
  ETHSignedMessage as EthereumSignedMessage,
  ETHSignedTx as EthereumSignedTransaction,
  ETHSignMessage as EthereumSignMessage,
  ETHSignTx as EthereumSignTransaction,
  ETHVerifyMessage as EthereumVerifyMessage,
  BTCSignedMessage as LitecoinSignedMessage,
  BTCSignedTx as LitecoinSignedTransaction,
  BTCSignMessage as LitecoinSignMessage,
  BTCSignTx as LitecoinSignTransaction,
  BTCVerifyMessage as LitecoinVerifyMessage,
  OsmosisSignedTx as OsmosisSignedTransaction,
  OsmosisSignTx as OsmosisSignTransaction,
  CosmosSignedTx as THORChainSignedTransaction,
  CosmosSignTx as THORChainSignTransaction,
} from '@shapeshiftoss/hdwallet-core'

export interface WalletEnableParam {
  [snapId: string]: {
    version?: string
  }
  permissionName?: Record<string, never>
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
