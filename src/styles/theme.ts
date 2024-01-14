import { extendTheme } from "@chakra-ui/react";

// Inclua opções personalizadas aqui, como cores, fontes, etc.

const customTheme = {
  components: {
    Text: {
      subtitle: {
        color: 'gray.500',
        fontWeight: 'semibold', 
        fontSize: '14px',
      },
    },
  },
};

const theme = extendTheme(customTheme);

export default theme;
