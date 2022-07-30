import { extendTheme } from '@chakra-ui/react'

// import { breakpoints } from './breakpoints'
import { colors } from './colors'
import { config } from './config'
import { fonts } from './fonts'
import { styles } from './styles'

export * from './config'
export * from './fonts'

export const theme = extendTheme({
  //   breakpoints,
  colors,
  styles,
  config,
  fonts,
})
