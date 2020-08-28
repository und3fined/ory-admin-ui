/*
 * File: index.js
 * Project: ory-admin-ui
 * File Created: 28 Aug 2020 10:37:32
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 28 Aug 2020 10:37:45
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import { mount, lazy, redirect } from 'navi'

export default mount({
  '/auth': lazy(() => import('./auth')),
  '/dashboard': lazy(() => import('./dashboard')),
  '/': redirect(`/auth/prepair?next=${encodeURIComponent('/dashboard')}`),
})
