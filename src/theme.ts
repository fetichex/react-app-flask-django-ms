import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      '#root, html, body': {
        h: '100vh',
        w: '100%'
      },
      '*::-webkit-scrollbar': {
        display: 'none',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        cursor: 'default',
      },
    },
  },
})

export default theme
