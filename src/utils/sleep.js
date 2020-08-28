/*
 * File: sleep.js
 * Project: ory-admin-ui
 * File Created: 28 Aug 2020 09:21:14
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 28 Aug 2020 09:21:18
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
export default function sleep(timer) {
  return new Promise((resolve) => setTimeout(() => resolve(), timer))
}
