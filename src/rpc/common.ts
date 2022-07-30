import { BIP44Node, getBIP44AddressKeyDeriver } from '@metamask/key-tree'
import { ChainId } from '@shapeshiftoss/caip'
import { Keyring } from '@shapeshiftoss/hdwallet-core'
import { NativeAdapter } from '@shapeshiftoss/hdwallet-native'

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

export const getHDWalletNativeSigner = async (wallet: any, chainId: ChainId) => {
  const node = await wallet.request({
    method: `snap_getBip44Entropy_${chainId.toString()}`,
  })

  try {
    const keyring = new Keyring()
    const nativeAdapter = NativeAdapter.useKeyring(keyring)
    await nativeAdapter.initialize()
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'getHDWalletNativeSigner' },
      `Failed to initialize HDWallet signer.`,
    )
  }
}
