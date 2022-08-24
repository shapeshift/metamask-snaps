import { logger } from './lib/logger'
import {
  LitecoinSignedMessage,
  LitecoinSignedTransaction,
  LitecoinSignMessage,
  LitecoinSignTransaction,
  LitecoinVerifyMessage,
} from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Litecoin.ts'] })

export const LTCGetAddress = async (): Promise<string | undefined> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'ltc_getAddress',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCGetAddress' }, `ltc_getAddress RPC call failed.`)
  }
  return undefined
}

export const LTCSignMessage = async (
  message: LitecoinSignMessage,
): Promise<LitecoinSignedMessage | undefined> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'ltc_signMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCSignMessage' }, `ltc_signMessage RPC call failed.`)
  }
  return undefined
}

export const LTCSignTransaction = async (
  transaction: LitecoinSignTransaction,
): Promise<LitecoinSignedTransaction | undefined> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'ltc_signTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCSignTransaction' }, `ltc_signTransaction RPC call failed.`)
  }
  return undefined
}

export const LTCVerifyMessage = async (
  message: LitecoinVerifyMessage,
): Promise<boolean | undefined> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'ltc_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCVerifyMessage' }, `ltc_verifyMessage RPC call failed.`)
    return undefined
  }
}

export const LTCBroadcastTransaction = async (
  transaction: LitecoinSignedTransaction,
): Promise<string | undefined> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'litecoin_broadcastTransaction',
      params: [transaction],
    })
    return ret
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'LTCBroadcastTransaction' },
      `litecoin_broadcastTransaction RPC call failed.`,
    )
  }
  return undefined
}
