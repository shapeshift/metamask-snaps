import '@fontsource/inter'
import '@fontsource/work-sans'

import { Box, ChakraProvider, Grid, GridItem } from '@chakra-ui/react'

import { ColorModeSwitcher } from './ColorModeSwitcher'
import { AssetCardList } from './components/AssetCardList/AssetCardList'
import { Header } from './components/Layout/Header/Header'
import { theme } from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign='center' fontSize='xl'>
      <Grid
        minH='100vh'
        p={4}
        templateAreas={`"header header" "nav main" "footer footer"`}
        gridTemplateRows={'72px 1fr 30px'}
        gridTemplateColumns={'300px 1fr'}
        h='200px'
        gap='1'
      >
        <GridItem pl='2' bg='orange.300' area={'header'}>
          <Header></Header>
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          Nav
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          Main
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
          <ColorModeSwitcher justifySelf='flex-end' />
        </GridItem>
        <GridItem area='main'>
          <AssetCardList></AssetCardList>
        </GridItem>
      </Grid>
    </Box>
  </ChakraProvider>
)
