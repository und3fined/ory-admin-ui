/*
 * File: initial-data.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 23:45:58
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 23:46:03
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import { withData } from 'navi'
import { sleep } from '../models/helper'

export default withData(async (req, ctx) => {
  await sleep(200)
})
