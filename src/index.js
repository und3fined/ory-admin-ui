/*
 * File: index.js
 * Project: ory-admin-ui
 * File Created: 25 Aug 2020 14:29:26
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 13:29:02
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { render } from 'react-dom'

import App from './App'
import { initialState, rehydrate } from './models/ory'

import './index.css'

const store = rehydrate(initialState)
const rootEl = document.getElementById('root')

function renderApp(App, store) {
  render(<App store={store} />, rootEl)
}

// initial render
renderApp(App, store)

// if (module.hot) {
//   module.hot.accept(['./models/ory'], () => {
//     // Store definition changed, recreate a new one from old state
//     renderApp(App, rehydrate(store, true))
//   })

//   module.hot.accept('./App', () => {
//     const NextApp = require('./App').default
//     renderApp(NextApp, store)
//   })
// }
