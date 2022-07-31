import {
  BitcoinTransactions,
  CosmosTransactions,
  EthereumTransactions,
} from '../../constants/transactions'
import {
  BTCGetAddress,
  BTCSignMessage,
  BTCSignTransaction,
  BTCVerifyMessage,
} from '../../utils/bitcoin/BitcoinRPCRequests'
import { cosmosGetAddress, cosmosSignTransaction } from '../../utils/cosmos/CosmosRPCRequests'
import {
  ETHGetAddress,
  ETHSignMessage,
  ETHSignTransaction,
  ETHVerifyMessage,
} from '../../utils/ethereum/EthereumRPCRequests'
import { CardActionProps, CardProps } from '../Card/Card'

export const AssetCardListConfig: Array<CardProps> = [
  {
    name: 'Bitcoin (BTC)',
    icon: 'btc.png',
    actions: new Map<string, CardActionProps>([
      [
        'btc_getAddress',
        { callback: BTCGetAddress, params: null, description: 'Generate a receive address' },
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
    name: 'Cosmos (ATOM)',
    icon: 'atom.png',
    actions: new Map<string, CardActionProps>([
      [
        'cosmos_getAddress',
        { callback: cosmosGetAddress, params: null, description: 'Generate a receive address' },
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
    name: 'Ethereum (ETH)',
    icon: 'eth.png',
    actions: new Map<string, CardActionProps>([
      [
        'eth_getAddress',
        { callback: ETHGetAddress, params: null, description: 'Generate a receive address' },
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
]
