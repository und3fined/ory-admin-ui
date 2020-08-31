/*
 * File: prepair.js
 * Project: ory-admin-ui
 * File Created: 31 Aug 2020 11:33:32
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 31 Aug 2020 11:33:35
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { compose, withView, withTitle } from 'navi'
import Dimmer from '@/base/Dimmer'
import { Spinner } from '@chakra-ui/core'
import { page } from '@x/navi'
import sleep from 'utils/sleep'
import { getNextPage, generateNextPage } from 'utils/helper'

export default compose(
  withTitle('Admin UI prepairing...'),
  withView(
    <Dimmer active={true}>
      <Spinner label="Prepairing page..." />
    </Dimmer>
  ),
  page({
    initialData: async ({ request, context }) => {
      if (context.app.initialized === false) {
        await sleep(100)
      }

      let next = getNextPage(request.params, '/dashboard')

      if (
        !context.auth.isAuthenticated &&
        (!request.params.next || next.startsWith('/auth') === false)
      ) {
        next = `/auth/login?next=${generateNextPage(next)}`
      }

      // complete prepair
      context.app.setInitialized(true)

      return { redirect: next }
    },
  })
)
