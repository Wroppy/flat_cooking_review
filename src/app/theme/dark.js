// Dark theme for the material ui components
// Made using https://bareynol.github.io/mui-theme-creator/

"use client"

import { createTheme } from "@mui/material";

const themeOptions = {
  palette: {
      mode: 'dark',
      primary: {
          main: '#0091d8',
          light: '#40a8de',
          contrastText: '#fff'
      },
      secondary: {
          main: '#292929',
          contrastText: '#fff'

      },
      error: {
          main: '#ff0004',
          contrastText: '#ff0004'

      },
      text: {
          primary: '#fff',
          secondary: '#fff',
          disabled: '#fff',
          hint: '#fff',
          icon: '#fff'
      },
      background: {
          default: '#202020',
          paper: '#1c1c1c',
          contrastText: '#fff'
      },
  },
  typography: {
      error:{
          color: '#ff0004',
      }
  }
};

const theme = createTheme(themeOptions)

export default theme;