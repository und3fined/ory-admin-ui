/*
 * File: auth.js
 * Project: ory-admin-ui
 * File Created: 25 Aug 2020 17:13:25
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 25 Aug 2020 17:13:30
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { compose, withView, route, mount } from 'navi'
import { View } from 'react-navi'

import AuthLayout from '@/layouts/auth'
import LoginPage from 'pages/auth/login'

export default compose(
  withView(() => {
    return (
      <AuthLayout>
        <View />
      </AuthLayout>
    )
  }),
  mount({
    '/login': route({
      title: 'Login 2',
      getData: async (request, context) => {
        // await context.auth.loadInfo()
      },
      getView: (request, context) => <LoginPage auth={context.auth} />,
    }),
    '/forgot': route({
      title: 'Forgot credentials',
      getView: () => <div>Forgot page</div>,
    }),
  })
)
