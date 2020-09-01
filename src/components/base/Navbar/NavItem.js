/*
 * File: NavItem.js
 * Project: ory-admin-ui
 * File Created: 31 Aug 2020 16:34:09
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 31 Aug 2020 16:34:12
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React, { useState } from 'react'
import classNames from 'classnames'
import { Box, Icon, Text } from '@chakra-ui/core'

function NavItem({ currentRoute, item, parent, isChild, redirect }) {
  let isItem = !item.child
  let pageLink = item.link
  let expandMenuDefault = currentRoute.data.currentPath.startsWith(item.link)
  let activeMenu = false
  if (!!parent) {
    pageLink = `${parent.link}${pageLink}`
    expandMenuDefault = false
  }

  activeMenu = currentRoute.data.currentPath === pageLink

  const [expandSubMenu, setExpandSubMenu] = useState(expandMenuDefault)

  let className = classNames({
    'nav-item': true,
    'nav-sub': isChild,
  })

  let menuClassName = classNames({
    'menu-item': true,
    expand: expandSubMenu,
  })

  let icon = <Icon name={item.icon || 'not-allowed'} size="28px" pr="8px" />
  if (item.icon && typeof item.icon !== 'string') {
    icon = <Icon as={item.icon} size="28px" pr="8px" />
  }

  let subMenu = null
  if (item.child) {
    let subMenus = item.child
    let classNameSubMenu = classNames({
      'sub-menu': true,
    })

    subMenu = (
      <Box
        as="ul"
        className={classNameSubMenu}
        bg="gray.900"
        h={!expandSubMenu ? 0 : ''}
        visibility={expandSubMenu ? 'visible' : 'hidden'}
      >
        {subMenus.map((menu) => {
          return (
            <NavItem
              key={`${item.name}-child-${menu.name}`}
              currentRoute={currentRoute}
              isChild={true}
              parent={item}
              item={menu}
              redirect={redirect}
            />
          )
        })}
      </Box>
    )
  }

  return (
    <>
      <Box
        as="li"
        display="block"
        className={className}
        mt="4px"
        mb="4px"
        pl={isChild ? '32px' : 0}
        bg={activeMenu ? 'blue.500' : ''}
      >
        <Box
          as="div"
          h="40px"
          lineHeight="40px"
          className={menuClassName}
          pl={[2, 3]}
          pr={[2, 3]}
          position="relative"
          onClick={() => (isItem ? redirect(pageLink) : setExpandSubMenu(!expandSubMenu))}
          rel={pageLink}
          cursor="pointer"
          userSelect="none"
        >
          {isChild ? '' : icon}
          <Text as="span" fontSize="sm">
            {item.name}
          </Text>
          {item.child ? (
            <Icon
              name={expandSubMenu ? 'chevron-down' : 'chevron-right'}
              size="16px"
              color="gray.300"
              position="absolute"
              right="12px"
              top="13px"
            />
          ) : (
            ''
          )}
        </Box>
        {subMenu}
      </Box>
    </>
  )
}

export default NavItem
