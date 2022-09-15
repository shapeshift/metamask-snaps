import {
  BCHBroadcastTransaction,
  BCHGetAddress,
  BCHSignTransaction,
  binanceGetAddress,
  binanceSignTransaction,
  BTCBroadcastTransaction,
  BTCGetAddress,
  BTCSignTransaction,
  cosmosBroadcastTransaction,
  cosmosGetAddress,
  cosmosSignTransaction,
  dogecoinBroadcastTransaction,
  dogecoinGetAddress,
  dogecoinSignTransaction,
  ETHBroadcastTransaction,
  ETHGetAddress,
  ETHSignMessage,
  ETHSignTransaction,
  ETHVerifyMessage,
  kavaGetAddress,
  kavaSignTransaction,
  LTCBroadcastTransaction,
  LTCGetAddress,
  LTCSignTransaction,
  osmosisBroadcastTransaction,
  osmosisGetAddress,
  osmosisSignTransaction,
  secretGetAddress,
  secretSignTransaction,
  terraGetAddress,
  terraSignTransaction,
  thorchainBroadcastTransaction,
  thorchainGetAddress,
  thorchainSignTransaction,
} from '@shapeshiftoss/metamask-snaps-adapter'
import { DEFAULT_SNAP_ID } from '@shapeshiftoss/metamask-snaps-types'

import {
  BinanceTransactions,
  BitcoinCashTransactions,
  BitcoinTransactions,
  CosmosTransactions,
  DogecoinTransactions,
  EthereumTransactions,
  KavaTransactions,
  LitecoinTransactions,
  OsmosisTransactions,
  SecretTransactions,
  TerraTransactions,
  ThorchainTransactions,
} from '../../constants/transactions'
import { CardProps } from '../Card/Card'

/**TODO: Add reference transactions for BCH, DOGE, LTC */

