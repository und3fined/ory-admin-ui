/*
 * File: prepairing.js
 * Project: ory-admin-ui
 * File Created: 28 Aug 2020 15:33:14
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 28 Aug 2020 15:34:23
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { Spinner } from '@chakra-ui/core'

import Dimmer from '@/base/Dimmer'

import { getNextPage, generateNextPage } from 'utils/helper'

export async function prepairingData({ request, context }) {
  let next = getNextPage(request.params)
  if (!context.auth.isAuthenticated) {
    next = `/auth/login?next=${generateNextPage(next)}`
  }
  return { redirect: next }
}

export default ({ request }) => {
  return (
    <Dimmer active={true}>
      <Spinner label={'Prepairing...'} />
    </Dimmer>
  )
}
