import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`
  html, body, div, span,
  h4, p, footer, header {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  footer, header, section {
    display: block;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
  box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 24px;
    height: 100vh;
    font-family: 'PT Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

ReactDOM.render(
  <React.Fragment>
    <App />, 
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('root')
)
