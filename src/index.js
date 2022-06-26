import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { ThemeProvider } from 'styled-components'

let theme = createTheme()
theme = responsiveFontSizes(theme)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById('root')
)
