import type { ExternalProvider } from '@ethersproject/providers'
import detectEthereumProvider from '@metamask/detect-provider'
import type {
  EnableShapeShiftMultichainResult,
  RPCHandlerResponse,
  ShapeShiftSnapRPCRequest,
  ShapeShiftSnapRPCResponse,
} from '@shapeshiftoss/metamask-snaps-types'
import assert from 'assert'
import PQueue from 'p-queue'

import { logger } from './lib/logger'
import { walletRequestSnaps } from './metamask/metamask'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Utils.ts'] })

export type Provider = Omit<ExternalProvider, 'request'> & {
  request?: (request: { method: string; params?: any }) => Promise<any>
}

export const getMetaMaskProvider = async (): Promise<Provider | undefined> => {
  try {
    const provider = await (detectEthereumProvider({ mustBeMetaMask: true }) as Promise<
      Provider | undefined
    >)
    if (provider === undefined) {
      throw new Error('Could not get MetaMask provider')
    }
    if (provider.request === undefined) {
      throw new Error('MetaMask provider does not define a .request() method')
    }
    return provider
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'getMetaMaskProvider' },
      'Please install MetaMask browser extension.',
    )
  }
  return undefined
}

export const metaMaskFlaskSupported = async (externalProvider?: any): Promise<boolean> => {
  try {
    const provider = externalProvider || (await getMetaMaskProvider())

    const isFlask = (await provider.request({ method: 'web3_clientVersion' }))?.includes('flask')
    assert(isFlask, 'Please install MetaMask Flask.')
  } catch (error) {
    moduleLogger.error({ fn: 'metaMaskFlaskSupported' }, error)
  }
  return true
}

export const shapeShiftSnapInstalled = async (snapId: string): Promise<boolean> => {
  const provider = await getMetaMaskProvider()
  if (provider === undefined) {
    throw new Error('Could not get MetaMask provider')
  }
  if (provider.request === undefined) {
    throw new Error('MetaMask provider does not define a .request() method')
  }
  try {
    const ret = await provider.request({
      method: 'wallet_getSnaps',
    })

    /* Requested snap not found in registry */
    if (!ret[snapId]) {
      return false
    }

    /* Errors occurred during the previous snap installation */
    if (ret[snapId].error) {
      return false
    }
    return true
  } catch (error) {
    moduleLogger.error({ fn: 'shapeshiftSnapInstalled' }, error)
    return false
  }
}

export const isLocked = async (): Promise<boolean> => {
  try {
    const provider = (await getMetaMaskProvider()) as any
    return !provider._metamask.isUnlocked()
  } catch (error) {
    moduleLogger.error({ fn: 'isLocked' }, error)
    return false
  }
}

// export const shapeShiftSnapDisabled = async (snapId: string): Promise<boolean> => {
//   try {
//     const ret = await sendFlaskRPCRequest({method: 'ping', params: null}, snapId )
//     if (ret instanceof JsonRpcError && ret.code && ret.code === -32603){

//     }
//   } catch (error) {

//   }

// }

/**
 * Prompt the user to allow the snap
 */
export const enableShapeShiftSnap = async (
  snapId: string,
  version?: string,
): Promise<EnableShapeShiftMultichainResult> => {
  const ret: EnableShapeShiftMultichainResult = {
    success: false,
    message: {
      accounts: [],
      permissions: [],
      snaps: null,
      errors: undefined,
    },
  }
  try {
    assert(metaMaskFlaskSupported(), 'Please install MetaMask Flask.')
    const snapIsInstalled = await shapeShiftSnapInstalled(snapId)
    if (!snapIsInstalled) {
      const res = await walletRequestSnaps(snapId, version)
      assert(res.errors?.length === 0, JSON.stringify(res.errors, null, 2))
      ret.success = true
      ret.message = res
    }
  } catch (error) {
    moduleLogger.error(error, { fn: 'enableShapeShiftSnap' }, 'walletRequestSnaps RPC call failed.')
  }
  return ret
}

// Flask only supports a max. of 5 queued requests, so this ensures we're under that
const flaskRpcRequestsQueue = new PQueue({ concurrency: 4 })

export const sendFlaskRPCRequest = async <T extends ShapeShiftSnapRPCResponse>(
  request: ShapeShiftSnapRPCRequest,
  snapId: string,
): Promise<RPCHandlerResponse<T>> => {
  try {
    const provider = await getMetaMaskProvider()
    if (provider === undefined) {
      throw new Error('Could not get MetaMask provider')
    }
    if (provider.request === undefined) {
      throw new Error('MetaMask provider does not define a .request() method')
    }
    const ret = await flaskRpcRequestsQueue.add(() =>
      provider.request?.({
        method: 'wallet_invokeSnap',
        params: {
          snapId,
          request,
        },
      }),
    )
    return ret as T
  } catch (error) {
    moduleLogger.error(error, { fn: 'sendFlaskRPCRequest' }, `${request.method} RPC call failed.`)
    return error
  }
}
