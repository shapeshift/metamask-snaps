import { logger } from './lib/logger'
import {
  DogecoinGetAddressParams,
  DogecoinSignedMessage,
  DogecoinSignedTransaction,
  DogecoinSignMessage,
  DogecoinSignTransaction,
  DogecoinVerifyMessage,
} from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Dogecoin.ts'] })

export const dogecoinGetAddress = async (params: DogecoinGetAddressParams): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'doge_getAddress',
      params: [params]
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'DogeGetAddress' }, `doge_getAddress RPC call failed.`)
  }
  return null
}

export const dogecoinSignMessage = async (
  message: DogecoinSignMessage,
): Promise<DogecoinSignedMessage | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'doge_signMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'DogeSignMessage' }, `doge_signMessage RPC call failed.`)
  }
  return null
}

export const dogecoinSignTransaction = async (
  transaction: DogecoinSignTransaction,
): Promise<DogecoinSignedTransaction | null> => {
  const provider = await getMetaMaskProvider()
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
  return null
}

export const dogecoinVerifyMessage = async (
  message: DogecoinVerifyMessage,
): Promise<boolean | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'doge_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'DogeVerifyMessage' }, `doge_verifyMessage RPC call failed.`)
    return null
  }
}

export const dogecoinBroadcastTransaction = async (
  transaction: DogecoinSignedTransaction,
): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'doge_broadcastTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'DogeBroadcastTransaction' },
      `doge_broadcastTransaction RPC call failed.`,
    )
  }
  return null
}
