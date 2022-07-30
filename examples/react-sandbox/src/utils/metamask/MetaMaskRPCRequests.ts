import { logger } from '../../lib/logger'
import { store } from '../../state/store'

const moduleLogger = logger.child({ namespace: ['utils', 'metamask', 'MetaMaskRPCRequests.ts'] })

/**
 * Retrieve provider object from Redux store
 */

const getProvider = (): any => {
  try {
    const state = store.getState()
    if (Object.keys(state).length === 0) {
      throw new Error()
    }
    return state.provider.provider
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'getProvider' },
      `MetaMask provider unavailable. Click 'Connect' in the upper right corner and try again.`,
    )
  }
}

/** Wrapper functions for MetaMask snap native calls
 * For reference, see documentation at https://docs.metamask.io/guide/snaps-rpc-api.html#table-of-contents
 */

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
