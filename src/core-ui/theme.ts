import {DefaultTheme} from 'styled-components'

export const defaultTheme:DefaultTheme = {
  borderRadius: "4px",
  boxShadow: "rgba(0,0,0,0.2)",
  device:{
    sm: "425px",
    md: "768px",
    lg: "1024px"
  },
  palette:{
    common: {
      black: "#222831",
      white: "#fff",
      grey: {
        light: "hsl(216, 20%, 95%)",
        normal: "hsl(216, 20%, 90%)",
        dark: "hsl(216, 20%, 85%)",
        darker: "hsl(216, 20%, 50%)"
      }
    },
    primary: {
      main: "#1877F2",
      text: "#fff"
    },
    // secondary: {

    // }
  }
}