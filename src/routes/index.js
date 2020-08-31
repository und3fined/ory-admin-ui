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
import { withContext } from 'navi'

import AppRoutes from './routes'

export default withContext(
  (req, context) => ({
    oryRoot: req.mountpath || '/',
    ...context,
  }),
  AppRoutes
)
