import {
  BinanceTransactions,
  BitcoinTransactions,
  CosmosTransactions,
  EthereumTransactions,
  OsmosisTransactions,
  ThorchainTransactions
} from '../../constants/transactions'

import {
  BCHGetAddress,
  BCHSignMessage,
  BCHSignTransaction,
  BCHVerifyMessage, binanceGetAddress, binanceSignTransaction, BTCGetAddress,
  BTCSignMessage,
  BTCSignTransaction,
  BTCVerifyMessage, cosmosGetAddress, cosmosSignTransaction,
  DogeGetAddress,
  DogeSignMessage,
  DogeSignTransaction,
  DogeVerifyMessage,
  ETHGetAddress,
  ETHSignMessage,
  ETHSignTransaction,
  ETHVerifyMessage,
  LTCGetAddress,
  LTCSignMessage,
  LTCSignTransaction,
  LTCVerifyMessage,
  osmosisGetAddress, osmosisSignTransaction,
  thorchainGetAddress,
  thorchainSignTransaction
} from '@shapeshift/metamask-snaps-adapter'
import { CardActionProps, CardProps } from '../Card/Card'

/**TODO: Add reference transactions for BCH, DOGE, LTC */

export const AssetCardListConfig: Array<CardProps> = [
  {
    name: 'Binance Chain (BNB)',
    icon: 'bnb.png',
    actions: new Map<string, CardActionProps>([
      [
        'bnb_getAddress',
        {
          callback: binanceGetAddress,
          params: null,
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
    name: 'Bitcoin (BTC)',
    icon: 'btc.png',
    actions: new Map<string, CardActionProps>([
      [
        'btc_getAddress',
        {
          callback: BTCGetAddress,
          params: null,
          description: 'Generate a receive address',
        },
      ],
      [
        'btc_signMessage',
        {
          callback: BTCSignMessage,
          params: BitcoinTransactions.sign,
          description: 'Sign a test message',
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
      [
        'btc_verifyTransaction',
        {
          callback: BTCVerifyMessage,
          params: BitcoinTransactions.verify,
          description: 'Verify the signature from a previously-signed test message',
        },
      ],
    ]),
  },
  {
    name: 'Bitcoin Cash (BCH)',
    icon: 'bch.png',
    actions: new Map<string, CardActionProps>([
      [
        'bch_getAddress',
        {
          callback: BCHGetAddress,
          params: null,
          description: 'Generate a receive address',
        },
      ],
      [
        'bch_signMessage',
        {
          callback: BCHSignMessage,
          params: BitcoinTransactions.sign,
          description: 'Sign a test message',
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
      [
        'bch_verifyTransaction',
        {
          callback: BCHVerifyMessage,
          params: BitcoinTransactions.verify,
          description: 'Verify the signature from a previously-signed test message',
        },
      ],
    ]),
  },
  {
    name: 'Cosmos (ATOM)',
    icon: 'atom.png',
    actions: new Map<string, CardActionProps>([
      [
        'cosmos_getAddress',
        {
          callback: cosmosGetAddress,
          params: null,
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
    name: 'Dogecoin (DOGE)',
    icon: 'doge.png',
    actions: new Map<string, CardActionProps>([
      [
        'doge_getAddress',
        {
          callback: DogeGetAddress,
          params: null,
          description: 'Generate a receive address',
        },
      ],
      [
        'doge_signMessage',
        {
          callback: DogeSignMessage,
          params: BitcoinTransactions.sign,
          description: 'Sign a test message',
        },
      ],
      [
        'doge_signTransaction',
        {
          callback: DogeSignTransaction,
          params: BitcoinTransactions.tx,
          description: 'Sign a test transaction',
        },
      ],
      [
        'doge_verifyTransaction',
        {
          callback: DogeVerifyMessage,
          params: BitcoinTransactions.verify,
          description: 'Verify the signature from a previously-signed test message',
        },
      ],
    ]),
  },
  {
    name: 'Ethereum (ETH)',
    icon: 'eth.png',
    actions: new Map<string, CardActionProps>([
      [
        'eth_getAddress',
        {
          callback: ETHGetAddress,
          params: null,
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
    name: 'Litecoin (LTC)',
    icon: 'ltc.png',
    actions: new Map<string, CardActionProps>([
      [
        'ltc_getAddress',
        {
          callback: LTCGetAddress,
          params: null,
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
    name: 'Osmosis (OSMO)',
    icon: 'osmo.png',
    actions: new Map<string, CardActionProps>([
      [
        'osmosis_getAddress',
        {
          callback: osmosisGetAddress,
          params: null,
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
    name: 'THORChain (RUNE)',
    icon: 'rune.png',
    actions: new Map<string, CardActionProps>([
      [
        'rune_getAddress',
        {
          callback: thorchainGetAddress,
          params: null,
          description: 'Generate a receive address',
        },
      ],
      [
        'rune_signTransaction',
        {
          callback: thorchainSignTransaction,
          params: ThorchainTransactions.send,
          description: 'Sign a THORChain transfer message',
        },
      ],
    ]),
  },
]
