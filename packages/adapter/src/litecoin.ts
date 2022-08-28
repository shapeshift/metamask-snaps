import { logger } from './lib/logger'
import {
  LitecoinGetAddressParams,
  LitecoinSignedMessage,
  LitecoinSignedTransaction,
  LitecoinSignMessage,
  LitecoinSignTransaction,
  LitecoinVerifyMessage,
} from './types'
import { getMetaMaskProvider } from './utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Litecoin.ts'] })

export const LTCGetAddress = async (params: LitecoinGetAddressParams): Promise<string | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'ltc_getAddress',
      params: [params]
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCGetAddress' }, `ltc_getAddress RPC call failed.`)
  }
  return null
}

export const LTCSignMessage = async (
  message: LitecoinSignMessage,
): Promise<LitecoinSignedMessage | null> => {
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
  return null
}

export const LTCSignTransaction = async (
  transaction: LitecoinSignTransaction,
): Promise<LitecoinSignedTransaction | null> => {
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
  return null
}

export const LTCVerifyMessage = async (
  message: LitecoinVerifyMessage,
): Promise<boolean | null> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'ltc_verifyMessage',
      params: [message],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'LTCVerifyMessage' }, `ltc_verifyMessage RPC call failed.`)
    return null
  }
}

export const LTCBroadcastTransaction = async (
  transaction: LitecoinSignedTransaction,
): Promise<string | null> => {
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
  return null
}
