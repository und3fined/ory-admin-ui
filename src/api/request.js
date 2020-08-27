/*
 * File: request.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 21:37:23
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 21:45:20
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import axios from 'axios'

const baseAPIURL = process.env.BASE_API_URL || '/api'
const apiTimeout = parseInt(process.env.API_TIMEOUT, 10) || 30000
const request = axios.create({
  baseURL: baseAPIURL,
  timeout: apiTimeout,
  headers: { 'X-ORY-ADMIN-UI': 'und3fined.com' },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {}),
})

export default request
