import { BIP44CoinTypeNode, getBIP44AddressKeyDeriver } from '@metamask/key-tree'
import { ASSET_REFERENCE } from '@shapeshiftoss/caip'
import { Keyring } from '@shapeshiftoss/hdwallet-core'
import { crypto, NativeAdapter, NativeHDWallet } from '@shapeshiftoss/hdwallet-native'

import { logger } from '../lib/logger'

const moduleLogger = logger.child({ namespace: ['Snap', 'Common.ts'] })

export const testFunction = (): string => {
  return 'work'
}

export const getAddress = async (wallet: any, params: any): Promise<string> => {
  const node = await wallet.request({
    method: `snap_getBip44Entropy_${params.chainId.toString()}`,
  })

  const deriveAddressAtPath = await getBIP44AddressKeyDeriver(node)

  const { address } = await deriveAddressAtPath(params.derivationPath)
  return address
}

export const getHDWalletNativeSigner = async (coinType: string): Promise<NativeHDWallet | null> => {
  /**
   * TODO: Use CAIP library types instead of string for coinType parameter.
   */
  const chainCode = ASSET_REFERENCE[coinType as keyof typeof ASSET_REFERENCE]
  if (chainCode === undefined) {
    throw new Error(`Coin type: '${coinType}' is invalid or unsupported`)
  }
  const node: BIP44CoinTypeNode = (await wallet.request({
    method: `snap_getBip44Entropy_${chainCode}`,
  })) as BIP44CoinTypeNode

  try {
    if (node.privateKeyBuffer === undefined) {
      throw new Error('No private key provided in BIP44CoinTypeNode')
    }
    const keyring = new Keyring()
    const nativeAdapter = NativeAdapter.useKeyring(keyring)
    await nativeAdapter.initialize()
    const wallet = await nativeAdapter.pairDevice('@shapeshiftoss/metamask-snaps')
    if (wallet === null) {
      throw new Error('Unable to pair ShapeShift Native signer')
    }
    const nativeNode = await crypto.Isolation.Engines.Default.BIP32.Node.create(
      node.privateKeyBuffer,
      node.chainCodeBuffer,
    )
    wallet.loadDevice({ deviceId: '@shapeshiftoss/metamask-snaps', masterKey: nativeNode })
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
