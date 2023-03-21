import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { reduxWrapper } from '@/redux/store'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default reduxWrapper.withRedux(App)
