import { Box, Center, Flex, Image, Spacer, Stack } from '@chakra-ui/react'

import { ConnectButton } from '../../ConnectButton/ConnectButton'

export const Header = () => {
  return (
    <Flex height='100%' width='100%' pr='48px' flexDirection='row' justifyContent='space-between'>
      <Box width={'200px'} pl='32px' height='100%'>
        <Stack direction={'row'} width='100%' height='100%' spacing='16px' marginX='auto'>
          <Image
            objectFit='scale-down'
            boxSize='100%'
            width='100%'
            height='50%'
            marginY='auto'
            src={require('../../../assets/shapeshift-fox-logo.png')}
          />

          <Image
            objectFit='contain'
            boxSize='100%'
            marginY='auto'
            src={require('../../../assets/shapeshift-text-logo.png')}
          />
        </Stack>
      </Box>
      <Spacer />
      <Center>
        <ConnectButton></ConnectButton>
      </Center>
    </Flex>
  )
}
