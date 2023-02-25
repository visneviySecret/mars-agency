import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { GlobalStyle } from '@/styles/themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
