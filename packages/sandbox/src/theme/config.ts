import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const darkConfig: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const config = extendTheme(darkConfig)
