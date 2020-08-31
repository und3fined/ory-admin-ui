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
import { View } from 'react-navi'

import { generateNextPage } from 'utils/helper'

export default withView((request, context) => {
  let currentPath = request.originalUrl
  let isAuthPage = currentPath.startsWith('/auth')

  if (!context.auth.isAuthenticated && !isAuthPage) {
    let nextPage = generateNextPage(currentPath === '/' ? '/dashboard' : currentPath)
    return redirect(`/auth/login?next=${nextPage}`, { replace: true })
  }

  return <View />
})
