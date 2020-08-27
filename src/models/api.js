/*
 * File: api.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 21:53:36
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 21:54:04
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import axios from 'axios'
import { types, flow } from 'mobx-state-tree'

const CancelToken = axios.CancelToken

const baseAPIURL = process.env.BASE_API_URL || '/api'
const apiTimeout = parseInt(process.env.API_TIMEOUT, 10) || 30000
const request = axios.create({
  baseURL: baseAPIURL,
  timeout: apiTimeout,
  headers: { 'X-ORY-ADMIN-UI': 'und3fined.com' },
})

const RequestModel = types
  .model('RequestModel', {
    id: types.identifier,
    method: types.string,
    url: types.string,
    state: types.enumeration('state', ['idle', 'running', 'success', 'error', 'cancel']),
  })
  .actions((self) => {
    return {
      exec: flow(function* (config) {
        self.source = CancelToken.source()
        config.cancelToken = self.source.token

        let result
        try {
          self.state = 'running'
          result = yield request(config)
          self.state = 'success'
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log('Request canceled', err.message)
            self.state = 'cancel'
          } else {
            self.state = 'error'
          }
        }

        return result
      }),
      cancel: (reson = 'No reson') => {
        self.source.cancel(reson)
      },
    }
  })

const ApiModel = types
  .model('ApiModel', {
    requests: types.array(RequestModel),
  })
  .actions((self) => {
    function afterCreate() {}

    function beforeDestroy() {
      self.requests.filter((req) => req.state === 'running').map((req) => req.cancel())
    }

    function request(...args) {
      if (args.length === 1 && typeof args[0] === 'object') {
        let { method, url, persist, force, ...config } = args[0]
        let request = RequestModel.create({ method, url, state: 'idle' })
        if (persist && exists(request) && !force) {
          console.warn(`[WARING] duplicate request. URL: ${method.toUpperCase()} ${url}`)
          return
        }

        return request.exec(config)
      } else {
        let [method, url, data, headers] = args
        let request = RequestModel.create({ method, url, state: 'idle' })
        return request.exec({ method, url, data, headers })
      }
    }

    function exists(request) {
      return !!self.requests.filter(
        (req) => req.method === request.method && req.url === request.url
      )[0]
    }

    return {
      afterCreate,
      beforeDestroy,
      request,
    }
  })

export default ApiModel
