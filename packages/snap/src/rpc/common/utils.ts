import { ExternalProvider } from '@ethersproject/providers'
import { BIP44CoinTypeNode, SLIP10Node } from '@metamask/key-tree'
import { Coin, Keyring } from '@shapeshiftoss/hdwallet-core'
import { NativeAdapter, NativeHDWallet } from '@shapeshiftoss/hdwallet-native'
import { Node } from '@shapeshiftoss/hdwallet-native/dist/crypto/isolation/engines/default/bip32'
import { userConfirmParam } from '@shapeshiftoss/metamask-snaps-types'

import { logger } from './lib/logger'

const moduleLogger = logger.child({ namespace: ['Snap', 'Common', 'Utils.ts'] })

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
  : Slip44AndCurve<T> | undefined

export const slip44AndCurveByCoin = <T extends Coin>(coin: T): Slip44AndCurveByCoin<T> => {
  return (slip44AndCurveTable as any)[coin]
}

export const getHDWalletNativeSigner = async (coin: Coin): Promise<NativeHDWallet | null> => {
  const { slip44, curve } = slip44AndCurveByCoin(coin)
  if (!(typeof slip44 === 'number' && curve)) {
    throw new Error(`Coin type: '${coin}' is invalid or unsupported`)
  }

  const path = ['m', "44'", `${slip44}'`]
  const node:BIP44CoinTypeNode = await wallet.request({
    method: 'snap_getBip32Entropy',
    params: {
      path,
      curve,
    },
  })

  try {
    if (node.privateKey === undefined) {
      throw new Error('No private key provided in BIP44CoinTypeNode')
    }

    const slip10Node = await SLIP10Node.fromJSON(node) // node at depth 2
    const privateKey = slip10Node.privateKeyBuffer
    const chainCode = slip10Node.chainCodeBuffer
    const keyring = new Keyring()
    const nativeAdapter = NativeAdapter.useKeyring(keyring)
    await nativeAdapter.initialize()
    const wallet = await nativeAdapter.pairDevice('@shapeshiftoss/metamask-snaps')

    if (wallet === null) {
      throw new Error('Unable to pair ShapeShift Native signer')
    }

    const nativeNode = await Node.create(privateKey, chainCode, `m/44'/${slip44}'`)
    await wallet.loadDevice({ masterKey: nativeNode })
    return wallet
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'getHDWalletNativeSigner' },
      `Failed to initialize HDWallet signer.`,
    )
  }
  return null
}

export const userConfirm = async (params: userConfirmParam): Promise<boolean> => {
  /**
   * The text area content is limited to 1800 characters. If the transaction
   * contains more than 1800 characters, we need to display multiple
   * confirmation windows to the user.
   */
  const MAX_LENGTH = 1800
  const n = Math.ceil(JSON.stringify(params.textAreaContent, null, 2).length / MAX_LENGTH)
  const textAreaContent = n ? new Array(n) : undefined

  for (let i = 0, j = 0; i < n; i += 1, j += MAX_LENGTH) {
    try {
      if (textAreaContent) {
        const start = i * MAX_LENGTH
        /** Technically, this can put the value of 'end' past the end-of-string boundary for
         * textAreaContent[n-1], but the call to .substring() is safe and writing it this way
         * is cleaner and more readable than adding an explicit string length check. */
        const end = start + MAX_LENGTH
        textAreaContent[i] = params.textAreaContent.substring(start, end)
      }
      // eslint-disable-next-line no-undef, no-await-in-loop
      const ret = await wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: params.prompt,
            description: n > 1 ? `${params.description} (${i + 1} of ${n})` : params.description,
            textAreaContent: textAreaContent ? textAreaContent[i] : undefined,
          },
        ],
      })
      if (!ret) {
        return false
      }
    } catch (error) {
      moduleLogger.error(error, { fn: 'userConfirm' }, 'Could not display confirmation dialog')
      return false
    }
  }
  return true
}

const getMetaMaskProvider = async (): Promise<ExternalProvider> => {
  try {
    // eslint-disable-next-line no-undef
    const provider = (window as any).ethereum
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
