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
import { useLoadingRoute } from 'react-navi'
import {
  Flex,
  Box,
  Divider,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Spinner,
  Stack,
} from '@chakra-ui/core'

import Dimmer from '@/base/Dimmer'

export default function AppLayout({ children }) {
  let loadingRoute = useLoadingRoute()

  return (
    <Flex height="100vh" width="100vw" bg="gray.100" overflow="hidden" fontSize="sm">
      <Dimmer active={!!loadingRoute}>
        <Spinner label={'Prepairing...'} />
      </Dimmer>
      <Flex
        className="sidebar"
        width={[
          '0%', // base
          '0%', // 480px upwards
          '25%', // 768px upwards
          '15%', // 992px upwards
        ]}
        bg="gray.700"
        color="white"
        direction="column"
      >
        <Box flexAlign="center" h="64px" bg="blue.600" p="8px">
          Ory Admin
        </Box>
        <Box h="calc(100vh - 64px)" overflowY="auto">
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionHeader>
                <Box flex="1" textAlign="left">
                  Dashboard
                </Box>
              </AccordionHeader>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader>
                <Box flex="1" textAlign="left">
                  Users
                </Box>
                <AccordionIcon />
              </AccordionHeader>
              <AccordionPanel pb={4}>
                <Accordion>
                  <AccordionItem>
                    <AccordionHeader>
                      <Box flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      <AccordionIcon />
                    </AccordionHeader>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
      <Divider orientation="vertical" m="0" />
      <Flex className="ory-app" flex={1}>
        <Stack w="100%" h="100%" spacing={3}>
          <Box flexAlign="center" h="64px" bg="blue.600" p="8px">
            Ory Admin
          </Box>
          <Box p={5}>{children}</Box>
        </Stack>
      </Flex>
    </Flex>
  )
}
