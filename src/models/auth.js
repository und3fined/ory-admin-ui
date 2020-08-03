/**
 * Auth
 */
import { types, getEnv } from 'mobx-state-tree'
import getUnixTime from 'date-fns/getUnixTime'

import { Request } from './request'
import { pingAPI } from '../api'

const requestName = {
  ping: 'ping',
  login: 'login',
  refreshToken: 'refresh_token',
}

export const Auth = types
  .model('auth', {
    id: types.identifier,
    name: types.string,
    access_token: types.string,
    refresh_token: types.string,
    expired: types.optional(types.number, 0),
  })
  .views((self) => {
    return {
      get isLogged() {
        return self.expired > getUnixTime(new Date())
      },
    }
  })
  .actions((self) => {
    return {
      ping: flow(function* () {
        if (getEnv(self).request.processing(requestName.ping)) {
          return
        }

        let req = Request.create({
          name: requestName.ping,
          state: 'ready',
          config: pingAPI(),
        })

        getEnv(self).request.add(req)

        yield req.exec()
      }),
    }
  })

export default AuthModel
