import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const styles = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: mode('gray.50', 'gray.800'),
        backgroundSize: 'cover',
      },
      html: {
        scrollBehavior: 'smooth',
        height: '100%',
      },
      h1: {
        fontSize: '4xl',
      },
      h2: {
        fontSize: '3xl',
      },
      h3: {
        fontSize: '2xl',
      },
      h4: {
        fontSize: 'xl',
      },
      h5: {
        fontSize: 'lg',
      },
      h6: {
        fontSize: 'sm',
      },
      '.scroll-container': {
        visibility: 'hidden',
        paddingRight: '12px',
        transition: 'visibility .5s ease-in-out',
      },
      '.scroll-container::-webkit-scrollbar': {
        background: 'transparent',
        width: '8px',
        height: '8px',
      },
      '.scroll-container::-webkit-scrollbar-thumb': {
        border: 'none',
        boxShadow: 'none',
        background: mode('blackAlpha.50', 'whiteAlpha.300'),
        borderRadius: '8px',
        minHeight: '40px',
      },
      '.scroll-container::-webkit-scrollbar-thumb:hover': {
        backgroundColor: mode('blackAlpha.800', 'whiteAlpha.800'),
      },
      '.scroll-container > div,.scroll-container:hover,.scroll-container:focus': {
        visibility: 'visible',
      },
    },
  },
})
