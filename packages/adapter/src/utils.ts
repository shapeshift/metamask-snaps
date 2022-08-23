import { ExternalProvider } from '@ethersproject/providers'
import detectEthereumProvider from '@metamask/detect-provider'

import { logger } from './lib/logger'
import { walletEnable } from './metamask'
import { EnableShapeShiftSnapResult } from './types'

const moduleLogger = logger.child({ namespace: ['Adapter', 'Utils.ts'] })

export const getMetaMaskProvider = async (): Promise<ExternalProvider> => {
  let ret
  try {
    ret = await detectEthereumProvider({ mustBeMetaMask: true })
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'getMetaMaskProvider' },
      'Please install MetaMask browser extension.',
    )
  }
  return ret
}

export const metaMaskFlaskSupported = async (): Promise<boolean> => {
  try {
    const provider = await getMetaMaskProvider()

    const isFlask = (await provider.request({ method: 'web3_clientVersion' }))?.includes('flask')
    if (!isFlask) {
      throw new Error('Please install MetaMask Flask.')
    }
  } catch (error) {
    moduleLogger.error({ fn: 'metaMaskFlaskSupported' }, error)
  }
  return true
}

export const shapeShiftSnapInstalled = async (snapId: string): Promise<boolean> => {
  const provider = await getMetaMaskProvider()
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
    moduleLogger.error({ fn: 'shapeShiftSnapInstalled' }, error)
    return false
  }
}

/**
 * Prompt the user to allow the snap
 */
export const enableShapeShiftSnap = async (
  snapId: string,
  version?: string,
): Promise<EnableShapeShiftSnapResult> => {
  const ret: EnableShapeShiftSnapResult = {
    success: false,
    message: {
      accounts: [],
      permissions: [],
      snaps: null,
      errors: null,
    },
  }
  try {
    if (!metaMaskFlaskSupported()) {
      throw new Error('Please install MetaMask Flask.')
    }
    const snapIsInstalled = await shapeShiftSnapInstalled(snapId)
    if (!snapIsInstalled) {
      const res = await walletEnable([
        {
          [`wallet_snap_${snapId}`]: {
            version,
          },
        },
      ])
      if (res.errors?.length) {
        throw new Error(JSON.stringify(res.errors, null, 2))
      }
      ret.success = true
      ret.message = res
    }
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletEnable' }, 'wallet_enable RPC call failed.')
  }
  return ret
}
