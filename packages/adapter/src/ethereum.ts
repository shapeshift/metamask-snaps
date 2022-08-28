import { logger } from './lib/logger'
import {
  EthereumGetAddressParams,
  EthereumSignedMessage,
  EthereumSignedTransaction,
  EthereumSignMessage,
  EthereumSignTransaction,
  EthereumVerifyMessage,
} from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Ethereum.ts'] })

export const ETHGetAddress = async (params: EthereumGetAddressParams): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'eth_getAddress',
      params: [params]
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHGetAddress' }, `eth_getAddress RPC call failed.`)
  }
  return null
}

export const ETHSignMessage = async (
  message: EthereumSignMessage,
): Promise<EthereumSignedMessage | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'eth_signMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHSignMessage' }, `eth_signMessage RPC call failed.`)
  }
  return null
}

export const ETHSignTransaction = async (
  transaction: EthereumSignTransaction,
): Promise<EthereumSignedTransaction | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'eth_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHSignTransaction' }, `eth_signTransaction RPC call failed.`)
  }
  return null
}

export const ETHVerifyMessage = async (
  message: EthereumVerifyMessage,
): Promise<boolean | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'eth_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'ETHVerifyMessage' }, `eth_verifyMessage RPC call failed.`)
  }
  return null
}

export const ETHBroadcastTransaction = async (
  transaction: EthereumSignedTransaction,
): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'eth_broadcastTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'ETHBroadcastTransaction' },
      `eth_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
