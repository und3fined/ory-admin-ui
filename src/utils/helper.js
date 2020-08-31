/*
 * File: helper.js
 * Project: ory-admin-ui
 * File Created: 28 Aug 2020 15:51:38
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 28 Aug 2020 15:51:40
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */

export function getNextPage(params, nextDefault = '/dashboard') {
  return params.next ? decodeURIComponent(params.next) : decodeURIComponent(nextDefault)
}

export function generateNextPage(url) {
  return encodeURIComponent(url)
}
