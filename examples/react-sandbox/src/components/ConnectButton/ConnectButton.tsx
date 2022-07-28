import { LockIcon, UnlockIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import detectEthereumProvider from '@metamask/detect-provider'
import { useState } from 'react'

import { useProviderDispatch } from '../../hooks/useProviderDispatch/useProviderDispatch'
import { useProviderSelector } from '../../hooks/useProviderSelector/useProviderSelector'
import { logger } from '../../lib/logger'
import { setProvider } from '../../state/slices/providerSlice/providerSlice'

const moduleLogger = logger.child({ namespace: ['ConnectButton'] })

export const ConnectButton = () => {
  const [snapIsConnected, setSnapIsConnected] = useState(false)
  const dispatch = useProviderDispatch()
  let provider = useProviderSelector(state => state.provider.provider)

  const handleConnect = async (): Promise<boolean> => {
    try {
      if (Object.keys(provider).length === 0) {
        provider = await detectEthereumProvider()
        dispatch(setProvider(provider))
      }

      const response = await provider?.request({
        method: 'wallet_enable',
        params: [
          {
            wallet_snap: {
              'npm:@shapeshiftoss/metamask-snaps': {
                version: '^0.7.0',
              },
            },
          },
        ],
      })
      moduleLogger.info(
        response,
        { fn: 'handleConnect' },
        'Response from MetaMask provider wallet_enable call',
      )
      return !!response
    } catch (error) {
      moduleLogger.error(
        error,
        { fn: 'handleConnect' },
        'MetaMask provider wallet_enable call failed.',
      )
      return false
    }
  }

  return (
    <Button
      bg={snapIsConnected ? '#00CD98' : '#EF5350'}
      height='40px'
      leftIcon={snapIsConnected ? <LockIcon /> : <UnlockIcon />}
      onClick={async () => {
        setSnapIsConnected(await handleConnect())
      }}
      variant={snapIsConnected ? 'solid' : 'outline'}
    >
      {snapIsConnected ? 'Connected' : 'Not Connected'}
    </Button>
  )
}
