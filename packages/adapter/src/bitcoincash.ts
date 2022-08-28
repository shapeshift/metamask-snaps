import { logger } from './lib/logger'
import {
  BitcoinCashGetAddressParams,
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

export const BCHGetAddress = async (params: BitcoinCashGetAddressParams): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'bch_getAddress',
      params: [params]
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHGetAddress' }, `bch_getAddress RPC call failed.`)
  }
  return null
}

export const BCHSignMessage = async (
  message: BitcoinCashSignMessage,
): Promise<BitcoinCashSignedMessage | null> => {
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
  return null
}

export const BCHSignTransaction = async (
  transaction: BitcoinCashSignTransaction,
): Promise<BitcoinCashSignedTransaction | null> => {
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
  return null
}

export const BCHVerifyMessage = async (
  message: BitcoinCashVerifyMessage,
): Promise<boolean | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'bch_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'BCHVerifyMessage' }, `bch_verifyMessage RPC call failed.`)
    return null
  }
}

export const BCHBroadcastTransaction = async (
  transaction: BitcoinCashSignedTransaction,
): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'bch_broadcastTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'BCHBroadcastTransaction' },
      `bch_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
