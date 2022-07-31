import { ASSET_REFERENCE } from '@shapeshiftoss/caip'

import { logger } from '../../lib/logger'
import { getProvider } from '../common'

const moduleLogger = logger.child({ namespace: ['utils', 'metamask', 'MetaMaskRPCRequests.ts'] })

/** Wrapper functions for MetaMask snap native calls
 * For reference, see documentation at https://docs.metamask.io/guide/snaps-rpc-api.html#table-of-contents
 */

/**
 * ? These helper functions could be moved into the snap itself, but providing these native methods would
 * violate the canonical RPC interface standard. Since we're using them here to make the interface simpler,
 * maybe it's prudent to export these (with typed parameters and returns) from the snap module alongside
 * the standard RPC methods.  */

/** Unrestricted Methods */

export const walletEnable = async ({
  wallet_snap,
  permissionName,
}: {
  wallet_snap: {
    [snapId: string]: {
      version?: string
    }
  }
  [permissionName: string]: {}
}): Promise<any> => {
  const provider = getProvider()

  try {
    const ret = await provider.request({
      method: 'wallet_getSnaps',
      params: [
        {
          wallet_snap,
          permissionName,
        },
      ],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletGetSnaps' }, `wallet_enable RPC call failed.`)
  }
}

export const walletGetSnaps = async (): Promise<any> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'wallet_getSnaps',
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletGetSnaps' }, `wallet_getSnaps RPC call failed.`)
  }
}

export const walletInstallSnaps = async ({
  snaps,
}: {
  [snapId: string]: { version?: string }
}): Promise<any> => {
  const provider = getProvider()

  try {
    const ret = await provider.request({
      method: 'wallet_installSnaps',
      params: { snaps },
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletInstallSnaps' }, `wallet_installSnaps RPC call failed.`)
  }
}

export const walletInvokeSnap = async ({
  method,
  params,
  id,
  jsonrpc,
}: {
  method: string
  params?: unknown[] | Record<string, unknown>
  id?: string | number
  jsonrpc?: '2.0'
}): Promise<any> => {
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method,
      params,
      id,
      jsonrpc,
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletInvokeSnap' }, `wallet_invokeSnap RPC call failed.`)
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
  const provider = getProvider()
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
  const provider = getProvider()
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
    moduleLogger.error(error, { fn: 'walletSnap' }, `wallet_snap_* RPC call failed.`)
  }
  /** User did not confirm the action or an error was encountered */
  return false
}

/**
 * TODO: This is a snap-native call - a handler must be added to the snap onRpcRequest() method to support this.
 */
export const snapGetBIP44Entropy = async (coinType: string): Promise<any> => {
  const provider = getProvider()
  const assetReference: string = ASSET_REFERENCE[coinType as keyof typeof ASSET_REFERENCE]
  if (assetReference === undefined) {
    throw new Error(
      `Coin type {coinType} invalid or unsupported. Supported chain types are ${JSON.stringify(
        ASSET_REFERENCE,
        null,
        2,
      )}`,
    )
  }
  try {
    const result = await provider.request({
      method: `snap_getBip44Entropy_${assetReference}`,
    })
    return result
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'snapGetBIP44Entropy' },
      `snap_getBip44Entropy_${assetReference} RPC call failed.`,
    )
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
  const provider = getProvider()
  try {
    const ret = await provider.request({
      method: 'snap_manageState',
      params: [operation, value],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'snapManageState' }, `snap_manageState RPC call failed.`)
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
  const provider = getProvider()
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
  }
}
