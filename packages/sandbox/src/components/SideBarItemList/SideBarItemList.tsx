import { Box, Flex } from '@chakra-ui/react'

import { SideBarItem } from '../SideBarItem/SideBarItem'

export const SideBarItemList = () => {
  return (
    <Flex flexDirection='column' width='full' height='full'>
      <Box>
        <SideBarItem route='metamask-utils' text='MetaMask Utils'></SideBarItem>
        <SideBarItem route='chain-specific' text='Chain-Specific'></SideBarItem>
      </Box>
    </Flex>
  )
}
