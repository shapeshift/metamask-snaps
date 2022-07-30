import { Center, Flex } from '@chakra-ui/react'

import { SideBarItemList } from '../../SideBarItemList/SideBarItemList'
export const SideBar = () => {
  return (
    <Center width='full'>
      <Flex width='full' padding='14px'>
        <SideBarItemList></SideBarItemList>
      </Flex>
    </Center>
  )
}
