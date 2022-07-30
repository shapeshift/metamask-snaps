import {
  BitcoinTransactions,
  CosmosTransactions,
  EthereumTransactions,
} from '../../constants/transactions'
import { CardActionProps, CardProps } from '../Card/Card'

export const AssetCardListConfig: Array<CardProps> = [
  {
    name: 'Bitcoin',
    icon: 'btc.png',
    actions: new Map<string, CardActionProps>([
      ['address', { callback: undefined, params: null, description: 'Generate a receive address' }],
      [
        'sign',
        {
          callback: undefined,
          params: BitcoinTransactions.sign,
          description: 'Sign a demo message',
        },
      ],
      [
        'tx',
        {
          callback: () => {
            console.info('Just invoked the BTC tx callback!')
          },
          params: BitcoinTransactions.tx,
          description: 'Sign a test transaction',
        },
      ],
      [
        'verify',
        {
          callback: undefined,
          params: BitcoinTransactions.verify,
          description: 'Verify the signature from a previously-signed demo message',
        },
      ],
    ]),
  },
  {
    name: 'Cosmos',
    icon: 'atom.png',
    actions: new Map<string, CardActionProps>([
      ['address', { callback: undefined, params: null, description: 'Generate a receive address' }],
      [
        'delegate',
        {
          callback: undefined,
          params: CosmosTransactions.delegate,
          description: 'Sign a Cosmos delegate message',
        },
      ],
      [
        'ibcTransfer',
        {
          callback: undefined,
          params: CosmosTransactions.ibcTransfer,
          description: 'Sign a Cosmos ibcTransfer message',
        },
      ],
      [
        'redelegate',
        {
          callback: undefined,
          params: CosmosTransactions.redelegate,
          description: 'Sign a Cosmos redelegate message',
        },
      ],
      [
        'rewards',
        {
          callback: undefined,
          params: CosmosTransactions.rewards,
          description: 'Sign a Cosmos rewards message',
        },
      ],
      [
        'transfer',
        {
          callback: undefined,
          params: CosmosTransactions.transfer,
          description: 'Sign a Cosmos transfer message',
        },
      ],
      [
        'undelegate',
        {
          callback: undefined,
          params: CosmosTransactions.undelegate,
          description: 'Sign a Cosmos undelegate message',
        },
      ],
    ]),
  },
  {
    name: 'Ethereum',
    icon: 'eth.png',
    actions: new Map<string, CardActionProps>([
      ['address', { callback: undefined, params: null, description: 'Generate a receive address' }],
      ['send', { callback: undefined, params: EthereumTransactions.send }],
      ['sign', { callback: undefined, params: EthereumTransactions.sign }],
      ['tx', { callback: undefined, params: EthereumTransactions.tx }],
      ['verify', { callback: undefined, params: EthereumTransactions.verify }],
    ]),
  },
]
