/*
 * File: helper.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 14:05:25
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 14:05:28
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
const localStorageKey = 'und3fined.ory.admin-ui'

export function getLocalState() {
  let localData = localStorage.getItem(localStorageKey)
  if (localData) return JSON.parse(localData)
  return null
}

export function setLocalState({ auth }) {
  // NOTE: save access token only
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({ auth: { expiredAt: auth.expiredAt, accessToken: auth.accessToken } })
  )
}

export function sleep(timer) {
  return new Promise((resolve) => setTimeout(() => resolve(), timer))
}
