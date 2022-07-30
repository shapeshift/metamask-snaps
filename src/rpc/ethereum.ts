import {
  ETHSignedMessage,
  ETHSignedTx,
  ETHSignMessage,
  ETHSignTx,
  ETHVerifyMessage,
} from '@shapeshiftoss/hdwallet-core'

import { logger } from '../lib/logger'

const moduleLogger = logger.child({ namespace: ['Snap', 'Ethereum.ts'] })

export const ethGetAddress = async (): Promise<string> => {
  const ret = ''
  moduleLogger.debug({ fn: 'ethGetAddress' }, `Executed ethGetAddress().`)
  return ret
}

export const ethSignTransaction = async (transaction: ETHSignTx): Promise<ETHSignedTx> => {
  const ret: ETHSignedTx = {
    v: 0,
    r: '',
    s: '',
    serialized: '',
  }
  moduleLogger.debug(transaction, { fn: 'ethSignTransaction' }, `Executed ethSignTransaction().`)
  return ret
}

export const ethSignMessage = async (message: ETHSignMessage): Promise<ETHSignedMessage> => {
  const ret: ETHSignedMessage = {
    address: '',
    signature: '',
  }
  moduleLogger.debug(message, { fn: 'ethSignMessage' }, `Executed ethSignMessage().`)
  return ret
}

export const ethVerifyMessage = async (message: ETHVerifyMessage): Promise<boolean> => {
  moduleLogger.debug(message, { fn: 'ethVerifyMessage' }, `Executed ethVerifyMessage().`)
  return false
}
