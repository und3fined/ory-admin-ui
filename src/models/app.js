/*
 * File: app.js
 * Project: ory-admin-ui
 * File Created: 28 Aug 2020 22:28:33
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 28 Aug 2020 22:28:36
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import { types, flow } from 'mobx-state-tree'

import { sleep } from './helper'

export default types
  .model('App', {
    language: types.optional(types.enumeration('Language', ['en-us', 'vi-vn']), 'en-us'),
    initialized: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setInitialized: (status) => {
      self.initialized = status
    },
    setLanguage: (lang) => {
      self.language = lang
    },
    logout: flow(function* () {
      let currentLanguage = self.language
      yield sleep(200)
      console.info('currentLanguage', currentLanguage)
    }),
  }))
