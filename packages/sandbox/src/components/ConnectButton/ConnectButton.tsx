import { LockIcon, UnlockIcon } from '@chakra-ui/icons'
import { Button, Spinner, useToast } from '@chakra-ui/react'
import { enableShapeShiftSnap } from '@shapeshiftoss/metamask-snaps-adapter'
import { useState } from 'react'

import { logger } from '../../lib/logger'

const moduleLogger = logger.child({ namespace: ['ConnectButton'] })

const snapId = process.env.REACT_APP_SNAP_ID || 'local:http://localhost:9000'

export const ConnectButton = () => {
  const [snapIsConnected, setSnapIsConnected] = useState(false)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleConnect = async (): Promise<boolean> => {
    try {
      /** Prompt the user to allow the snap */
      setLoading(true)
      const response = await enableShapeShiftSnap(snapId)
      setLoading(false)

      if (response.message.errors) {
        moduleLogger.error(
          response.message.errors,
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
      setLoading(false)
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
          description: String(error),
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
      bg={loading ? '#FFFFFF' : snapIsConnected ? '#00CD98' : '#EF5350'}
      height='40px'
      leftIcon={loading ? undefined : snapIsConnected ? <LockIcon /> : <UnlockIcon />}
      onClick={async () => {
        setSnapIsConnected(await handleConnect())
      }}
      variant='solid'
      fontSize='md'
      minWidth='140px'
    >
      {loading ? <Spinner /> : snapIsConnected ? 'Connected' : 'Not Connected'}
    </Button>
  )
}
