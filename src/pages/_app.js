/**
 * OryApp
 */
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import defaultTheme from 'themes/chakra'
import 'themes/global.css'

export default function OryApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
