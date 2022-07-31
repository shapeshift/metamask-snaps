import { LockIcon, UnlockIcon } from '@chakra-ui/icons'
import { Button, useToast } from '@chakra-ui/react'
import detectEthereumProvider from '@metamask/detect-provider'
import { useState } from 'react'

import { useProviderDispatch } from '../../hooks/useProviderDispatch/useProviderDispatch'
import { useProviderSelector } from '../../hooks/useProviderSelector/useProviderSelector'
import { logger } from '../../lib/logger'
import { setProvider } from '../../state/slices/providerSlice/providerSlice'
import { walletEnable } from '../../utils/common'

const moduleLogger = logger.child({ namespace: ['ConnectButton'] })

export const ConnectButton = () => {
  const [snapIsConnected, setSnapIsConnected] = useState(false)
  const dispatch = useProviderDispatch()
  let provider = useProviderSelector(state => state.provider.provider)
  const toast = useToast()

  const handleConnect = async (): Promise<boolean> => {
    try {
      /** Check for MetaMask if an entry does not already exist in state */
      if (Object.keys(provider).length === 0) {
        provider = await detectEthereumProvider()
        dispatch(setProvider(provider))
      }

      /** Make sure the user has MetaMask Flask installed */
      const isFlask = (await provider.request({ method: 'web3_clientVersion' }))?.includes('flask')
      if (!isFlask) {
        throw new Error('Please install MetaMask Flask!')
      }

      /** Prompt the user to allow the snap */
      const response = await walletEnable()

      if (response.errors) {
        moduleLogger.error(
          response.errors,
          { fn: 'handleConnect' },
          'MetaMask snap installation failed.',
        )
        toast({
          title: 'Error',
          description: 'MetaMask snap installation failed.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return false
      } else {
        moduleLogger.info(
          response,
          { fn: 'handleConnect' },
          'MetaMask snap installation successful!',
        )
        toast({
          title: 'Success',
          description: 'MetaMask snap installation successful!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        return true
      }
    } catch (error) {
      if ((error as any).code === 4001) {
        moduleLogger.error(error, { fn: 'handleConnect' }, 'The user rejected the request.')
        toast({
          title: 'Error',
          description: 'The user rejected the request.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      } else {
        moduleLogger.error(
          error,
          { fn: 'handleConnect' },
          'MetaMask provider wallet_enable call failed.',
        )
        toast({
          title: 'Error',
          description: 'MetaMask provider wallet_enable call failed.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
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
      variant='solid'
      fontSize='md'
    >
      {snapIsConnected ? 'Connected' : 'Not Connected'}
    </Button>
  )
}
