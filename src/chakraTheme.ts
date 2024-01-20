import { extendTheme } from '@chakra-ui/react'


const chakraTheme = extendTheme({
    fonts: {
        eduQLDBeginner: `'Edu QLD Beginner', 'cursive'`,
        dhurjati: `'Dhurjati', 'sans-serif'`,
        overpass: `'Overpass', 'sans-serif'`,
        heebo: `'Heebo', 'sans-serif'`,
    },
    colors: {
        ngDarkblue: '#1e292c',
        ngDarkerblue: '#080a24',
        ngDarkgreen: '#0a2619',
        ngGreenlight: '#b8f2d7',
        ngOffwhite: '#dedddc',
        ngGreenvid: '#000a06',
        ngCyan: '#72d7d7',
        ngCyanDarker: '#00a3a3'
    },
})

export default chakraTheme