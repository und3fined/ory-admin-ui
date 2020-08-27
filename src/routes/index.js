/*
 * File: routes.js
 * Project: ory-admin-ui
 * File Created: 25 Aug 2020 15:31:13
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 25 Aug 2020 16:10:25
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import { lazy, compose, mount, redirect } from 'navi'

import AuthHandler from '../helpers/auth-handler'
import InitialData from '../helpers/initial-data'

const config = mount({
  '/auth': lazy(() => import('./auth')),
  '/dashboard': lazy(() => import('./dashboard')),
  '/': redirect(`/auth/login?next=${encodeURIComponent('/dashboard')}`),
})

const routeConfig = []
routeConfig.push(InitialData)
routeConfig.push(AuthHandler)
routeConfig.push(config)

export default compose(...routeConfig)
