/*
 * File: api.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 21:33:07
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 21:35:15
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
const api = {}

function loadAPI(apis) {
  apis.keys().forEach((key) => {
    let apiKey = key.replace('./', '').replace('.api.js')
    api[apiKey] = apis[key]
  })
}

loadAPI(require.context(__dirname, false, /\.api\.js$/))

export default api
