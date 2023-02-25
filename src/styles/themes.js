import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
      color: #000;
      background: #fff;
    }
    
    [data-theme='dark'],
    [data-theme='dark'] body {
      color: #fff;
      background: #000;
    }
`
