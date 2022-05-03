import '../styles/globals.css'
import type { AppProps } from 'next/app'

require('../mocks')

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
