import {
  BitcoinBroadcastTransactionParams,
  BitcoinBroadcastTransactionResponse,
  BitcoinGetAddressParams,
  BitcoinGetAddressResponse,
  BitcoinSignTransactionParams,
  BitcoinSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { BitcoinSigner } from './BitcoinSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'UTXO', 'Bitcoin', 'Handlers.ts'],
})

export const bitcoinGetAddress = async (
  params: BitcoinGetAddressParams,
): Promise<BitcoinGetAddressResponse> => {
  try {
    const bitcoinSigner = new BitcoinSigner()
    await bitcoinSigner.initialize()
    return await bitcoinSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'bitcoinGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const bitcoinSignTransaction = async (
  params: BitcoinSignTransactionParams,
): Promise<BitcoinSignTransactionResponse> => {
  try {
    const bitcoinSigner = new BitcoinSigner()
    await bitcoinSigner.initialize()
    return await bitcoinSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'bitcoinSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const bitcoinBroadcastTransaction = async (
  params: BitcoinBroadcastTransactionParams,
): Promise<BitcoinBroadcastTransactionResponse> => {
  try {
    const bitcoinSigner = new BitcoinSigner()
    await bitcoinSigner.initialize({ broadcastUrl: params.baseUrl })
    return await bitcoinSigner.broadcastTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'bitcoinSignTransaction' }, error)
    return Promise.reject(error)
  }
}
