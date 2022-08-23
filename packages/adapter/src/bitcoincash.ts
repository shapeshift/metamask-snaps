import { logger } from './lib/logger'
import {
  BitcoinCashSignedMessage,
  BitcoinCashSignedTransaction,
  BitcoinCashSignMessage,
  BitcoinCashSignTransaction,
  BitcoinCashVerifyMessage,
} from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({
  namespace: ['Adapter', 'BitcoinCash.ts'],
})

export const BCHGetAddress = async (): Promise<string | undefined> => {
  const provider = await getMetaMaskProvider()
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
  const provider = await getMetaMaskProvider()
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
  const provider = await getMetaMaskProvider()
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
  const provider = await getMetaMaskProvider()
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
