/*
 * File: index.js
 * Project: ory-admin-ui
 * File Created: 31 Aug 2020 16:19:30
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 31 Aug 2020 16:19:32
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import NavItem from './NavItem'
import { RiDashboard3Line, RiUser3Fill, RiMacLine, RiInformationFill } from 'react-icons/ri'
import { useCurrentRoute, useNavigation } from 'react-navi'

const config = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: RiDashboard3Line,
    redirectTo: '/dashboard/overview',
    permission: ['dashboard', 'dashboard-overview', 'dashboard-monitor'],
    child: [
      {
        name: 'Overview',
        link: '/overview',
        permission: ['dashboard/overview'],
      },
      {
        name: 'Monitor',
        link: '/monitor',
        permission: ['dashboard/monitor'],
      },
    ],
  },
  {
    name: 'Users',
    link: '/users',
    icon: RiUser3Fill,
    permission: ['users', 'user-add', 'user-edit', 'user-delete'],
    redirectTo: '/users/list',
    child: [
      {
        name: 'List user',
        link: '/list',
        permission: ['users/list', 'user-add', 'user-delete', 'user-delete'],
      },
      {
        name: 'Active user',
        link: '/active',
        permission: ['users/active'],
      },
      {
        name: 'Trash',
        link: '/trash',
        permission: ['users/trash', 'user-restore', 'users-empty-trash'],
      },
    ],
  },
  {
    name: 'Client',
    link: '/clients',
    icon: RiMacLine,
    permission: ['clients', 'client-add', 'client-edit', 'client-delete'],
    redirectTo: '/clients/list',
    child: [
      {
        name: 'List',
        link: '/list',
        permission: ['clients/list', 'client-add', 'client-add', 'client-edit', 'client-delete'],
      },
      {
        name: 'Trash',
        link: '/trash',
        permission: ['clients/trash', 'client-restore', 'clients-empty-trash'],
      },
    ],
  },
  {
    name: 'About',
    icon: RiInformationFill,
    link: '/about',
  },
]

export default () => {
  let currentRoute = useCurrentRoute()
  let navigation = useNavigation()

  function redirect(to) {
    console.log('To', to)

    if (to !== currentRoute.data.currentPath) {
      navigation.navigate(to)
    }
  }

  return (
    <ul className="und3fined-menu und3fined-sider-menu" role="menu" w="100%">
      {config.map((item) => {
        return (
          <NavItem
            key={`menu-${item.link}`}
            item={item}
            currentRoute={currentRoute}
            redirect={redirect}
          />
        )
      })}
    </ul>
  )
}
