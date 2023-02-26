import { Consts } from '@/utils/consts'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body, html {
      color: #000;
      background: #fff;
      transition-property: background-color, color;
      transition-duration: ${Consts.toggleModDuration} ;
    }
    
    [data-theme='dark'],
    [data-theme='dark'] body {
      color: #fff;
      background: #000;
    }

`
