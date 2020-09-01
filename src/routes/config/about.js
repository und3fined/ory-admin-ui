/*
 * File: about.js
 * Project: ory-admin-ui
 * File Created: 01 Sep 2020 11:00:00
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 01 Sep 2020 11:00:03
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

export default compose(
  withView(() => (
    <AppLayout>
      <View />
    </AppLayout>
  )),
  mount({
    '/': page({
      info: {
        title: 'About',
      },
      getView: (request, context) => <OverviewPage request={request} store={context.store} />,
      initialData: async () => {
        // await sleep(20)
      },
    }),
  })
)
