import type {
  OsmosisBroadcastTransactionParams,
  OsmosisBroadcastTransactionResponse,
  OsmosisGetAddressParams,
  OsmosisGetAddressResponse,
  OsmosisSignTransactionParams,
  OsmosisSignTransactionResponse,
} from '@shapeshiftoss/metamask-snaps-types'

import { logger } from '../../common/lib/logger'
import { OsmosisSigner } from './OsmosisSigner'

const moduleLogger = logger.child({
  namespace: ['Snap', 'RPC', 'OsmosisSDK', 'Osmosis', 'Handlers.ts'],
})

export const osmosisGetAddress = async (
  params: OsmosisGetAddressParams,
): Promise<OsmosisGetAddressResponse> => {
  try {
    const osmosisSigner = new OsmosisSigner()
    await osmosisSigner.initialize()
    return await osmosisSigner.getAddress(params)
  } catch (error) {
    moduleLogger.error({ fn: 'osmosisGetAddress' }, error)
    return Promise.reject(error)
  }
}

export const osmosisSignTransaction = async (
  params: OsmosisSignTransactionParams,
): Promise<OsmosisSignTransactionResponse> => {
  try {
    const osmosisSigner = new OsmosisSigner()
    await osmosisSigner.initialize()
    return await osmosisSigner.signTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'osmosisSignTransaction' }, error)
    return Promise.reject(error)
  }
}

export const osmosisBroadcastTransaction = async (
  params: OsmosisBroadcastTransactionParams,
): Promise<OsmosisBroadcastTransactionResponse> => {
  try {
    const osmosisSigner = new OsmosisSigner()
    await osmosisSigner.initialize({ broadcastUrl: params.baseUrl })
    return await osmosisSigner.broadcastTransaction(params)
  } catch (error) {
    moduleLogger.error({ fn: 'osmosisSignTransaction' }, error)
    return Promise.reject(error)
  }
}
