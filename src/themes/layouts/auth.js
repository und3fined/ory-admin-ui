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

import { Flex, Box, Heading, Text, Skeleton, Stack } from '@chakra-ui/core'

function AuthLayout({ children, context }) {
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
        <Heading as="h3" size="md" color="blue.300" textAlign="center" pb="12px">
          {route.data.navTitle}
        </Heading>
        <Flex width="100%" direction="column">
          <Stack
            w="100%"
            spacing={3}
            p="24px"
            bg="white"
            rounded="lg"
            display={context.auth.created ? 'none' : ''}
          >
            <Skeleton width="100%" height="42px" isLoaded={context.auth.created} />
            <Skeleton width="100%" height="42px" isLoaded={context.auth.created} />
            <Skeleton width="100%" height="42px" isLoaded={context.auth.created} />
            <Skeleton width="100%" height="18px" isLoaded={context.auth.created} />
          </Stack>
          {context.auth.created ? children : null}
        </Flex>
        <Text color="gray.400" pt="12px" fontSize="sm" textAlign="center">
          Made with{' '}
          <Text as="span" color="red.300">
            ♥
          </Text>{' '}
          Internet
        </Text>
      </Box>
    </Flex>
  )
}

export default AuthLayout
