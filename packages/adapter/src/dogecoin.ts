import { logger } from './lib/logger'
import {
  DogecoinSignedMessage,
  DogecoinSignedTransaction,
  DogecoinSignMessage,
  DogecoinSignTransaction,
  DogecoinVerifyMessage,
} from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Dogecoin.ts'] })

export const DogeGetAddress = async (): Promise<string | undefined> => {
  const provider = await getMetaMaskProvider()
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
  return undefined
}

export const DogeSignTransaction = async (
  transaction: DogecoinSignTransaction,
): Promise<DogecoinSignedTransaction | undefined> => {
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
  return undefined
}

export const DogeVerifyMessage = async (
  message: DogecoinVerifyMessage,
): Promise<boolean | undefined> => {
  const provider = await getMetaMaskProvider()
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

export const DogeBroadcastTransaction = async (
  transaction: DogecoinSignedTransaction,
): Promise<string | undefined> => {
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
  return undefined
}
