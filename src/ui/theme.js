import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'gray.900',
        color: 'white',
      },
    },
  },

  colors: {
    brand: {
      500: '#9b51e0',
    },
  },

  fonts: {
    heading: 'Be Vietnam Pro, sans-serif',
    body: 'Be Vietnam Pro, sans-serif',
  },

  components: {
    Progress: {
      baseStyle: {
        track: { bg: 'gray.200' },
        filledTrack: { bg: 'brand.500' },
      },
    },
  },
});

export default theme;
