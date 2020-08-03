/**
 * Root Store
 */
import { useContext, createContext } from 'react'
import { types, onSnapshot } from 'mobx-state-tree'

const RootModel = types.model({})

export const rootStore = RootModel.create({})

onSnapshot(rootStore, (snapshot) => console.log('Snapshot:', snapshot))

const RootStoreContext = createContext(RootModel)
export const Provider = RootStoreContext.Provider
export function useModel() {
  const store = useContext(RootStoreContext)

  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider')
  }

  return store
}
