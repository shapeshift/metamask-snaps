import '@fontsource/inter'
import '@fontsource/work-sans'

import { Box, ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

// import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Footer } from './components/Layout/Footer/Footer'
import { Header } from './components/Layout/Header/Header'
import { Main } from './components/Layout/Main/Main'
import { SideBar } from './components/Layout/SideBar/SideBar'
import { theme } from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
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
            <SideBar></SideBar>
          </GridItem>
          <GridItem
            pl='2'
            bg='#181C27'
            borderWidth='1'
            borderColor='#FFFFFF'
            area={'main'}
          ></GridItem>
          <GridItem pl='2' bg='#181C27' borderWidth='1' borderColor='#FFFFFF' area={'footer'}>
            <Footer></Footer>
            {/* <ColorModeSwitcher justifySelf='flex-end' /> */}
          </GridItem>
          <GridItem area='main'>
            <Main></Main>
          </GridItem>
        </Grid>
      </Box>
    </BrowserRouter>
  </ChakraProvider>
)
