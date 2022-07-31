import { logger } from '../lib/logger'
import { store } from '../state/store'

const moduleLogger = logger.child({ namespace: ['utils', 'common.ts'] })

/**
 * Retrieve provider object from Redux store
 */

export const getProvider = (): any => {
  try {
    const state = store.getState()
    if (Object.keys(state).length === 0) {
      throw new Error()
    }
    return state.provider.provider
  } catch (error) {
    moduleLogger.error(
      error,
      { fn: 'getProvider' },
      `MetaMask provider unavailable. Click 'Connect' in the upper right corner and try again.`,
    )
  }
}
