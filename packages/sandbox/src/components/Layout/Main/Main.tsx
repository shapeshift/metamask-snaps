import { Center, Flex } from '@chakra-ui/react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AssetCardListConfig } from '../../AssetCardList/AssetCardListConfig'
import { CardList } from '../../CardList/CardList'
import { MetaMaskCardListConfig } from '../../MetaMaskCardList/MetaMaskCardListConfig'

export const Main = () => {
  return (
    <Center width='full'>
      <Flex
        width='full'
        paddingTop='24px'
        paddingBottom='24px'
        paddingLeft='48px'
        paddingRight='48px'
      >
        <Routes>
          <Route path='/' element={<Navigate to='metamask-utils' />} />
          <Route path='*' element={<Navigate to='metamask-utils' />} />
          <Route
            path='/chain-specific'
            element={<CardList cards={AssetCardListConfig}></CardList>}
          ></Route>
          <Route
            path='/metamask-utils'
            element={<CardList cards={MetaMaskCardListConfig}></CardList>}
          ></Route>
        </Routes>
      </Flex>
    </Center>
  )
}
