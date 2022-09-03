import { ExternalProvider } from '@ethersproject/providers'
import detectEthereumProvider from '@metamask/detect-provider'

import { logger } from './lib/logger'

const moduleLogger = logger.child({ namespace: ['Snap', 'Utils.ts'] })

const getMetaMaskProvider = async (): Promise<ExternalProvider> => {
  try {
    const provider = window.ethereum
    if(!provider){
      throw new Error('Could not detect Ethereum provider')
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

const getMetamaskVersion = async (): Promise<string> => {
  try {
    const provider = await getMetaMaskProvider()
    return (await provider.request({
      method: 'web3_clientVersion',
      params: [],
    })) as string
  } catch (error) {
    moduleLogger.error(error, { fn: 'getMetamaskVersion' }, 'Failed to get MetaMask version.')
    return undefined
  }
}

// Version comparison as implemented by ChainSafe: https://github.com/ChainSafe/filsnap/blob/master/packages/snap/src/util/version.ts
const isNewerVersion = (current: string, comparingWith: string): boolean => {
  if (current === comparingWith) return false

  const regex = /[^\d.]/g
  const currentFragments = current.replace(regex, '').split('.')
  const comparingWithFragments = comparingWith.replace(regex, '').split('.')

  const length =
    currentFragments.length > comparingWithFragments.length
      ? currentFragments.length
      : comparingWithFragments.length
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    if ((Number(currentFragments[i]) || 0) === (Number(comparingWithFragments[i]) || 0)) {
      // eslint-disable-next-line no-continue
      continue
    }
    return (Number(comparingWithFragments[i]) || 0) > (Number(currentFragments[i]) || 0)
  }

  return true
}

export const metaMaskVersionGreaterThanOrEqualTo = async (version: string): Promise<boolean> => {
  try {
    if (!version.includes('MetaMask/')) {
      // eslint-disable-next-line no-param-reassign
      version = `MetaMask/${version}`
    }
    const current = await getMetamaskVersion()
    console.info('current version', version)
    return isNewerVersion(current, version)
  } catch (error) {
    moduleLogger.error({ fn: 'metaMaskVersionGreaterThanOrEqualTo' }, error)
    return false
  }
}