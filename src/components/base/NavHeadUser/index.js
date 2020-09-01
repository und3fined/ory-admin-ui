/*
 * File: index.js
 * Project: ory-admin-ui
 * File Created: 01 Sep 2020 11:31:02
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 01 Sep 2020 11:31:23
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Button,
} from '@chakra-ui/core'

export default () => (
  <Menu>
    <MenuButton as={Button} rightIcon="chevron-down">
      Actions
    </MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem as="a" href="#">
        Attend a Workshop
      </MenuItem>
    </MenuList>
  </Menu>
)
