import {
  BTCSignedMessage as BitcoinCashSignedMessage,
  BTCSignedTx as BitcoinCashSignedTransaction,
  BTCSignMessage as BitcoinCashSignMessage,
  BTCSignTx as BitcoinCashSignTransaction,
  BTCVerifyMessage as BitcoinCashVerifyMessage,
} from '@shapeshiftoss/hdwallet-core'

import { logger } from '../../lib/logger'
import { getProvider } from '../common'

const moduleLogger = logger.child({
  namespace: ['utils', 'bitcoincash', 'BitcoinCashRPCRequests.ts'],
})

/**
 * ? These helper functions could be moved into the snap itself, but providing these native methods would
 * violate the canonical RPC interface standard. Since we're using them here to make the interface simpler,
 * maybe it's prudent to export these (with typed parameters and returns) from the snap module alongside
 * the standard RPC methods.  */

export const BCHGetAddress = async (): Promise<string | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'bch_getAddress',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHGetAddress' }, `bch_getAddress RPC call failed.`)
  }
  return undefined
}

export const BCHSignMessage = async (
  message: BitcoinCashSignMessage,
): Promise<BitcoinCashSignedMessage | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'bch_signMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHSignMessage' }, `bch_signMessage RPC call failed.`)
  }
  return undefined
}

export const BCHSignTransaction = async (
  transaction: BitcoinCashSignTransaction,
): Promise<BitcoinCashSignedTransaction | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'bch_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHSignTransaction' }, `bch_signTransaction RPC call failed.`)
  }
  return undefined
}

export const BCHVerifyMessage = async (
  message: BitcoinCashVerifyMessage,
): Promise<boolean | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'bch_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHVerifyMessage' }, `bch_verifyMessage RPC call failed.`)
    return undefined
  }
}
