// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme with new layer styles
export const theme = extendTheme({
  layerStyles: {
    base: {
      bg: 'gray.50',
      border: '2px solid',
      borderColor: 'gray.500',
    },
    selected: {
      bg: 'teal.500',
      color: 'teal.700',
      borderColor: 'orange.500',
    },
  },
})
