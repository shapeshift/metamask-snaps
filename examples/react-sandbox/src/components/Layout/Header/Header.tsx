import { Center, Flex, Image } from '@chakra-ui/react'

import { ConnectButton } from '../../ConnectButton/ConnectButton'

export const Header = () => {
  return (
    <Flex height='100%' width='100%' px='64px' flexDirection='row' justifyContent='space-between'>
      <Image></Image>
      <Center>
        <ConnectButton></ConnectButton>
      </Center>
    </Flex>
  )
}
