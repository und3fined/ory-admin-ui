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
import { compose, withView, withData, mount } from 'navi'
import { View } from 'react-navi'

import route from '@/routes/utils/route'
import AuthLayout from '@/layouts/auth'
import LoginPage from '@/pages/auth/login'
import PrepairingPage, { prepairingData } from '@/pages/auth/prepairing'

export default compose(
  withView((request, context) => (
    <AuthLayout request={request} context={context}>
      <View />
    </AuthLayout>
  )),
  withData(async (request, context) => {
    if (context.auth.created === false && context.auth.state === 'idle') {
      await context.auth.initial('auth')
    }
  }),
  mount({
    '/prepair': route({
      title: 'Prepairing...',
      getView: (request, context) => (
        <PrepairingPage request={request} context={context} auth={context.auth} />
      ),
      initialData: prepairingData,
    }),
    '/login': route({
      title: 'Login',
      getView: (request, context) => <LoginPage request={request} auth={context.auth} />,
    }),
    '/forgot': route({
      title: 'Forgot credentials',
      getView: () => <div>Forgot page</div>,
    }),
  })
)
