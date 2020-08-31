/*
 * File: Routes.js
 * Project: ory-admin-ui
 * File Created: 28 Aug 2020 23:03:46
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 28 Aug 2020 23:06:44
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { View, useLoadingRoute } from 'react-navi'
import { observer } from 'mobx-react-lite'
import Dimmer from '@/base/Dimmer'
import { Spinner } from '@chakra-ui/core'

export default observer(({ app, currentPath }) => {
  let isLoading = !!useLoadingRoute(true)

  return (
    <>
      <Dimmer active={isLoading}>
        <Spinner />
      </Dimmer>
      <View />
    </>
  )
})
