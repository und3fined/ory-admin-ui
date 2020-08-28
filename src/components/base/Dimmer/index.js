/*
 * File: index.js
 * Project: ory-admin-ui
 * File Created: 27 Aug 2020 12:05:28
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 27 Aug 2020 12:05:34
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { Box } from '@chakra-ui/core'

export default ({ active = false, children }) => {
  if (active) {
    return (
      <Box
        bg="gray.200"
        pos="fixed"
        w="100%"
        h="100%"
        zIndex="9999"
        top="0"
        left="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
    )
  }

  return null
}
