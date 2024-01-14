import { extendTheme } from "@chakra-ui/react";

// include custom option in here, like collors, fonts ..

const customTheme = {
    components: {
        Text: {
            subtitle: {
                color: 'gray.500',
                fontWheight: 'semibold',
                fontSize: '14px',
            },
        },
    },
};

const theme = extendTheme(customTheme);

export default theme;