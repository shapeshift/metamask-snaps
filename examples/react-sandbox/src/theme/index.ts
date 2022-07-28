import { extendTheme } from '@chakra-ui/react'

import { config } from './config'
import { fonts } from './fonts'

export * from './config'
export * from './fonts'

export const theme = extendTheme({
  config,
  fonts,
})
