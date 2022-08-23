import { logger } from './lib/logger'
import {
  BitcoinSignedMessage,
  BitcoinSignedTransaction,
  BitcoinSignMessage,
  BitcoinSignTransaction,
  BitcoinVerifyMessage,
} from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Bitcoin.ts'] })

export const BTCGetAddress = async (): Promise<string | undefined> => {
  const provider = await getMetaMaskProvider()
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
  return undefined
}

export const BTCSignTransaction = async (
  transaction: BitcoinSignTransaction,
): Promise<BitcoinSignedTransaction | undefined> => {
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
  return undefined
}

export const BTCVerifyMessage = async (
  message: BitcoinVerifyMessage,
): Promise<boolean | undefined> => {
  const provider = await getMetaMaskProvider()
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
