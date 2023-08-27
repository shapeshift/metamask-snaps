/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import { OnRpcRequestHandler } from '@metamask/snap-types'
import { ShapeShiftSnapRPCRequest } from '@shapeshiftoss/metamask-snaps-types'

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
  avalancheSignMessage,
  avalancheSignTransaction,
  avalancheVerifyMessage,
} from './rpc/evm/avalanche'
import {
  ethereumBroadcastTransaction,
  ethereumGetAddress,
  ethereumSignMessage,
  ethereumSignTransaction,
  ethereumVerifyMessage,
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
  bitcoincashSignTransaction,
} from './rpc/utxo/bitcoincash'
import {
  dogecoinBroadcastTransaction,
  dogecoinGetAddress,
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

export const onRpcRequest: OnRpcRequestHandler = async ({ request }) => {
  const { method, params } = request
  switch (method) {
    case 'avax_getAddress':
      return await avalancheGetAddress(params)
    case 'avax_signMessage':
      return await avalancheSignMessage(params)
    case 'avax_signTransaction':
      return await avalancheSignTransaction(params)
    case 'avax_verifyMessage':
      return await avalancheVerifyMessage(params)
    case 'avax_broadcastTransaction':
      return await ethereumBroadcastTransaction(params)
    case 'binance_getAddress':
      return await binanceGetAddress(params)
    case 'binance_signTransaction':
      return await binanceSignTransaction(params)
    case 'binance_broadcastTransaction':
      return await binanceBroadcastTransaction(params)
    case 'bch_getAddress':
      return await bitcoincashGetAddress(params)
    case 'bch_signTransaction':
      return await bitcoincashSignTransaction(params)
    case 'bch_broadcastTransaction':
      return await bitcoincashBroadcastTransaction(params)
    case 'btc_getAddress':
      return await bitcoinGetAddress(params)
    case 'btc_getPublicKeys':
      return await bitcoinGetPublicKeys(params)
    case 'btc_signTransaction':
      return await bitcoinSignTransaction(params)
    case 'btc_broadcastTransaction':
      return await bitcoinBroadcastTransaction(params)
    case 'cosmos_getAddress':
      return await cosmosGetAddress(params)
    case 'cosmos_signTransaction':
      return await cosmosSignTransaction(params)
    case 'cosmos_broadcastTransaction':
      return await cosmosBroadcastTransaction(params)
    case 'doge_getAddress':
      return await dogecoinGetAddress(params)
    case 'doge_signTransaction':
      return await dogecoinSignTransaction(params)
    case 'doge_broadcastTransaction':
      return await dogecoinBroadcastTransaction(params)
    case 'eth_getAddress':
      return await ethereumGetAddress(params)
    case 'eth_signMessage':
      return await ethereumSignMessage(params)
    case 'eth_signTransaction':
      return await ethereumSignTransaction(params)
    case 'eth_verifyMessage':
      return await ethereumVerifyMessage(params)
    case 'eth_broadcastTransaction':
      return await ethereumBroadcastTransaction(params)
    case 'kava_getAddress':
      return await kavaGetAddress(params)
    case 'kava_signTransaction':
      return await kavaSignTransaction(params)
    case 'kava_broadcastTransaction':
      return await kavaBroadcastTransaction(params)
    case 'ltc_getAddress':
      return await litecoinGetAddress(params)
    case 'ltc_getPublicKeys':
      return await litecoinGetPublicKeys(params)
    case 'ltc_signTransaction':
      return await litecoinSignTransaction(params)
    case 'ltc_broadcastTransaction':
      return await litecoinBroadcastTransaction(params)
    case 'osmosis_getAddress':
      return await osmosisGetAddress(params)
    case 'osmosis_signTransaction':
      return await osmosisSignTransaction(params)
    case 'osmosis_broadcastTransaction':
      return await osmosisBroadcastTransaction(params)
    case 'secret_getAddress':
      return await secretGetAddress(params)
    case 'secret_signTransaction':
      return await secretSignTransaction(params)
    case 'secret_broadcastTransaction':
      return await secretBroadcastTransaction(params)
    case 'terra_getAddress':
      return await terraGetAddress(params)
    case 'terra_signTransaction':
      return await terraSignTransaction(params)
    case 'terra_broadcastTransaction':
      return await terraBroadcastTransaction(params)
    case 'thorchain_getAddress':
      return await thorchainGetAddress(params)
    case 'thorchain_signTransaction':
      return await thorchainSignTransaction(params)
    case 'thorchain_broadcastTransaction':
      return await thorchainBroadcastTransaction(params)
    default:
      throw new Error('Method not found.')
  }
}
