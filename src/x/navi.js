/*
 * File: navi.js
 * Project: ory-admin-ui
 * File Created: 31 Aug 2020 10:52:36
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 31 Aug 2020 10:52:49
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
/*
 * File: page.js
 * Project: ory-admin-ui
 * File Created: 28 Aug 2020 21:59:11
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 31 Aug 2020 10:10:58
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { route as naviRoute, redirect, map } from 'navi'

export function page({ getView, info, ...others }) {
  const getData = (req, context) => {
    let data = { ...info }

    if (!data.htmlTitle) {
      data.htmlTitle = data.title + ' – Ory Admin UI'
    }

    if (!data.navTitle) {
      data.navTitle = data.title
    }

    if (!data.blurb) {
      data.blurb = data.description
    }
    if (data.blurb && !React.isValidElement(data.blurb)) {
      data.blurb = <p>{data.blurb}</p>
    }

    if (data.description) {
      data.metaDescription = data.description
    }

    return data
  }

  const getTitle = (req, context) => getData(req, context).htmlTitle

  const getViewDetail = getView

  return route({
    getData,
    getTitle,
    getView: getViewDetail,
    ...others,
  })
}

export function route({ initialData, ...naviOpts }) {
  return map(async (request, context) => {
    let curPath = request.mountpath

    // initial for first request to Admin UI
    if (context.app.initialized === false && curPath.startsWith('/prepair') === false) {
      let nextPage = encodeURIComponent(`${curPath}${request.search || ''}`)
      return redirect('/prepair?next=' + nextPage)
    }

    // initial data for request to this page
    let result = {}
    if (typeof initialData === 'function') {
      result = await initialData({ request, context })
      if (result && !!result.redirect) return redirect(result.redirect)
    }

    naviOpts.getState = () => ({ ...naviOpts.state, ...result })
    return naviRoute(naviOpts)
  })
}
