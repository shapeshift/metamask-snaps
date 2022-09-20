import { ExternalProvider } from '@ethersproject/providers'
import { Coin } from '@shapeshiftoss/hdwallet-core'

import { logger } from './lib/logger'

const moduleLogger = logger.child({ namespace: ['Snap', 'Utils.ts'] })

// https://github.com/satoshilabs/slips/blob/master/slip-0044.md
const slip44AndCurveTable = Object.freeze({
  Bitcoin: { slip44: 0, curve: 'secp256k1' },
  Testnet: { slip44: 1, curve: 'secp256k1' },
  BitcoinCash: { slip44: 145, curve: 'secp256k1' },
  BitcoinGold: { slip44: 156, curve: 'secp256k1' },
  Litecoin: { slip44: 2, curve: 'secp256k1' },
  Dash: { slip44: 5, curve: 'secp256k1' },
  DigiByte: { slip44: 20, curve: 'secp256k1' },
  Dogecoin: { slip44: 3, curve: 'secp256k1' },
  BitcoinSV: { slip44: 236, curve: 'secp256k1' },
  Ethereum: { slip44: 60, curve: 'secp256k1' },
  Atom: { slip44: 118, curve: 'secp256k1' },
  Osmo: { slip44: 118, curve: 'secp256k1' },
  Binance: { slip44: 714, curve: 'secp256k1' },
  Ripple: { slip44: 144, curve: 'secp256k1' },
  Eos: { slip44: 194, curve: 'secp256k1' },
  Fio: { slip44: 235, curve: 'secp256k1' },
  Thorchain: { slip44: 931, curve: 'secp256k1' },
  Rune: { slip44: 931, curve: 'secp256k1' },
  Cardano: { slip44: 1815, curve: 'secp256k1' },
  Secret: { slip44: 529, curve: 'secp256k1' },
  Terra: { slip44: 330, curve: 'secp256k1' },
  Kava: { slip44: 459, curve: 'secp256k1' },
} as const)

type Curve = 'secp256k1' | 'ed25519'
type Slip44AndCurve<T> = {
  slip44: T extends keyof typeof slip44AndCurveTable ? number : undefined
  curve: Curve
}

type Slip44AndCurveByCoin<T> = T extends keyof typeof slip44AndCurveTable
  ? typeof slip44AndCurveTable[T]
  : Slip44AndCurve<T> | never

export const slip44AndCurveByCoin = <T extends Coin>(coin: T): Slip44AndCurveByCoin<T> => {
  return (slip44AndCurveTable as any)[coin]
}

const getMetaMaskProvider = async (): Promise<ExternalProvider> => {
  try {
    // eslint-disable-next-line no-undef
    const provider = window.ethereum
    if (!provider) {
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
    return isNewerVersion(current, version)
  } catch (error) {
    moduleLogger.error({ fn: 'metaMaskVersionGreaterThanOrEqualTo' }, error)
    return false
  }
}
