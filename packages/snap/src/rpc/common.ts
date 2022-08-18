import { BIP44CoinTypeNode, getBIP44AddressKeyDeriver } from '@metamask/key-tree'
// import { ASSET_REFERENCE } from '@shapeshiftoss/caip'
import { Keyring, slip44ByCoin } from '@shapeshiftoss/hdwallet-core'
import { crypto, NativeAdapter, NativeHDWallet } from '@shapeshiftoss/hdwallet-native'

// import { logger } from '../lib/logger'

// const moduleLogger = logger.child({ namespace: ['Snap', 'Common.ts'] })

// const slip44Table = Object.freeze({
//   Bitcoin: 0,
//   Testnet: 1,
//   BitcoinCash: 145,
//   BitcoinGold: 156,
//   Litecoin: 2,
//   Dash: 5,
//   DigiByte: 20,
//   Dogecoin: 3,
//   BitcoinSV: 236,
//   Ethereum: 60,
//   Atom: 118,
//   Osmo: 118,
//   Binance: 714,
//   Ripple: 144,
//   Eos: 194,
//   Fio: 235,
//   Thorchain: 931,
//   Rune: 931,
//   Cardano: 1815,
//   Secret: 529,
//   Terra: 330,
//   Kava: 459,
// } as const)
// type Slip44ByCoin<T> = T extends keyof typeof slip44Table
//   ? typeof slip44Table[T]
//   : number | undefined
// export function slip44ByCoin<T extends Coin>(coin: T): Slip44ByCoin<T> {
//   return (slip44Table as any)[coin]
// }

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
  // export const getHDWalletNativeSigner = async (coinType: string): Promise<any> => {
  /**
   * TODO: Use CAIP library types instead of string for coinType parameter.
   */
  // const chainCode = ASSET_REFERENCE[coinType as keyof typeof ASSET_REFERENCE]
  const chainCode = slip44ByCoin(coinType)
  if (chainCode === undefined) {
    throw new Error(`Coin type: '${coinType}' is invalid or unsupported`)
  }

  const node: BIP44CoinTypeNode = (await wallet.request({
    method: `snap_getBip44Entropy_${chainCode}`,
    params: [],
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
    wallet.loadDevice({ masterKey: nativeNode })
    return wallet
    // return true
  } catch (error) {
    // moduleLogger.error(
    //   error,
    //   { fn: 'getHDWalletNativeSigner' },
    //   `Failed to initialize HDWallet signer.`,
    // )
    console.error('dang')
  }
  return null
}
