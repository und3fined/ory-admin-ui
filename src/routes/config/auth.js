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

import { page } from '@x/navi'

import AuthLayout from '@/layouts/auth'
import LoginPage from '@/pages/auth/login'
import RegisterPage from '@/pages/auth/register'
import ForgotPage from '@/pages/auth/forgot'
import ResetPage, { initialData } from '@/pages/auth/reset'

function validateAuth({ request, context }) {}

export default compose(
  withView((request, context) => {
    return (
      <AuthLayout request={request} context={context}>
        <View />
      </AuthLayout>
    )
  }),
  withData(async (request, { app, auth }) => {
    if (app.initialized && auth.created === false && auth.state === 'idle') {
      await auth.initial()
    }
  }),
  mount({
    '/login': page({
      info: {
        title: 'Login',
        description: 'Please login for access to system',
      },
      getView: (req, { auth }) => <LoginPage request={req} auth={auth} />,
      initialData: validateAuth,
    }),
    '/register': page({
      info: {
        title: 'Register',
        description: 'Create a new customer',
      },
      getView: (req, { auth }) => <RegisterPage request={req} auth={auth} />,
      initialData: validateAuth,
    }),
    '/forgot': page({
      info: {
        title: 'Forgot credentials',
      },
      getView: (req, { auth }) => <ForgotPage request={req} auth={auth} />,
      initialData: validateAuth,
    }),
    '/reset': page({
      info: {
        title: 'Reset credentials',
      },
      getView: (req, { auth }) => <ResetPage request={req} auth={auth} />,
      initialData: initialData,
    }),
  })
)
