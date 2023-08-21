import {
  AVAXGetAddress,
  AVAXSendTransaction,
  AVAXSignMessage,
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
  ETHGetAddress,
  ETHSendTransaction,
  ETHSignMessage,
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
  AvalancheTransactions,
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
    name: 'Avalanche',
    icon: 'avax.png',
    symbol: 'AVAX',
    enabled: true,
    actions: {
      avax_getAddress: {
        callback: AVAXGetAddress,
        params: {
          addressParams: AvalancheTransactions.address,
          chainId: '0xa86a',
          snapId: DEFAULT_SNAP_ID,
        },
        description: 'Generate a receive address',
      },

      avax_signMessage: {
        callback: AVAXSignMessage,
        params: { message: AvalancheTransactions.sign, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a test message',
      },

      avax_sendTransaction: {
        callback: AVAXSendTransaction,
        params: { transaction: AvalancheTransactions.tx, snapId: DEFAULT_SNAP_ID },
        description: 'Sign/broadcast a test transaction',
      },
    },
  },
  {
    name: 'Binance Chain',
    icon: 'bnb.png',
    symbol: 'BNB',
    enabled: true,
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
    enabled: true,
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
    enabled: true,
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
    enabled: true,
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
    enabled: true,
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
    enabled: true,
    actions: {
      eth_getAddress: {
        callback: ETHGetAddress,
        params: {
          addressParams: EthereumTransactions.address,
          chainId: '0x1',
          snapId: DEFAULT_SNAP_ID,
        },
        description: 'Generate a receive address',
      },

      eth_signMessage: {
        callback: ETHSignMessage,
        params: { message: EthereumTransactions.sign, snapId: DEFAULT_SNAP_ID },
        description: 'Sign a test message',
      },

      eth_sendTransaction: {
        callback: ETHSendTransaction,
        params: { transaction: EthereumTransactions.tx, snapId: DEFAULT_SNAP_ID },
        description: 'Sign/broadcast a test transaction',
      },
    },
  },
  {
    name: 'Kava',
    icon: 'kava.png',
    symbol: 'KAVA',
    enabled: true,
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
    enabled: true,
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
    enabled: true,
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
    name: 'Secret',
    icon: 'scrt.png',
    symbol: 'SCRT',
    enabled: true,
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
    name: 'Terra',
    icon: 'luna.png',
    symbol: 'LUNA',
    enabled: true,
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
    name: 'THORChain',
    icon: 'rune.png',
    symbol: 'RUNE',
    enabled: true,
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
