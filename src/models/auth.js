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
import { addSeconds, getUnixTime } from 'date-fns'

import { sleep } from './helper'

const AuthModel = types
  .model('Auth', {
    email: types.optional(types.string, 'ory@und3fined.com'),
    password: types.optional(types.string, 'und3fined'),
    expiredAt: types.number,
    accessToken: types.optional(types.string, ''),
    locked: types.optional(types.boolean, false),
    state: types.optional(types.enumeration('State', ['idle', 'running', 'end']), 'idle'),
    created: types.optional(types.boolean, false),
    messageType: types.optional(
      types.enumeration('State', ['error', 'success', 'warning', 'info']),
      'info'
    ),
    messageContent: types.optional(types.string, ''),
  })
  .views((self) => ({
    get isAuthenticated() {
      return self.expiredAt > getUnixTime(new Date())
    },
  }))
  .actions((self) => ({
    initial: flow(function* () {
      self.state = 'running'
      yield sleep(100)
      self.email = 'ory@und3fined.com'
      self.created = true
      self.state = 'end'
    }),

    login: flow(function* (email, password) {
      self.locked = true
      self.state = 'running'
      yield sleep(100)

      if (email !== 'ory@und3fined.com' || password !== 'und3fined') {
        self.messageType = 'error'
        self.messageContent = 'Credentials is invalid.'
        self.locked = false
      } else {
        self.expiredAt = getUnixTime(addSeconds(new Date(), 3600))
        self.accessToken = '231231231231284738jhsjfhsdjk'
        self.messageType = 'success'
        self.messageContent = 'Login is successful.'
      }
      self.state = 'end'
    }),

    logout: flow(function* () {
      self.locked = true
      self.state = 'running'
      yield sleep(100)

      self.expiredAt = -1
      self.accessToken = ''
      self.locked = false
      self.state = 'end'
    }),

    currentState() {
      let current = self.state
      self.state = 'idle'
      return current
    },
  }))

export default AuthModel
