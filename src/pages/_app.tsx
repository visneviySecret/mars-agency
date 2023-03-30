import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { GlobalStyle } from '@/styles/GlobalStyles'
import { reduxWrapper } from '@/redux/store'
import { Provider } from 'react-redux'
function App({ Component, ...rest }: AppProps) {
  const { store, props } = reduxWrapper.useWrappedStore(rest)
  const { pageProps } = props

  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light">
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
