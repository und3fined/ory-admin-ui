/*
 * File: ory.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 14:01:10
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 14:01:20
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import { createContext, useContext } from 'react'
import { types, destroy, getSnapshot, onSnapshot } from 'mobx-state-tree'
import { getLocalState, setLocalState } from './helper'

// models
import Api from './api'
import Auth from './auth'

export const OryStoreContext = createContext()
const initialState = getLocalState() || { auth: { expiredAt: -1 } }

const Provider = OryStoreContext.Provider
const OryStore = types.model('OryStore', {
  api: types.optional(Api, {}),
  auth: Auth,
})

let store
let snapshotListener

function rehydrate(snapshot, oldState = false) {
  // clean up snapshot listener
  if (snapshotListener) snapshotListener()
  if (store) destroy(store)

  // create new  store
  store = OryStore.create(oldState ? getSnapshot(snapshot) : snapshot)

  // connect local storage
  snapshotListener = onSnapshot(store, (snapshot) => setLocalState(snapshot))

  return store
}

function useOryStore() {
  const store = useContext(OryStoreContext)
  if (store === null) {
    throw new Error('OryStore cannot be null, please add a context provider')
  }

  return store
}

export { Provider, initialState, rehydrate, useOryStore }
