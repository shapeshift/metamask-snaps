import { ExternalProvider } from '@ethersproject/providers'
import detectEthereumProvider from '@metamask/detect-provider'

import { logger } from './lib/logger'

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

export const shapeShiftSnapInstalled = async (): Promise<boolean> => {
  const provider = await getMetaMaskProvider()
  try {
    const ret = await provider.request({
      method: 'wallet_getSnaps',
    })
    return ret
  } catch (error) {
    moduleLogger.error({ fn: 'shapeShiftSnapInstalled' }, error)
  }
  return true
}

/**
 * Prompt the user to allow the snap
 */
export const enableShapeShiftSnap = async (snapId: string): Promise<any> => {
  try {
    const provider = await getMetaMaskProvider()
    if (!metaMaskFlaskSupported()) {
      throw new Error('Please install MetaMask Flask.')
    }
    // if(!shapeShiftSnapInstalled()){
    //   walletEnable( ['npm:@metamask/example-snap']: {},'eth_accounts': {})
    // }
    const ret = await provider.request({
      method: 'wallet_enable',
      params: [
        {
          wallet_snap: { [snapId]: {} },
        },
      ],
    })
    return ret
  } catch (error) {
    moduleLogger.error(error, { fn: 'walletEnable' }, 'wallet_enable RPC call failed.')
  }
  return undefined
}
