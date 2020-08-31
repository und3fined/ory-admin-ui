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
import React from 'react'
import { join } from 'path'
import { withView, withData, compose } from 'navi'
import Routes from './utils/Routes'
import config from './config'

export default compose(
  withData(async (req, { app, oryRoot }) => {
    let currentPath = join(oryRoot, req.path)
    // prefetch language
    let language = app.language

    return { language, currentPath }
  }),
  withView(async (req, { oryRoot, auth, app }) => (
    <Routes
      app={app}
      isAuthenticated={auth.isAuthenticated}
      repositoryRoot={oryRoot || ''}
      rootPathname={req.mountpath || '/'}
      currentPath={join(oryRoot, req.path)}
    />
  )),
  config
)
