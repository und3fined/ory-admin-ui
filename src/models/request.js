/**
 * Request model
 */
import { types, flow } from 'mobx-state-tree'
import api from '../api'

function mutations(self) {
  return {
    processing(name) {
      return self.requests.filter((req) => req.name === name).filter((req) => req.processing)
    },
  }
}

function actions(self) {
  return {
    add(request) {
      self.requests.push(request)
    },
  }
}

const Request = types
  .model('request', {
    id: types.identifier,
    name: types.string,
    state: types.enumeration('state', [
      'ready',
      'running',
      'failed',
      'successful',
      'cancel',
      'idle',
    ]),
    config: types.map({}),
    response: types.optional(types.map, {}),
  })
  .views((self) => {
    return {
      get processing() {
        return ['running'].includes(self.state)
      },
    }
  })
  .actions((self) => {
    return {
      exec: flow(function* () {
        if (self.state !== 'ready') {
          console.warn(self.id, 'request is not ready...')
          return
        }

        self.state = 'running'
        try {
          self.response = yield api(config)
          self.state = 'successful'
        } catch (error) {
          self.response = error
          self.state = 'failed'
        }

        return self.response
      }),
    }
  })

const RequestStore = types.model('request_store', {
  requests: types.map(Request),
})

RequestStore.views((self) => mutations(self))
RequestStore.actions((self) => actions(self))

export { Request }
export default RequestStore
