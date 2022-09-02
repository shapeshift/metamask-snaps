/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import { OnRpcRequestHandler } from '@metamask/snap-types'
import { ShapeShiftSnapRPCRequest } from '@shapeshiftoss/metamask-snaps-types'

import { binanceGetAddress, binanceSignTransaction } from './rpc/binance'
import { btcBroadcastTransaction, btcGetAddress, btcSignMessage, btcSignTransaction, btcVerifyMessage } from './rpc/bitcoin'
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
import { kavaGetAddress, kavaSignTransaction } from './rpc/kava'
import {
  ltcBroadcastTransaction,
  ltcGetAddress,
  ltcSignMessage,
  ltcSignTransaction,
  ltcVerifyMessage,
} from './rpc/litecoin'
import { osmosisBroadcastTransaction, osmosisGetAddress, osmosisSignTransaction } from './rpc/osmosis'
import { secretGetAddress, secretSignTransaction } from './rpc/secret'
import { terraGetAddress, terraSignTransaction } from './rpc/terra'
import { thorchainGetAddress, thorchainSignTransaction } from './rpc/thorchain'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

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
  switch (request.method) {
    case 'bch_getAddress':
      return bchGetAddress(request.params.params)
    case 'bch_signTransaction':
      return bchSignTransaction(request.params.transaction)
    case 'bch_signMessage':
      return bchSignMessage(request.params.message)
    case 'bch_verifyMessage':
      return bchVerifyMessage(request.params.message)
    case "bch_broadcastTransaction":
    return bchBroadcastTransaction(request.params.transaction);
    case 'binance_getAddress':
      return binanceGetAddress(request.params.params)
    case 'binance_signTransaction':
      return binanceSignTransaction(request.params.transaction)
    // case "binance_broadcastTransaction":
    //   return binanceBroadcastTransaction(request.params.transaction);
    case 'btc_getAddress':
      return btcGetAddress(request.params.params)
    case 'btc_signTransaction':
      return btcSignTransaction(request.params.transaction)
    case 'btc_signMessage':
      return btcSignMessage(request.params.message)
    case 'btc_verifyMessage':
      return btcVerifyMessage(request.params.message)
    case "btc_broadcastTransaction":
      return btcBroadcastTransaction(request.params.transaction);
    case 'cosmos_getAddress':
      return cosmosGetAddress(request.params.params)
    case 'cosmos_signTransaction':
      return cosmosSignTransaction(request.params.transaction)
    case "cosmos_broadcastTransaction":
      return cosmosBroadcastTransaction(request.params.transaction);
    case 'doge_getAddress':
      return dogeGetAddress(request.params.params)
    case 'doge_signTransaction':
      return dogeSignTransaction(request.params.transaction)
    case 'doge_signMessage':
      return dogeSignMessage(request.params.message)
    case 'doge_verifyMessage':
      return dogeVerifyMessage(request.params.message)
    case 'doge_broadcastTransaction':
      return dogeBroadcastTransaction(request.params.transaction)
    case 'eth_getAddress':
      return ethGetAddress(request.params.params)
    case 'eth_signMessage':
      return ethSignMessage(request.params.message)
    case 'eth_signTransaction':
      return ethSignTransaction(request.params.transaction)
    case 'eth_verifyMessage':
      return ethVerifyMessage(request.params.message)
    case "eth_broadcastTransaction":
      return ethBroadcastTransaction(request.params.transaction);
    case 'kava_getAddress':
      return kavaGetAddress(request.params.params)
    case 'kava_signTransaction':
      return kavaSignTransaction(request.params.transaction)
    // case "kava_broadcastTransaction":
    //   return kavaBroadcastTransaction(request.params.transaction);
    case 'ltc_getAddress':
      return ltcGetAddress(request.params.params)
    case 'ltc_signTransaction':
      return ltcSignTransaction(request.params.transaction)
    case 'ltc_signMessage':
      return ltcSignMessage(request.params.message)
    case 'ltc_verifyMessage':
      return ltcVerifyMessage(request.params.message)
    case 'ltc_broadcastTransaction':
      return ltcBroadcastTransaction(request.params.transaction)
    case 'osmosis_getAddress':
      return osmosisGetAddress(request.params.params)
    case 'osmosis_signTransaction':
      return osmosisSignTransaction(request.params.transaction)
    case "osmosis_broadcastTransaction":
      return osmosisBroadcastTransaction(request.params.transaction);
    case 'secret_getAddress':
      return secretGetAddress(request.params.params)
    case 'secret_signTransaction':
      return secretSignTransaction(request.params.transaction)
    // case "secret_broadcastTransaction":
    //   return secretBroadcastTransaction(request.params.transaction);
    case 'terra_getAddress':
      return terraGetAddress(request.params.params)
    case 'terra_signTransaction':
      return terraSignTransaction(request.params.transaction)
    // case "terra_broadcastTransaction":
    //   return terraBroadcastTransaction(request.params.transaction);
    case 'thorchain_getAddress':
      return thorchainGetAddress(request.params.params)
    case 'thorchain_signTransaction':
      return thorchainSignTransaction(request.params.transaction)
    // case 'thorchain_broadcastTransaction':
    //   return thorchainBroadcastTransaction(request.params.transaction)     
    case 'ping':
      return 'pong'
    case 'test':
      return testFunction()


    default:
      throw new Error('Method not found.')
  }
}
