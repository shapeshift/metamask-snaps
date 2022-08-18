import {
  BTCSignedMessage as DogecoinSignedMessage,
  BTCSignedTx as DogecoinSignedTransaction,
  BTCSignMessage as DogecoinSignMessage,
  BTCSignTx as DogecoinSignTransaction,
  BTCVerifyMessage as DogecoinVerifyMessage,
} from '@shapeshiftoss/hdwallet-core'

import { logger } from '../../lib/logger'
import { getProvider } from '../common'

const moduleLogger = logger.child({ namespace: ['utils', 'dogecoin', 'DogecoinRPCRequests.ts'] })

/**
 * ? These helper functions could be moved into the snap itself, but providing these native methods would
 * violate the canonical RPC interface standard. Since we're using them here to make the interface simpler,
 * maybe it's prudent to export these (with typed parameters and returns) from the snap module alongside
 * the standard RPC methods.  */

export const DogeGetAddress = async (): Promise<string | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'doge_getAddress',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'DogeGetAddress' }, `doge_getAddress RPC call failed.`)
  }
  return undefined
}

export const DogeSignMessage = async (
  message: DogecoinSignMessage,
): Promise<DogecoinSignedMessage | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'doge_signMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'DogeSignMessage' }, `doge_signMessage RPC call failed.`)
  }
  return undefined
}

export const DogeSignTransaction = async (
  transaction: DogecoinSignTransaction,
): Promise<DogecoinSignedTransaction | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'doge_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'DogeSignTransaction' },
      `doge_signTransaction RPC call failed.`,
    )
  }
  return undefined
}

export const DogeVerifyMessage = async (
  message: DogecoinVerifyMessage,
): Promise<boolean | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'doge_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'DogeVerifyMessage' }, `doge_verifyMessage RPC call failed.`)
    return undefined
  }
}
