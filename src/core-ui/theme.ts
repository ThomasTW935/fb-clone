import { DefaultTheme } from 'styled-components'

const hue = 210
const sat = 5

export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
  device: {
    sm: '425px',
    md: '768px',
    lg: '1024px',
  },
  palette: {
    common: {
      black: '#222831',
      white: '#fff',
      grey: {
        lighter: `hsl(${hue}, ${sat}%, 90%)`,
        light: `hsl(${hue}, ${sat}%, 75%)`,
        normal: `hsl(${hue}, ${sat}%, 60%)`,
        dark: `hsl(${hue}, ${sat}%, 40%)`,
        darker: `hsl(${hue}, ${sat}%, 20%)`,
      },
    },
    primary: {
      main: '#1877F2',
      shadow: '#0c5eca',
      text: '#fff',
    },
    // secondary: {

    // }
  },
}
