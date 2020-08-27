/*
 * File: App.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 13:26:16
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 13:26:30
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React, { Suspense } from 'react'
import { Router, View } from 'react-navi'
import HelmetProvider from 'react-navi-helmet-async'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import oryTheme from '@/themes/config'

import routes from '@/routes'

function App({ store }) {
  return (
    // <StrictMode>
    <ThemeProvider theme={oryTheme}>
      <CSSReset />
      <HelmetProvider>
        <Router routes={routes} context={{ store, auth: store.auth }}>
          <Suspense fallback={null}>
            <View />
          </Suspense>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
    // </StrictMode>
  )
}

export default App
