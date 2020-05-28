import React from 'react'
import { Header, Breadcrumb } from './utils'
import { createGlobalStyle } from 'styled-components'
import { Product } from './pages'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700,800&display=swap');
  //colors
  $black: #424243;
  $red: #fc3f4e;
  $white: #ffffff;

  html, body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #e5e5e5;
    color: $black;
    letter-spacing: -0.015rem;
  }
`

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Breadcrumb />
      <Product />
    </>
  )
}
