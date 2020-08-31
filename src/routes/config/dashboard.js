/*
 * File: dashboard.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 19:06:35
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 19:06:55
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { compose, withView, mount } from 'navi'
import { View } from 'react-navi'
import { page } from '@x/navi'

import AppLayout from '@/layouts/app'
import OverviewPage from '@/pages/dashboard/overview'
import sleep from 'utils/sleep'

export default compose(
  withView(() => (
    <AppLayout>
      <View />
    </AppLayout>
  )),
  mount({
    '/': page({
      title: 'Dashboard.',
      getView: (request, context) => <OverviewPage request={request} store={context.store} />,
      initialData: async () => {
        await sleep(200)
      },
    }),
  })
)
