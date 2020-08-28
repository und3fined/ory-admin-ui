/*
 * File: route.js
 * Project: ory-admin-ui
 * File Created: 28 Aug 2020 13:43:02
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 28 Aug 2020 13:43:06
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import { route, map, redirect } from 'navi'

export default ({ initialData, ...naviOpts }) => {
  return map(async (request, context) => {
    let result = {}
    if (typeof initialData === 'function') {
      result = await initialData({ request, context })
      if (result && !!result.redirect) return redirect(result.redirect)
    }

    naviOpts.getState = () => ({ ...naviOpts.state, ...result })
    return route(naviOpts)
  })
}
