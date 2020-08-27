/*
 * File: login.js
 * Project: ory-admin-ui
 * File Created: 26 Aug 2020 15:37:46
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 26 Aug 2020 15:37:51
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import {
  PseudoBox,
  Box,
  Alert,
  AlertIcon,
  Input,
  FormControl,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Button,
} from '@chakra-ui/core'

function LoginForm({ auth }) {
  const [errMsg, setErrMsg] = useState(null)
  const [visiblePassword, setVisiblePassword] = useState(false)

  useEffect(() => {
    if (auth.currentState() === 'end') {
      setErrMsg('error: something')
    }
  }, [auth])

  return (
    <Stack spacing={4}>
      <Alert status="success" variant="left-accent">
        <AlertIcon />
        {errMsg}
      </Alert>
      <Box w="100%" bg="white" p="24px" boxShadow="lg" rounded="lg" borderWith="1px">
        <Stack spacing={4}>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="email" color="gray.300" />} />
              <Input type="text" variant="filled" placeholder="Email" />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="lock" color="gray.300" />} />
              <Input
                type={visiblePassword ? 'text' : 'password'}
                variant="filled"
                placeholder="Password"
                pr="2.5rem"
              />
              <InputRightElement width="2.4rem">
                <PseudoBox
                  as="button"
                  height="32px"
                  lineHeight="0"
                  transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                  px="8px"
                  rounded="2px"
                  fontSize="14px"
                  fontWeight="semibold"
                  _active={{
                    transform: 'scale(0.98)',
                  }}
                  _focus={{
                    boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
                  }}
                  onClick={() => setVisiblePassword(!visiblePassword)}
                >
                  <Icon name={visiblePassword ? 'view-off' : 'view'} color="gray.400" />
                </PseudoBox>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            isLoading={auth.locked}
            loadingText="Login..."
            variantColor="teal"
            variant="solid"
            onClick={() => auth.login('ok', '1')}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default observer(LoginForm)
