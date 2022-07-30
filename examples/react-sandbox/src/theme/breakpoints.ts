import { extendTheme } from '@chakra-ui/react'

export const breakpoints = extendTheme({
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1440px',
  },
})
