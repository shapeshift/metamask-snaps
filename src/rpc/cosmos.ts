import { CosmosSignedTx, CosmosSignTx } from '@shapeshiftoss/hdwallet-core'

import { logger } from '../lib/logger'

const moduleLogger = logger.child({ namespace: ['Snap', 'Cosmos.ts'] })

export const cosmosGetAddress = async (): Promise<string> => {
  const ret = ''
  moduleLogger.debug({ fn: 'cosmosGetAddress' }, `Executed cosmosGetAddress().`)
  return ret
}

export const cosmosSignTransaction = async (transaction: CosmosSignTx): Promise<CosmosSignedTx> => {
  const ret: CosmosSignedTx = {
    serialized: '',
    body: '',
    authInfoBytes: '',
    signatures: [''],
  }
  moduleLogger.debug(transaction, { fn: 'cosmosSignTransaction' }, `Executed btcSignTx().`)
  return ret
}