export const AssetCardListConfig: Array<CardProps> = [
  {
    name: 'Binance Chain',
    icon: 'bnb.png',
    symbol: 'BNB',
    actions: {
      bnb_getAddress: {
        callback: binanceGetAddress,
        params: { addressParams: BinanceTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      bnb_signTransaction: {
        callback: binanceSignTransaction,
        params: { transaction: BinanceTransactions.transfer, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a Binance Chain transfer message',
      },
    },
  },
  {
    name: 'Bitcoin',
    icon: 'btc.png',
    symbol: 'BTC',
    actions: {
      btc_getAddress: {
        callback: BTCGetAddress,
        params: { addressParams: BitcoinTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      btc_signTransaction: {
        callback: BTCSignTransaction,
        params: { transaction: BitcoinTransactions.tx, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a test transaction',
      },

      btc_broadcastTransaction: {
        callback: BTCBroadcastTransaction,
        params: {
          transaction: BitcoinTransactions.broadcast,
          baseUrl: process.env.REACT_APP_BITCOIN_HTTP_URL,
          snapId: DEFAULT_SNAP_ID,
        },
        description: 'Broadcast a test transaction',
      },
    },
  },

  {
    name: 'Bitcoin Cash',
    icon: 'bch.png',
    symbol: 'BCH',
    actions: {
      bch_getAddress: {
        callback: BCHGetAddress,
        params: { addressParams: BitcoinCashTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      bch_signTransaction: {
        callback: BCHSignTransaction,
        params: { transaction: BitcoinCashTransactions.tx, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a test transaction',
      },

      bch_broadcastTransaction: {
        callback: BCHBroadcastTransaction,
        params: {
          transaction: BitcoinCashTransactions.broadcast,
          baseUrl: process.env.REACT_APP_UNCHAINED_BITCOINCASH_HTTP_URL,
          snapId: DEFAULT_SNAP_ID,
        },
        description: 'Broadcast a test transaction',
      },
    },
  },

  {
    name: 'Cosmos',
    icon: 'atom.png',
    symbol: 'ATOM',
    actions: {
      cosmos_getAddress: {
        callback: cosmosGetAddress,
        params: { addressParams: CosmosTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      cosmos_signTransaction: {
        callback: cosmosSignTransaction,
        params: { transaction: CosmosTransactions.delegate, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a Cosmos delegate message',
      },

      cosmos_broadcastTransaction: {
        callback: cosmosBroadcastTransaction,
        params: {
          transaction: CosmosTransactions.broadcast,
          baseUrl: process.env.REACT_APP_UNCHAINED_COSMOS_HTTP_URL,
          snapId: DEFAULT_SNAP_ID,
        },
        description: 'Broadcast a test transaction',
      },
    },
  },
  {
    name: 'Dogecoin',
    icon: 'doge.png',
    symbol: 'DOGE',
    actions: {
      doge_getAddress: {
        callback: dogecoinGetAddress,
        params: { addressParams: DogecoinTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      doge_signTransaction: {
        callback: dogecoinSignTransaction,
        params: { transaction: DogecoinTransactions.tx, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a test transaction',
      },

      doge_broadcastTransaction: {
        callback: dogecoinBroadcastTransaction,
        params: {
          transaction: DogecoinTransactions.broadcast,
          baseUrl: process.env.REACT_APP_UNCHAINED_DOGECOIN_HTTP_URL,
          snapId: DEFAULT_SNAP_ID,
        },
        description: 'Broadcast a test transaction',
      },
    },
  },
  {
    name: 'Ethereum',
    icon: 'eth.png',
    symbol: 'ETH',
    actions: {
      eth_getAddress: {
        callback: ETHGetAddress,
        params: { addressParams: EthereumTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      eth_signMessage: {
        callback: ETHSignMessage,
        params: { message: EthereumTransactions.sign, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a test message',
      },

      eth_signTransaction: {
        callback: ETHSignTransaction,
        params: { transaction: EthereumTransactions.tx, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a test transaction',
      },

      eth_verifyMessage: {
        callback: ETHVerifyMessage,
        params: { message: EthereumTransactions.verify, snapId: DEFAULT_SNAP_ID },
        description: 'Verify the signature from a previously-signed test message',
      },

      eth_broadcastTransaction: {
        callback: ETHBroadcastTransaction,
        params: {
          transaction: EthereumTransactions.broadcast,
          baseUrl: process.env.REACT_APP_UNCHAINED_ETHEREUM_HTTP_URL,
          snapId: DEFAULT_SNAP_ID,
        },
        description: 'Broadcast a test transaction',
      },
    },
  },
  {
    name: 'Kava',
    icon: 'kava.png',
    symbol: 'KAVA',
    actions: {
      kava_getAddress: {
        callback: kavaGetAddress,
        params: { addressParams: KavaTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      kava_signTransaction: {
        callback: kavaSignTransaction,
        params: { transaction: KavaTransactions.send, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a Terra kava message',
      },
    },
  },
  {
    name: 'Litecoin',
    icon: 'ltc.png',
    symbol: 'LTC',
    actions: {
      ltc_getAddress: {
        callback: LTCGetAddress,
        params: { addressParams: LitecoinTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      ltc_signTransaction: {
        callback: LTCSignTransaction,
        params: { transaction: LitecoinTransactions.tx, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a test transaction',
      },

      ltc_broadcastTransaction: {
        callback: LTCBroadcastTransaction,
        params: {
          transaction: LitecoinTransactions.broadcast,
          baseUrl: process.env.REACT_APP_UNCHAINED_LITECOIN_HTTP_URL,
          snapId: DEFAULT_SNAP_ID,
        },
        description: 'Broadcast a test transaction',
      },
    },
  },
  {
    name: 'Osmosis',
    icon: 'osmo.png',
    symbol: 'OSMO',
    actions: {
      osmosis_getAddress: {
        callback: osmosisGetAddress,
        params: { addressParams: OsmosisTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      osmosis_signTransaction: {
        callback: osmosisSignTransaction,
        params: { transaction: OsmosisTransactions.delegate, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a Osmosis delegate message',
      },

      osmosis_broadcastTransaction: {
        callback: osmosisBroadcastTransaction,
        params: {
          transaction: OsmosisTransactions.broadcast,
          baseUrl: process.env.REACT_APP_UNCHAINED_OSMOSIS_HTTP_URL,
          snapId: DEFAULT_SNAP_ID,
        },
        description: 'Broadcast a test transaction',
      },
    },
  },
  {
    name: 'Terra',
    icon: 'luna.png',
    symbol: 'LUNA',
    actions: {
      terra_getAddress: {
        callback: terraGetAddress,
        params: { addressParams: TerraTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      terra_signTransaction: {
        callback: terraSignTransaction,
        params: { transaction: TerraTransactions.send, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a Terra send message',
      },
    },
  },
  {
    name: 'Secret',
    icon: 'scrt.png',
    symbol: 'SCRT',
    actions: {
      secret_getAddress: {
        callback: secretGetAddress,
        params: { addressParams: SecretTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      secret_signTransaction: {
        callback: secretSignTransaction,
        params: { transaction: SecretTransactions.send, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a Secret send message',
      },
    },
  },
  {
    name: 'THORChain',
    icon: 'rune.png',
    symbol: 'RUNE',
    actions: {
      thorchain_getAddress: {
        callback: thorchainGetAddress,
        params: { addressParams: ThorchainTransactions.address, snapId: DEFAULT_SNAP_ID },
        description: 'Generate a receive address',
      },

      thorchain_signTransaction: {
        callback: thorchainSignTransaction,
        params: { transaction: ThorchainTransactions.send, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a THORChain transfer message',
      },

      thorchain_broadcastTransaction: {
        callback: thorchainBroadcastTransaction,
        params: {
          transaction: ThorchainTransactions.broadcast,
          baseUrl: process.env.REACT_APP_UNCHAINED_THORCHAIN_HTTP_URL,
          snapId: DEFAULT_SNAP_ID,
        },
        description: 'Broadcast a test transaction',
      },
    },
  },
]
