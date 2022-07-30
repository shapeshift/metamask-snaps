import '@fontsource/inter'
import '@fontsource/work-sans'

import { Box, Center, ChakraProvider, Grid, GridItem } from '@chakra-ui/react'

import { ColorModeSwitcher } from './ColorModeSwitcher'
import { AssetCardListConfig } from './components/AssetCardList/AssetCardListConfig'
import { CardList } from './components/CardList/CardList'
import { Header } from './components/Layout/Header/Header'
import { theme } from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign='center' fontSize='xl'>
      <Grid
        minH='100vh'
        templateAreas={`"header header" "nav main" "footer footer"`}
        gridTemplateRows={'72px 1fr 30px'}
        gridTemplateColumns={'300px 1fr'}
        h='200px'
        gap='0.5'
      >
        <GridItem pl='2' bg='#181C27' borderWidth='1' borderColor='#FFFFFF' area={'header'}>
          <Header></Header>
        </GridItem>
        <GridItem pl='2' bg='#181C27' borderWidth='1' borderColor='#FFFFFF' area={'nav'}>
          Nav
        </GridItem>
        <GridItem pl='2' bg='#181C27' borderWidth='1' borderColor='#FFFFFF' area={'main'}>
          Main
        </GridItem>
        <GridItem pl='2' bg='#181C27' borderWidth='1' borderColor='#FFFFFF' area={'footer'}>
          Footer
          <ColorModeSwitcher justifySelf='flex-end' />
        </GridItem>
        <GridItem area='main'>
          <Center width='100%'>
            <CardList cards={AssetCardListConfig}></CardList>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  </ChakraProvider>
)
