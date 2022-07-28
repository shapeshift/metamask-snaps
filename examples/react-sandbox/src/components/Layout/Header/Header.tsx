import { LockIcon, UnlockIcon } from '@chakra-ui/icons'
import { Button, Center, Flex, Image } from '@chakra-ui/react'
import { useState } from 'react'

const connect = async (): Promise<boolean> => {
  return false
}

export const Header = () => {
  const [snapIsConnected, setSnapIsConnected] = useState(false)
  return (
    <Flex height='100%' width='100%' px='64px' flexDirection='row' justifyContent='space-between'>
      <Image></Image>
      <Center>
        <Button
          bg={snapIsConnected ? '#00CD98' : '#EF5350'}
          height='40px'
          leftIcon={snapIsConnected ? <LockIcon /> : <UnlockIcon />}
          onClick={async () => {
            setSnapIsConnected(await connect())
          }}
          variant={snapIsConnected ? 'solid' : 'outline'}
        >
          {snapIsConnected ? 'Connected' : 'Not Connected'}
        </Button>
      </Center>
    </Flex>
  )
}
