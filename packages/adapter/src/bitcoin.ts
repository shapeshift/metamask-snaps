import { logger } from './lib/logger'
import {
  BitcoinSignedMessage,
  BitcoinSignedTransaction,
  BitcoinSignMessage,
  BitcoinSignTransaction,
  BitcoinVerifyMessage,
  BTCGetAddressParams,
} from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Bitcoin.ts'] })

export const BTCGetAddress = async (params: BTCGetAddressParams): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'btc_getAddress',
      params: [params]
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCGetAddress' }, `btc_getAddress RPC call failed.`)
  }
  return null
}

export const BTCSignMessage = async (
  message: BitcoinSignMessage,
): Promise<BitcoinSignedMessage | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'btc_signMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCSignMessage' }, `btc_signMessage RPC call failed.`)
  }
  return null
}

export const BTCSignTransaction = async (
  transaction: BitcoinSignTransaction,
): Promise<BitcoinSignedTransaction | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'btc_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCSignTransaction' }, `btc_signTransaction RPC call failed.`)
  }
  return null
}

export const BTCVerifyMessage = async (
  message: BitcoinVerifyMessage,
): Promise<boolean | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'btc_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BTCVerifyMessage' }, `btc_verifyMessage RPC call failed.`)
    return null
  }
}

export const BTCBroadcastTransaction = async (
  transaction: BitcoinSignedTransaction,
): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'bitcoin_broadcastTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'BTCBroadcastTransaction' },
      `bitcoin_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
