/*
 * File: bound.js
 * Project: ory-admin-ui
 * File Created: 25 Aug 2020 15:59:48
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 25 Aug 2020 15:59:54
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react';
import { NotFoundBoundary } from 'react-navi';

export default ({ children }) => (
  <NotFoundBoundary render={() => <div>Page not found</div>}>
    {children}
  </NotFoundBoundary>
);