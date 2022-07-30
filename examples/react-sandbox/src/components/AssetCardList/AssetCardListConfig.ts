import {
  BitcoinTransactions,
  CosmosTransactions,
  EthereumTransactions,
} from '../../constants/transactions'
import { CardActionProps, CardProps } from '../Card/Card'

export const AssetCardListConfig: Array<CardProps> = [
  {
    name: 'Bitcoin (BTC)',
    icon: 'btc.png',
    actions: new Map<string, CardActionProps>([
      [
        'btc_getAddress',
        { callback: undefined, params: null, description: 'Generate a receive address' },
      ],
      [
        'btc_signMessage',
        {
          callback: () => {
            console.info('Just invoked the btc_signMessage callback!')
          },
          params: BitcoinTransactions.sign,
          description: 'Sign a test message',
        },
      ],
      [
        'btc_signTransaction',
        {
          callback: () => {
            console.info('Just invoked the btc_signTransaction callback!')
          },
          params: BitcoinTransactions.tx,
          description: 'Sign a test transaction',
        },
      ],
      [
        'btc_verifyTransaction',
        {
          callback: undefined,
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
        { callback: undefined, params: null, description: 'Generate a receive address' },
      ],
      [
        'cosmos_signTransaction',
        {
          callback: undefined,
          params: CosmosTransactions.delegate,
          description: 'Sign a Cosmos delegate message',
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
        { callback: undefined, params: null, description: 'Generate a receive address' },
      ],
      [
        'eth_signMessage',
        {
          callback: undefined,
          params: EthereumTransactions.sign,
          description: 'Sign a test message',
        },
      ],
      [
        'eth_signTransaction',
        {
          callback: undefined,
          params: EthereumTransactions.tx,
          description: 'Sign a test transaction',
        },
      ],
      [
        'eth_verifyMessage',
        {
          callback: undefined,
          params: EthereumTransactions.verify,
          description: 'Verify the signature from a previously-signed test message',
        },
      ],
    ]),
  },
]
