/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import { OnRpcRequestHandler } from '@metamask/snap-types'
import { ShapeShiftSnapRPCRequest } from '@shapeshiftoss/metamask-snaps-types'

import {
  binanceBroadcastTransaction,
  binanceGetAddress,
  binanceSignTransaction,
} from './rpc/binance'
import {
  btcBroadcastTransaction,
  btcGetAddress,
  btcSignMessage,
  btcSignTransaction,
  btcVerifyMessage,
} from './rpc/bitcoin'
import {
  bchBroadcastTransaction,
  bchGetAddress,
  bchSignMessage,
  bchSignTransaction,
  bchVerifyMessage,
} from './rpc/bitcoincash'
import { testFunction } from './rpc/common'
import { cosmosBroadcastTransaction, cosmosGetAddress, cosmosSignTransaction } from './rpc/cosmos'
import {
  dogeBroadcastTransaction,
  dogeGetAddress,
  dogeSignMessage,
  dogeSignTransaction,
  dogeVerifyMessage,
} from './rpc/dogecoin'
import {
  ethBroadcastTransaction,
  ethGetAddress,
  ethSignMessage,
  ethSignTransaction,
  ethVerifyMessage,
} from './rpc/ethereum'
import { kavaBroadcastTransaction, kavaGetAddress, kavaSignTransaction } from './rpc/kava'
import {
  ltcBroadcastTransaction,
  ltcGetAddress,
  ltcSignMessage,
  ltcSignTransaction,
  ltcVerifyMessage,
} from './rpc/litecoin'
import {
  osmosisBroadcastTransaction,
  osmosisGetAddress,
  osmosisSignTransaction,
} from './rpc/osmosis'
import { secretBroadcastTransaction, secretGetAddress, secretSignTransaction } from './rpc/secret'
import { terraBroadcastTransaction, terraGetAddress, terraSignTransaction } from './rpc/terra'
import {
  thorchainBroadcastTransaction,
  thorchainGetAddress,
  thorchainSignTransaction,
} from './rpc/thorchain'

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
    case 'binance_getAddress':
      return await binanceGetAddress(params)
    case 'binance_signTransaction':
      return await binanceSignTransaction(params)
    case 'binance_broadcastTransaction':
      return await binanceBroadcastTransaction(params)
    case 'bch_getAddress':
      return await bchGetAddress(params)
    case 'bch_signTransaction':
      return await bchSignTransaction(params)
    case 'bch_signMessage':
      return await bchSignMessage(params)
    case 'bch_verifyMessage':
      return await bchVerifyMessage(params)
    case 'bch_broadcastTransaction':
      return await bchBroadcastTransaction(params)
    case 'btc_getAddress':
      return await btcGetAddress(params)
    case 'btc_signTransaction':
      return await btcSignTransaction(params)
    case 'btc_signMessage':
      return await btcSignMessage(params)
    case 'btc_verifyMessage':
      return await btcVerifyMessage(params)
    case 'btc_broadcastTransaction':
      return await btcBroadcastTransaction(params)
    case 'cosmos_getAddress':
      return await cosmosGetAddress(params)
    case 'cosmos_signTransaction':
      return await cosmosSignTransaction(params)
    case 'cosmos_broadcastTransaction':
      return await cosmosBroadcastTransaction(params)
    case 'doge_getAddress':
      return await dogeGetAddress(params)
    case 'doge_signTransaction':
      return await dogeSignTransaction(params)
    case 'doge_signMessage':
      return await dogeSignMessage(params)
    case 'doge_verifyMessage':
      return await dogeVerifyMessage(params)
    case 'doge_broadcastTransaction':
      return await dogeBroadcastTransaction(params)
    case 'eth_getAddress':
      return await ethGetAddress(params)
    case 'eth_signMessage':
      return await ethSignMessage(params)
    case 'eth_signTransaction':
      return await ethSignTransaction(params)
    case 'eth_verifyMessage':
      return await ethVerifyMessage(params)
    case 'eth_broadcastTransaction':
      return await ethBroadcastTransaction(params)
    case 'kava_getAddress':
      return await kavaGetAddress(params)
    case 'kava_signTransaction':
      return await kavaSignTransaction(params)
    case 'kava_broadcastTransaction':
      return await kavaBroadcastTransaction(params)
    case 'ltc_getAddress':
      return await ltcGetAddress(params)
    case 'ltc_signTransaction':
      return await ltcSignTransaction(params)
    case 'ltc_signMessage':
      return await ltcSignMessage(params)
    case 'ltc_verifyMessage':
      return await ltcVerifyMessage(params)
    case 'ltc_broadcastTransaction':
      return await ltcBroadcastTransaction(params)
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
    case 'ping':
      return await 'pong'
    case 'test':
      return await testFunction()

    default:
      throw new Error('Method not found.')
  }
}
