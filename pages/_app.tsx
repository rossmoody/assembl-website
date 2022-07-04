import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import GoogleAnalytics from '../components/GoogleAnalytics'
import ThemeProvider from '../providers/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GoogleAnalytics />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}

export default MyApp
