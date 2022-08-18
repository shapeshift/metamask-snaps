import {
  BTCSignedMessage as BitcoinSignedMessage,
  BTCSignedTx as BitcoinSignedTransaction,
  BTCSignMessage as BitcoinSignMessage,
  BTCSignTx as BitcoinSignTransaction,
  BTCVerifyMessage as BitcoinVerifyMessage,
} from '@shapeshiftoss/hdwallet-core'

import { logger } from '../../lib/logger'
import { getProvider } from '.././common'

const moduleLogger = logger.child({ namespace: ['utils', 'bitcoin', 'BitcoinRPCRequests.ts'] })

/**
 * ? These helper functions could be moved into the snap itself, but providing these native methods would
 * violate the canonical RPC interface standard. Since we're using them here to make the interface simpler,
 * maybe it's prudent to export these (with typed parameters and returns) from the snap module alongside
 * the standard RPC methods.  */

export const BTCGetAddress = async (): Promise<string | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'btc_getAddress',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCGetAddress' }, `btc_getAddress RPC call failed.`)
  }
  return undefined
}

export const BTCSignMessage = async (
  message: BitcoinSignMessage,
): Promise<BitcoinSignedMessage | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'btc_signMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCSignMessage' }, `btc_signMessage RPC call failed.`)
  }
  return undefined
}

export const BTCSignTransaction = async (
  transaction: BitcoinSignTransaction,
): Promise<BitcoinSignedTransaction | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'btc_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCSignTransaction' }, `btc_signTransaction RPC call failed.`)
  }
  return undefined
}

export const BTCVerifyMessage = async (
  message: BitcoinVerifyMessage,
): Promise<boolean | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'btc_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCVerifyMessage' }, `btc_verifyMessage RPC call failed.`)
    return undefined
  }
}
