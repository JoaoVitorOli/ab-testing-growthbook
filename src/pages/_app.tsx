import type { AppProps } from 'next/app'
import Growthbook from '../lib/Growthbook'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Growthbook>
      <Component {...pageProps} />
    </Growthbook>
  )
}

export default MyApp
