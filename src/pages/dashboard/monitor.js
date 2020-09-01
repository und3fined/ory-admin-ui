/*
 * File: overview.js
 * Project: ory-admin-ui
 * File Created: 27 Aug 2020 23:38:19
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 27 Aug 2020 23:38:57
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'

export default ({ auth }) => (
  <div>
    Monitor <button onClick={() => auth.logout()}>Logout</button>
  </div>
)
