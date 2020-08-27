/*
 * File: auth.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 15:27:08
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 15:27:13
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { useCurrentRoute } from 'react-navi'

import { Flex, Box, Heading } from '@chakra-ui/core'

export default function AuthLayout({ children }) {
  const route = useCurrentRoute()

  return (
    <Flex
      height="100vh"
      width="100vw"
      bg="gray.100"
      flexDirection={'column'}
      align="center"
      justify="center"
    >
      <Box w="sm" verticalAlign="middle">
        <Heading as="h3" size="md" color="teal.500" textAlign="center" pb="12px">
          Ory Admin UI - {route.title}
        </Heading>
        <Flex justify="left">{children}</Flex>
      </Box>
    </Flex>
  )
}
