import {
  ETHSignedMessage as EthereumSignedMessage,
  ETHSignedTx as EthereumSignedTransaction,
  ETHSignMessage as EthereumSignMessage,
  ETHSignTx as EthereumSignTransaction,
  ETHVerifyMessage as EthereumVerifyMessage,
} from '@shapeshiftoss/hdwallet-core'

import { logger } from '../../lib/logger'
import { getProvider } from '.././common'

const moduleLogger = logger.child({ namespace: ['utils', 'ethereum', 'EthereumRPCRequests.ts'] })

/**
 * ? These helper functions could be moved into the snap itself, but providing these native methods would
 * violate the canonical RPC interface standard. Since we're using them here to make the interface simpler,
 * maybe it's prudent to export these (with typed parameters and returns) from the snap module alongside
 * the standard RPC methods.  */

export const ETHGetAddress = async () => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'eth_getAddress',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHGetAddress' }, `eth_getAddress RPC call failed.`)
  }
}

export const ETHSignMessage = async (
  message: EthereumSignMessage,
): Promise<EthereumSignedMessage | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'eth_signMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHSignMessage' }, `eth_signMessage RPC call failed.`)
  }
}

export const ETHSignTransaction = async (
  transaction: EthereumSignTransaction,
): Promise<EthereumSignedTransaction | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'eth_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHSignTransaction' }, `eth_signTransaction RPC call failed.`)
  }
  return undefined
}

export const ETHVerifyMessage = async (
  message: EthereumVerifyMessage,
): Promise<boolean | undefined> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'eth_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHVerifyMessage' }, `eth_verifyMessage RPC call failed.`)
  }
  return undefined
}
