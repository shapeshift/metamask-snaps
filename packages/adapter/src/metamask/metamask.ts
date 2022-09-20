import { slip44ByCoin } from '@shapeshiftoss/hdwallet-core'
import { WalletEnableParam, WalletEnableResult } from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../lib/logger'
import { getMetaMaskProvider } from '../utils'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Metamask.ts'] })

/** Wrapper functions for MetaMask snap native calls
 * For reference, see documentation at https://docs.metamask.io/guide/snaps-rpc-api.html#table-of-contents
 */

/** Unrestricted Methods */
export const walletEnable = async (params: WalletEnableParam[]): Promise<WalletEnableResult> => {
  const provider = await getMetaMaskProvider()

  try {
    const ret = await provider.request({
      method: 'wallet_enable',
      params,
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletGetSnaps' }, `wallet_enable RPC call failed.`)
    return Promise.reject(error)
  }
}

export const walletGetSnaps = async (): Promise<any> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'wallet_getSnaps',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletGetSnaps' }, `wallet_getSnaps RPC call failed.`)
    return Promise.reject(error)
  }
}

export const walletInstallSnaps = async ({
  snaps,
}: {
  [snapId: string]: { version?: string }
}): Promise<any> => {
  const provider = await getMetaMaskProvider()

  try {
    const ret = await provider.request({
      method: 'wallet_installSnaps',
      params: [{ snaps }],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletInstallSnaps' }, `wallet_installSnaps RPC call failed.`)
    return Promise.reject(error)
  }
}

export const walletInvokeSnap = async ({
  method,
  params,
}: {
  method: string
  params?: unknown[] | Record<string, unknown>[]
}): Promise<any> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method,
      params,
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletInvokeSnap' }, `wallet_invokeSnap RPC call failed.`)
    return Promise.reject(error)
  }
}

/** Restricted Methods */

export const walletSnap = async ({
  method,
  paramMethod,
}: {
  method: string
  paramMethod: string
}): Promise<any> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: `wallet_snap_${method}`,
      params: [
        {
          method: paramMethod,
        },
      ],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletSnap' }, `wallet_snap_* RPC call failed.`)
    return Promise.reject(error)
  }
}

/**
 * TODO: This is a snap-native call - a handler must be added to the snap onRpcRequest() method to support this.
 */
export const snapConfirm = async ({
  prompt,
  description,
  textAreaContent,
}: {
  prompt: string
  description: string
  textAreaContent: string
}): Promise<boolean> => {
  const provider = await getMetaMaskProvider()
  if (textAreaContent.length > 1800) {
    throw new Error('Length of textAreaContent string may not exceed 1800 characters.')
  }
  try {
    const ret = await provider.request({
      method: 'snap_confirm',
      params: [
        {
          prompt,
          description,
          textAreaContent,
        },
      ],
    })
    return ret
  } catch (error) {
    /** User did not confirm the action or an error was encountered */
    moduleLogger.error(error, { fn: 'walletSnap' }, `wallet_snap_* RPC call failed.`)

    return Promise.reject(error)
  }
}

/**
 * TODO: This is a snap-native call - a handler must be added to the snap onRpcRequest() method to support this.
 */
export const snapGetBIP44Entropy = async (coinType: string): Promise<any> => {
  const provider = await getMetaMaskProvider()
  const chainCode = slip44ByCoin(coinType)
  if (chainCode === undefined) {
    throw new Error('Coin type {coinType} invalid or unsupported.')
  }
  try {
    const result = await provider.request({
      method: `snap_getBip44Entropy_${chainCode}`,
    })
    return result
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'snapGetBIP44Entropy' },
      `snap_getBip44Entropy_${chainCode} RPC call failed.`,
    )
    return Promise.reject(error)
  }
}

/**
 * TODO: This is a snap-native call - a handler must be added to the snap onRpcRequest() method to support this.
 */
export const snapManageState = async ({
  operation,
  value,
}: {
  operation: string
  value?: Record<string, unknown>
}): Promise<any> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'snap_manageState',
      params: [operation, value],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'snapManageState' }, `snap_manageState RPC call failed.`)
    return Promise.reject(error)
  }
}

/**
 * TODO: This is a snap-native call - a handler must be added to the snap onRpcRequest() method to support this.
 */
export const snapNotify = async ({
  type,
  message,
}: {
  type: string
  message: string
}): Promise<any> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'snap_notify',
      params: [
        {
          type,
          message,
        },
      ],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'snapNotify' }, `snap_notify RPC call failed.`)
    return Promise.reject(error)
  }
}
