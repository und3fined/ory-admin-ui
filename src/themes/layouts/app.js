/*
 * File: app.js
 * Project: ory-admin-ui
 * File Created: 27 Aug 2020 23:29:11
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 27 Aug 2020 23:29:20
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React from 'react'
import { Flex, Box, Stack, Heading, Icon } from '@chakra-ui/core'

import Navbar from '@/base/Navbar'
import { useCurrentRoute } from 'react-navi'
import NavHeadUser from '@/base/NavHeadUser'

export default function AppLayout({ children }) {
  const currentRoute = useCurrentRoute()

  return (
    <Flex height="100vh" width="100vw" bg="gray.100" overflow="hidden" fontSize="sm">
      <Flex
        className="sidebar"
        width={['0%', '0%', '15%', '11%']}
        bg="gray.800"
        color="white"
        direction="column"
        boxShadow="sm"
      >
        <Box
          flexAlign="center"
          h="48px"
          lineHeight="48px"
          bg="blue.600"
          pl="12px"
          pr="12px"
          fontSize="18px"
          fontWeight="bold"
        >
          Admin UI
        </Box>
        <Box className="sider-container" h="calc(100vh - 64px)" overflowY="auto">
          <Navbar />
        </Box>
        <Box className="sider-bottom"></Box>
      </Flex>
      <Flex className="ory-app" flex={1}>
        <Stack w="100%" h="100%" spacing={3}>
          <Flex
            align="center"
            justify="space-between"
            h="48px"
            bg="white"
            p="0 12px"
            boxShadow="sm"
          >
            <Heading as="h3" size="sm">
              {currentRoute.data.navTitle}
            </Heading>
            <Stack className="nav-heading" flexDirection="row" spacing={2}>
              <Icon name="check-circle" size="16px" />
              <NavHeadUser />
            </Stack>
          </Flex>
          <Box p="0 12px">{children}</Box>
        </Stack>
      </Flex>
    </Flex>
  )
}
