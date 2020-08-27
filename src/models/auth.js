/*
 * File: auth.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 14:30:16
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 14:30:20
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import { types, flow } from 'mobx-state-tree'
import { sleep } from './helper'

const AuthModel = types
  .model('Auth', {
    email: types.optional(types.string, 'ory@und3fined.com'),
    password: types.optional(types.string, 'und3fined'),
    expiredAt: types.number,
    accessToken: types.optional(types.string, ''),
    locked: types.optional(types.boolean, false),
    state: types.optional(types.enumeration('State', ['idle', 'running', 'end']), 'idle'),
  })
  .views((self) => ({
    get isAuthenicated() {
      return self.expiredAt > new Date().getTime()
    },
  }))
  .views((self) => ({}))
  .actions((self) => {
    return {
      login: flow(function* (email, password) {
        self.locked = true
        self.state = 'running'
        console.info('Start login...', email, password)
        yield sleep(2000)

        self.expiredAt = new Date().getTime() + 30000
        self.locked = false
        self.state = 'end'
      }),

      loadInfo: flow(function* () {
        yield sleep(1000)
        self.email = 'info@und3fined.com'
      }),

      currentState() {
        let current = self.state
        self.state = 'idle'
        return current
      },
    }
  })

export default AuthModel
