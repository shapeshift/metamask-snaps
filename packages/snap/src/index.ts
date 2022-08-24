/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
// import { OnRpcRequestHandler } from '@metamask/snap-types'

import { getMessage } from './message'
// import { binanceGetAddress, binanceSignTransaction } from './rpc/binance'
import { btcBroadcastTransaction } from './rpc/bitcoin'
import { bchBroadcastTransaction } from './rpc/bitcoincash'
// import {
//   bchGetAddress,
//   bchSignMessage,
//   bchSignTransaction,
//   bchVerifyMessage,
// } from './rpc/bitcoincash'
import { testFunction } from './rpc/common'
import { cosmosBroadcastTransaction } from './rpc/cosmos'
import { dogeBroadcastTransaction } from './rpc/dogecoin'
import { ethBroadcastTransaction } from './rpc/ethereum'
import { ltcBroadcastTransaction } from './rpc/litecoin'
// import { cosmosGetAddress, cosmosSignTransaction } from './rpc/cosmos'
// import {
//   dogeGetAddress,
//   dogeSignMessage,
//   dogeSignTransaction,
//   dogeVerifyMessage,
// } from './rpc/dogecoin'
// import { ethGetAddress, ethSignMessage, ethSignTransaction, ethVerifyMessage } from './rpc/ethereum'
// import { ltcGetAddress, ltcSignMessage, ltcSignTransaction, ltcVerifyMessage } from './rpc/litecoin'
// import { thorchainGetAddress, thorchainSignTransaction } from './rpc/thorchain'
import { MetaMaskRPCRequest } from './types'

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
  request: MetaMaskRPCRequest
}

export const onRpcRequest = async ({ origin, request }: RPCRequest) => {
  console.info('Activated onRPCRequest method.')
  switch (request.method) {
    case 'hello':
      // eslint-disable-next-line no-undef
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: getMessage(origin),
            description: 'This custom confirmation is just for display purposes.',
            textAreaContent:
              'But you can edit the snap source code to make it do something, if you want to!',
          },
        ],
      })
    case 'get_address':
      return testFunction()
    // case "bch_getAddress":
    //   return bchGetAddress(request.params.scriptType);
    // case "bch_signTransaction":
    //   return bchSignTransaction(request.params.transaction);
    // case "bch_signMessage":
    //   return bchSignMessage(request.params.message);
    // case "bch_verifyMessage":
    //   return bchVerifyMessage(request.params.message);
    // case "bch_broadcastTransaction":
    //   return bchBroadcastTransaction(request.params.transaction);
    // case "binance_getAddress":
    //   return binanceGetAddress();
    // case "binance_signTransaction":
    //   return binanceSignTransaction(request.params.transaction);
    // // case "binance_broadcastTransaction":
    // //   return binanceBroadcastTransaction(request.params.transaction);
    // case "btc_broadcastTransaction":
    //   return btcBroadcastTransaction(request.params.transaction);
    // case 'btc_getAddress':
    //   return btcGetAddress(request.params.scriptType)
    // case 'btc_signTransaction':
    //   return btcSignTransaction(request.params.transaction)
    // case 'btc_signMessage':
    //   return btcSignMessage(request.params.message)
    // case 'btc_verifyMessage':
    //   return btcVerifyMessage(request.params.message)
    // case "cosmos_getAddress":
    //   return cosmosGetAddress();
    // case "cosmos_signTransaction":
    //   return cosmosSignTransaction(request.params.transaction);
    // case "cosmos_broadcastTransaction":
    //   return cosmosBroadcastTransaction(request.params.transaction);
    // case "doge_getAddress":
    //   return dogeGetAddress(request.params.scriptType);
    // case "doge_signTransaction":
    //   return dogeSignTransaction(request.params.transaction);
    // case "doge_signMessage":
    //   return dogeSignMessage(request.params.message);
    // case "doge_verifyMessage":
    //   return dogeVerifyMessage(request.params.message);
    // case "doge_broadcastTransaction":
    //   return dogeBroadcastTransaction(request.params.transaction);
    // case "eth_getAddress":
    //   return ethGetAddress();
    // case "eth_signMessage":
    //   return ethSignMessage(request.params.message);
    // case "eth_signTransaction":
    //   return ethSignTransaction(request.params.transaction);
    // case "eth_verifyMessage":
    //   return ethVerifyMessage(request.params.message);
    // case "eth_broadcastTransaction":
    //   return ethBroadcastTransaction(request.params.transaction);
    // case "ltc_getAddress":
    //   return ltcGetAddress(request.params.scriptType);
    // case "ltc_signTransaction":
    //   return ltcSignTransaction(request.params.transaction);
    // case "ltc_signMessage":
    //   return ltcSignMessage(request.params.message);
    // case "ltc_verifyMessage":
    //   return ltcVerifyMessage(request.params.message);
    // case "ltc_broadcastTransaction":
    //   return ltcBroadcastTransaction(request.params.transaction);
    // case "thorchain_getAddress":
    //   return thorchainGetAddress();
    // case "thorchain_signTransaction":
    //   return thorchainSignTransaction(request.params.transaction);
    // // case 'thorchain_broadcastTransaction':
    // //   return thorchainBroadcastTransaction(request.params.transaction)

    default:
      throw new Error('Method not found.')
  }
}
