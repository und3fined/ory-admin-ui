/*
 * File: index.js
 * Project: ory-admin-ui
 * File Created: 31 Aug 2020 11:30:55
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 31 Aug 2020 11:31:02
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import { lazy, mount, redirect } from 'navi'

export default mount({
  '/prepair': lazy(() => import('./prepair')),
  '/auth': lazy(() => import('./auth')),
  '/dashboard': lazy(() => import('./dashboard')),
  '/users': lazy(() => import('./user')),
  '/about': lazy(() => import('./about')),
  '/': redirect('/prepair'),
})
