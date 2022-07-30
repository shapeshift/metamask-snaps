import {
  BTCSignedMessage,
  BTCSignedTx,
  BTCSignMessage,
  BTCSignTx,
  BTCVerifyMessage,
} from '@shapeshiftoss/hdwallet-core'

import { logger } from '../lib/logger'

const moduleLogger = logger.child({ namespace: ['Snap', 'Bitcoin.ts'] })

export const btcGetAddress = async (): Promise<string> => {
  const ret = ''
  moduleLogger.debug({ fn: 'btcGetAddress' }, `Executed btcGetAddress().`)
  return ret
}

export const btcSignTransaction = async (transaction: BTCSignTx): Promise<BTCSignedTx> => {
  const ret: BTCSignedTx = {
    signatures: [''],
    serializedTx: '',
  }
  moduleLogger.debug(transaction, { fn: 'btcSignTransaction' }, `Executed btcSignTransaction().`)
  return ret
}

export const btcSignMessage = async (transaction: BTCSignMessage): Promise<BTCSignedMessage> => {
  const ret: BTCSignedMessage = { address: '', signature: '' }
  moduleLogger.debug(transaction, { fn: 'btcSignMessage' }, `Executed btcSignMessage().`)
  return ret
}

export const btcVerifyMessage = async (message: BTCVerifyMessage): Promise<boolean> => {
  const ret = false
  moduleLogger.debug(message, { fn: 'btcVerifyMessage' }, `Executed btcVerifyMessage().`)
  return ret
}
