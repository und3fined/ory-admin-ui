/*
 * File: auth-handler.js
 * Project: ory-admin-ui
 * File Created: 25 Aug 2020 16:34:58
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 25 Aug 2020 16:35:03
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { redirect } from 'navi'
import { withView } from 'navi'
import { View, useCurrentRoute, useLoadingRoute } from 'react-navi'
import { Spinner } from '@chakra-ui/core'

import Dimmer from '@/base/Dimmer'

const AppHandler = ({ children, auth }) => {
  let route = useCurrentRoute()
  let loadingRoute = useLoadingRoute()

  let currentPath = route.url.pathname
  let isAuthPage = currentPath.startsWith('/auth')

  if (!auth.isAuthenticated && !isAuthPage) {
    let nextPage = encodeURIComponent(currentPath === '/' ? '/dashboard' : currentPath)
    return redirect(`/auth/login?next=${nextPage}`, { replace: true })
  }

  return (
    <>
      <Dimmer active={!!loadingRoute}>
        <Spinner label={'Prepairing...'} />
      </Dimmer>
      {children}
    </>
  )
}

export default withView((req, context) => (
  <AppHandler auth={context.auth}>
    <View />
  </AppHandler>
))
