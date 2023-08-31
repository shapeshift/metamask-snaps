/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import type { OnRpcRequestHandler } from '@metamask/snap-types'
import type { ShapeShiftSnapRPCRequest } from '@shapeshiftoss/metamask-snaps-types'

import {
  binanceBroadcastTransaction,
  binanceGetAddress,
  binanceSignTransaction,
} from './rpc/cosmossdk/binance'
import {
  cosmosBroadcastTransaction,
  cosmosGetAddress,
  cosmosSignTransaction,
} from './rpc/cosmossdk/cosmos'
import { kavaBroadcastTransaction, kavaGetAddress, kavaSignTransaction } from './rpc/cosmossdk/kava'
import {
  osmosisBroadcastTransaction,
  osmosisGetAddress,
  osmosisSignTransaction,
} from './rpc/cosmossdk/osmosis'
import {
  secretBroadcastTransaction,
  secretGetAddress,
  secretSignTransaction,
} from './rpc/cosmossdk/secret'
import {
  terraBroadcastTransaction,
  terraGetAddress,
  terraSignTransaction,
} from './rpc/cosmossdk/terra'
import {
  thorchainBroadcastTransaction,
  thorchainGetAddress,
  thorchainSignTransaction,
} from './rpc/cosmossdk/thorchain'
import {
  avalancheGetAddress,
  avalancheSendTransaction,
  avalancheSignMessage,
} from './rpc/evm/avalanche'
import {
  ethereumGetAddress,
  ethereumSendTransaction,
  ethereumSignMessage,
} from './rpc/evm/ethereum'
import {
  bitcoinBroadcastTransaction,
  bitcoinGetAddress,
  bitcoinGetPublicKeys,
  bitcoinSignTransaction,
} from './rpc/utxo/bitcoin'
import {
  bitcoincashBroadcastTransaction,
  bitcoincashGetAddress,
  bitcoincashGetPublicKeys,
  bitcoincashSignTransaction,
} from './rpc/utxo/bitcoincash'
import {
  dogecoinBroadcastTransaction,
  dogecoinGetAddress,
  dogecoinGetPublicKeys,
  dogecoinSignTransaction,
} from './rpc/utxo/dogecoin'
import {
  litecoinBroadcastTransaction,
  litecoinGetAddress,
  litecoinGetPublicKeys,
  litecoinSignTransaction,
} from './rpc/utxo/litecoin'

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns `null` if the request succeeded.
 * @throws If the request method is not valid for this snap.
 * @throws If the `snap_confirm` call failed.
 */

interface RPCRequest {
  origin: string
  request: ShapeShiftSnapRPCRequest
}

export const onRpcRequest: OnRpcRequestHandler = async ({ request, origin }: RPCRequest) => {
  const { method, params } = request
  switch (method) {
    case 'avax_getAddress':
      return await avalancheGetAddress(params)
    case 'avax_signMessage':
      return await avalancheSignMessage({ origin, ...params })
    case 'avax_sendTransaction':
      return await avalancheSendTransaction({ origin, ...params })
    case 'binance_getAddress':
      return await binanceGetAddress(params)
    case 'binance_signTransaction':
      return await binanceSignTransaction({ origin, ...params })
    case 'binance_broadcastTransaction':
      return await binanceBroadcastTransaction({ origin, ...params })
    case 'bch_getAddress':
      return await bitcoincashGetAddress(params)
    case 'bch_getPublicKeys':
      return await bitcoincashGetPublicKeys(params)
    case 'bch_signTransaction':
      return await bitcoincashSignTransaction({ origin, ...params })
    case 'bch_broadcastTransaction':
      return await bitcoincashBroadcastTransaction({ origin, ...params })
    case 'btc_getAddress':
      return await bitcoinGetAddress(params)
    case 'btc_getPublicKeys':
      return await bitcoinGetPublicKeys(params)
    case 'btc_signTransaction':
      return await bitcoinSignTransaction({ origin, ...params })
    case 'btc_broadcastTransaction':
      return await bitcoinBroadcastTransaction({ origin, ...params })
    case 'cosmos_getAddress':
      return await cosmosGetAddress(params)
    case 'cosmos_signTransaction':
      return await cosmosSignTransaction({ origin, ...params })
    case 'cosmos_broadcastTransaction':
      return await cosmosBroadcastTransaction({ origin, ...params })
    case 'doge_getAddress':
      return await dogecoinGetAddress(params)
    case 'doge_getPublicKeys':
      return await dogecoinGetPublicKeys(params)
    case 'doge_signTransaction':
      return await dogecoinSignTransaction({ origin, ...params })
    case 'doge_broadcastTransaction':
      return await dogecoinBroadcastTransaction({ origin, ...params })
    case 'eth_getAddress':
      return await ethereumGetAddress(params)
    case 'eth_signMessage':
      return await ethereumSignMessage({ origin, ...params })
    case 'eth_sendTransaction':
      return await ethereumSendTransaction({ origin, ...params })
    case 'kava_getAddress':
      return await kavaGetAddress(params)
    case 'kava_signTransaction':
      return await kavaSignTransaction({ origin, ...params })
    case 'kava_broadcastTransaction':
      return await kavaBroadcastTransaction({ origin, ...params })
    case 'ltc_getAddress':
      return await litecoinGetAddress(params)
    case 'ltc_getPublicKeys':
      return await litecoinGetPublicKeys(params)
    case 'ltc_signTransaction':
      return await litecoinSignTransaction({ origin, ...params })
    case 'ltc_broadcastTransaction':
      return await litecoinBroadcastTransaction({ origin, ...params })
    case 'osmosis_getAddress':
      return await osmosisGetAddress(params)
    case 'osmosis_signTransaction':
      return await osmosisSignTransaction({ origin, ...params })
    case 'osmosis_broadcastTransaction':
      return await osmosisBroadcastTransaction({ origin, ...params })
    case 'secret_getAddress':
      return await secretGetAddress(params)
    case 'secret_signTransaction':
      return await secretSignTransaction({ origin, ...params })
    case 'secret_broadcastTransaction':
      return await secretBroadcastTransaction({ origin, ...params })
    case 'terra_getAddress':
      return await terraGetAddress(params)
    case 'terra_signTransaction':
      return await terraSignTransaction({ origin, ...params })
    case 'terra_broadcastTransaction':
      return await terraBroadcastTransaction({ origin, ...params })
    case 'thorchain_getAddress':
      return await thorchainGetAddress(params)
    case 'thorchain_signTransaction':
      return await thorchainSignTransaction({ origin, ...params })
    case 'thorchain_broadcastTransaction':
      return await thorchainBroadcastTransaction({ origin, ...params })
    default:
      throw new Error('Method not found.')
  }
}
