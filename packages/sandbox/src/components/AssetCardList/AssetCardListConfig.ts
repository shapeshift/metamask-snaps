import {
  BCHGetAddress,
  BCHSignMessage,
  BCHSignTransaction,
  BCHVerifyMessage,
  binanceGetAddress,
  binanceSignTransaction,
  BTCGetAddress,
  BTCSignMessage,
  BTCSignTransaction,
  BTCVerifyMessage,
  cosmosGetAddress,
  cosmosSignTransaction,
  dogecoinGetAddress,
  dogecoinSignMessage,
  dogecoinSignTransaction,
  dogecoinVerifyMessage,
  ETHGetAddress,
  ETHSignMessage,
  ETHSignTransaction,
  ETHVerifyMessage,
  kavaGetAddress,
  kavaSignTransaction,
  LTCGetAddress,
  LTCSignMessage,
  LTCSignTransaction,
  LTCVerifyMessage,
  osmosisGetAddress,
  osmosisSignTransaction,
  secretGetAddress,
  secretSignTransaction,
  terraGetAddress,
  terraSignTransaction,
  thorchainGetAddress,
  thorchainSignTransaction,
} from '@shapeshiftoss/metamask-snaps-adapter'

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
import { CardActionProps, CardProps } from '../Card/Card'

/**TODO: Add reference transactions for BCH, DOGE, LTC */

export const AssetCardListConfig: Array<CardProps> = [
  {
    name: 'Binance Chain',
    icon: 'bnb.png',
    symbol: 'BNB',
    actions: new Map<string, CardActionProps>([
      [
        'bnb_getAddress',
        {
          callback: binanceGetAddress,
          params: BinanceTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'bnb_signTransaction',
        {
          callback: binanceSignTransaction,
          params: BinanceTransactions.transfer,
          description: 'Sign a Binance Chain transfer message',
        },
      ],
    ]),
  },
  {
    name: 'Bitcoin',
    icon: 'btc.png',
    symbol: 'BTC',
    actions: new Map<string, CardActionProps>([
      [
        'btc_getAddress',
        {
          callback: BTCGetAddress,
          params: BitcoinTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'btc_signTransaction',
        {
          callback: BTCSignTransaction,
          params: BitcoinTransactions.tx,
          description: 'Sign a test transaction',
        },
      ],
    ]),
  },
  {
    name: 'Bitcoin Cash',
    icon: 'bch.png',
    symbol: 'BCH',
    actions: new Map<string, CardActionProps>([
      [
        'bch_getAddress',
        {
          callback: BCHGetAddress,
          params: BitcoinCashTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'bch_signTransaction',
        {
          callback: BCHSignTransaction,
          params: BitcoinTransactions.tx,
          description: 'Sign a test transaction',
        },
      ],
    ]),
  },
  {
    name: 'Cosmos',
    icon: 'atom.png',
    symbol: 'ATOM',
    actions: new Map<string, CardActionProps>([
      [
        'cosmos_getAddress',
        {
          callback: cosmosGetAddress,
          params: CosmosTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'cosmos_signTransaction',
        {
          callback: cosmosSignTransaction,
          params: CosmosTransactions.delegate,
          description: 'Sign a Cosmos delegate message',
        },
      ],
    ]),
  },
  {
    name: 'Dogecoin',
    icon: 'doge.png',
    symbol: 'DOGE',
    actions: new Map<string, CardActionProps>([
      [
        'doge_getAddress',
        {
          callback: dogecoinGetAddress,
          params: DogecoinTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'doge_signTransaction',
        {
          callback: dogecoinSignTransaction,
          params: BitcoinTransactions.tx,
          description: 'Sign a test transaction',
        },
      ],
    ]),
  },
  {
    name: 'Ethereum',
    icon: 'eth.png',
    symbol: 'ETH',
    actions: new Map<string, CardActionProps>([
      [
        'eth_getAddress',
        {
          callback: ETHGetAddress,
          params: EthereumTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'eth_signMessage',
        {
          callback: ETHSignMessage,
          params: EthereumTransactions.sign,
          description: 'Sign a test message',
        },
      ],
      [
        'eth_signTransaction',
        {
          callback: ETHSignTransaction,
          params: EthereumTransactions.tx,
          description: 'Sign a test transaction',
        },
      ],
      [
        'eth_verifyMessage',
        {
          callback: ETHVerifyMessage,
          params: EthereumTransactions.verify,
          description: 'Verify the signature from a previously-signed test message',
        },
      ],
    ]),
  },
  {
    name: 'Kava',
    icon: 'kava.png',
    symbol: 'KAVA',
    actions: new Map<string, CardActionProps>([
      [
        'kava_getAddress',
        {
          callback: kavaGetAddress,
          params: KavaTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'kava_signTransaction',
        {
          callback: kavaSignTransaction,
          params: KavaTransactions.kava,
          description: 'Sign a Terra kava message',
        },
      ],
    ]),
  },
  {
    name: 'Litecoin',
    icon: 'ltc.png',
    symbol: 'LTC',
    actions: new Map<string, CardActionProps>([
      [
        'ltc_getAddress',
        {
          callback: LTCGetAddress,
          params: LitecoinTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'ltc_signMessage',
        {
          callback: LTCSignMessage,
          params: BitcoinTransactions.sign,
          description: 'Sign a test message',
        },
      ],
      [
        'ltc_signTransaction',
        {
          callback: LTCSignTransaction,
          params: BitcoinTransactions.tx,
          description: 'Sign a test transaction',
        },
      ],
      [
        'ltc_verifyTransaction',
        {
          callback: LTCVerifyMessage,
          params: BitcoinTransactions.verify,
          description: 'Verify the signature from a previously-signed test message',
        },
      ],
    ]),
  },
  {
    name: 'Osmosis',
    icon: 'osmo.png',
    symbol: 'OSMO',
    actions: new Map<string, CardActionProps>([
      [
        'osmosis_getAddress',
        {
          callback: osmosisGetAddress,
          params: OsmosisTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'osmosis_signTransaction',
        {
          callback: osmosisSignTransaction,
          params: OsmosisTransactions.delegate,
          description: 'Sign a Osmosis delegate message',
        },
      ],
    ]),
  },
  {
    name: 'Terra',
    icon: 'luna.png',
    symbol: 'LUNA',
    actions: new Map<string, CardActionProps>([
      [
        'terra_getAddress',
        {
          callback: terraGetAddress,
          params: TerraTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'terra_signTransaction',
        {
          callback: terraSignTransaction,
          params: TerraTransactions.send,
          description: 'Sign a Terra send message',
        },
      ],
    ]),
  },

  {
    name: 'Secret',
    icon: 'scrt.png',
    symbol: 'SCRT',
    actions: new Map<string, CardActionProps>([
      [
        'secret_getAddress',
        {
          callback: secretGetAddress,
          params: SecretTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'secret_signTransaction',
        {
          callback: secretSignTransaction,
          params: SecretTransactions.send,
          description: 'Sign a Terra send message',
        },
      ],
    ]),
  },
  {
    name: 'THORChain',
    icon: 'rune.png',
    symbol: 'RUNE',
    actions: new Map<string, CardActionProps>([
      [
        'thorchain_getAddress',
        {
          callback: thorchainGetAddress,
          params: ThorchainTransactions.address,
          description: 'Generate a receive address',
        },
      ],
      [
        'thorchain_signTransaction',
        {
          callback: thorchainSignTransaction,
          params: ThorchainTransactions.send,
          description: 'Sign a THORChain transfer message',
        },
      ],
    ]),
  },
]
