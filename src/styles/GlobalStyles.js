import { Color } from '@/utils/color'
import { Consts } from '@/utils/consts'
import { createGlobalStyle } from 'styled-components'
import localFont from '@next/font/local'

export const NeueMachina = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMachina-Bold.woff',
      weight: '800',
    },
    {
      path: '../../public/fonts/NeueMachina-Bold.woff2',
      weight: '800',
    },
    {
      path: '../../public/fonts/NeueMachina-Regular.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/NeueMachina-Regular.woff2',
      weight: '400',
    },
  ],
})

export const GlobalStyle = createGlobalStyle`
    html::-webkit-scrollbar {
      width: 0.5vw;
    }
    html::-webkit-scrollbar-thumb {
      background-color: ${Color.CORAL};
      border-radius: 20px;
    }
    html::-webkit-scrollbar-track {
      background-color: ${Color.LIGHT};
    }

    body, html {
      color: ${Color.GREY};
      background: ${Color.WHITE};
      transition-property: background-color, color;
      transition-duration: ${Consts.toggleModDuration} ;

      scrollbar-width: normal;
      scrollbar-color: ${Color.GREY} ${Color.LIGHT};
    }
    
    [data-theme='dark'],
    [data-theme='dark'] body {
      color: ${Color.WHITE};
      background: ${Color.GREY};
      
      scrollbar-color: ${Color.LIGHT} ${Color.GREY};
    }

    :root {
      --link-hover: #909090;
    }
    
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    
    html,
    body {
      font-family: ${NeueMachina.style.fontFamily}, 'Inter';
      font-style: 400;
      line-height: 140%;
      color: ${Color.GREY}
    }
    
    a {
      color: inherit;
      text-decoration: underline;
    }
    
    a:hover {
      color: var(--link-hover);
    }
    
    .call-the-bats {
      animation-duration: 1.5s;
      animation-delay: 0.5s;
      animation-name: callTheBats;
      animation-timing-function: linear;
    }

    body{
      font-size: clamp(12px, 2.5vw, 16px);

    }
    
    @keyframes callTheBats {
      0% {
        scale: 1;
      }
    
      50% {
        rotate: 360deg;
        scale: 0.5;
        filter: blur(0.5rem);
      }
    
      100% {
        rotate: 720deg;
        scale: 1;
      }
    }
    
    .photo-power {
      animation-duration: 1.5s;
      animation-name: photoPower;
      animation-timing-function: linear;
    }
    
    @keyframes photoPower {
      0% {
        scale: 0.5;
      }
    
      100% {
        scale: 1.5;
      }
    }
    
@media (prefers-color-scheme: light) {
  html {
    color-scheme: light;
  }
}

`
