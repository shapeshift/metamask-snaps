// import { OnRpcRequestHandler } from '@metamask/snap-types'

import { getMessage } from './message'
import { btcGetAddress, btcSignMessage, btcSignTransaction, btcVerifyMessage } from './rpc/bitcoin'
import { testFunction } from './rpc/common'
// import { cosmosGetAddress, cosmosSignTransaction } from './rpc/cosmos'
// import { ethGetAddress, ethSignMessage, ethSignTransaction, ethVerifyMessage } from './rpc/ethereum'
import { MetaMaskRPCRequest } from './types'

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
  switch (request.method) {
    case 'hello':
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
    case 'btc_getAddress':
      return btcGetAddress(request.params.scriptType)
    case 'btc_signTransaction':
      return btcSignTransaction(request.params.transaction)
    case 'btc_signMessage':
      return btcSignMessage(request.params.message)
    case 'btc_verifyMessage':
      return btcVerifyMessage(request.params.message)
    // case 'cosmos_getAddress':
    //   return cosmosGetAddress()
    // case 'cosmos_signTransaction':
    //   return cosmosSignTransaction(request.params.transaction)
    // case 'eth_getAddress':
    //   return ethGetAddress()
    // case 'eth_signMessage':
    //   return ethSignMessage(request.params.message)
    // case 'eth_signTransaction':
    //   return ethSignTransaction(request.params.transaction)
    // case 'eth_verifyMessage':
    //   return ethVerifyMessage(request.params.message)

    default:
      throw new Error('Method not found.')
  }
}
