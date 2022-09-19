import {
  BitcoinCashBroadcastTransactionParams,
  BitcoinCashBroadcastTransactionResponse,
  BitcoinCashGetAddressParams,
  BitcoinCashGetAddressResponse,
  BitcoinCashSignTransactionParams,
  BitcoinCashSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { BitcoinCashSigner } from './BitcoinCashSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'UTXO', 'BitcoinCash', 'Handlers.ts'],
})

export const bitcoincashGetAddress = async (
  params: BitcoinCashGetAddressParams,
): Promise<BitcoinCashGetAddressResponse> => {
  try {
    const bitcoincashSigner = new BitcoinCashSigner()
    await bitcoincashSigner.initialize()
    return await bitcoincashSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'bitcoincashGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const bitcoincashSignTransaction = async (
  params: BitcoinCashSignTransactionParams,
): Promise<BitcoinCashSignTransactionResponse> => {
  try {
    const bitcoincashSigner = new BitcoinCashSigner()
    await bitcoincashSigner.initialize()
    return await bitcoincashSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'bitcoincashSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const bitcoincashBroadcastTransaction = async (
  params: BitcoinCashBroadcastTransactionParams,
): Promise<BitcoinCashBroadcastTransactionResponse> => {
  try {
    const bitcoincashSigner = new BitcoinCashSigner()
    await bitcoincashSigner.initialize(params.baseUrl)
    return await bitcoincashSigner.broadcastTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'bitcoincashSignTransaction' }, error)
    return Promise.reject(error)
  }
}
