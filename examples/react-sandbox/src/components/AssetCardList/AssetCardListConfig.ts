import {
  BitcoinTransactions,
  CosmosTransactions,
  EthereumTransactions,
} from '../../constants/transactions'
import { AssetCardActionProps, AssetCardProps } from './AssetCard'

export const AssetCardListConfig: Array<AssetCardProps> = [
  {
    name: 'Bitcoin',
    icon: 'btc.png',
    actions: new Map<string, AssetCardActionProps>([
      ['address', { callback: undefined, args: null, description: 'Generate a receive address' }],
      [
        'sign',
        { callback: undefined, args: BitcoinTransactions.sign, description: 'Sign a demo message' },
      ],
      [
        'tx',
        {
          callback: () => {
            console.info('Just invoked the BTC tx callback!')
          },
          args: BitcoinTransactions.tx,
          description: 'Sign a test transaction',
        },
      ],
      [
        'verify',
        {
          callback: undefined,
          args: BitcoinTransactions.verify,
          description: 'Verify the signature from a previously-signed demo message',
        },
      ],
    ]),
  },
  {
    name: 'Cosmos',
    icon: 'atom.png',
    actions: new Map<string, AssetCardActionProps>([
      ['address', { callback: undefined, args: null, description: 'Generate a receive address' }],
      [
        'delegate',
        {
          callback: undefined,
          args: CosmosTransactions.delegate,
          description: 'Sign a Cosmos delegate message',
        },
      ],
      [
        'ibcTransfer',
        {
          callback: undefined,
          args: CosmosTransactions.ibcTransfer,
          description: 'Sign a Cosmos ibcTransfer message',
        },
      ],
      [
        'redelegate',
        {
          callback: undefined,
          args: CosmosTransactions.redelegate,
          description: 'Sign a Cosmos redelegate message',
        },
      ],
      [
        'rewards',
        {
          callback: undefined,
          args: CosmosTransactions.rewards,
          description: 'Sign a Cosmos rewards message',
        },
      ],
      [
        'transfer',
        {
          callback: undefined,
          args: CosmosTransactions.transfer,
          description: 'Sign a Cosmos transfer message',
        },
      ],
      [
        'undelegate',
        {
          callback: undefined,
          args: CosmosTransactions.undelegate,
          description: 'Sign a Cosmos undelegate message',
        },
      ],
    ]),
  },
  {
    name: 'Ethereum',
    icon: 'eth.png',
    actions: new Map<string, AssetCardActionProps>([
      ['address', { callback: undefined, args: null, description: 'Generate a receive address' }],
      ['send', { callback: undefined, args: EthereumTransactions.send }],
      ['sign', { callback: undefined, args: EthereumTransactions.sign }],
      ['tx', { callback: undefined, args: EthereumTransactions.tx }],
      ['verify', { callback: undefined, args: EthereumTransactions.verify }],
    ]),
  },
]
