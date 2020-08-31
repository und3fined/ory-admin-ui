/*
 * File: config-overrides.js
 * Project: ory-admin-ui
 * File Created: 27 Aug 2020 15:36:32
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 27 Aug 2020 15:36:37
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = function override(config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    '@/base': resolve('src/components/base'),
    '@/icons': resolve('src/components/icons'),
    '@/components': resolve('src/components'),
    '@/layouts': resolve('src/themes/layouts'),
    '@/themes': resolve('src/themes'),
    '@/pages': resolve('src/pages'),
    '@/routes': resolve('src/routes'),
    '@/models': resolve('src/models'),
    '@x': resolve('src/x'),
  })

  return config
}
