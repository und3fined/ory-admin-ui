/*
 * File: postcss.config.js
 * Project: ory-admin-ui
 * File Created: 27 Aug 2020 10:40:55
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 27 Aug 2020 10:42:37
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
module.exports = {
  plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
}
