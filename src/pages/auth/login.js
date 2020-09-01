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
import { Link as NaviLink, useNavigation } from 'react-navi'
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
  Text,
  Link,
  CloseButton,
} from '@chakra-ui/core'

function LoginForm({ request, auth }) {
  const navigation = useNavigation()
  const [errMsg, setErrMsg] = useState(null)
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [email, setEmail] = React.useState(auth.email)
  const [password, setPassword] = React.useState(auth.password)

  // eslint-disable-next-line
  useEffect(() => {
    if (auth.currentState() === 'end') {
      let next = request.params.next ? decodeURIComponent(request.params.next) : '/dashboard'

      if (auth.isAuthenticated) {
        setTimeout(() => navigation.navigate(next, { replace: true }), 200)
      } else {
        setErrMsg(auth.messageContent)
      }
    }

    return () => {}
  })

  return (
    <Stack w="100%" spacing={4}>
      <Alert
        boxShadow="md"
        rounded="lg"
        status={auth.messageType}
        variant="left-accent"
        display={errMsg ? '' : 'none'}
      >
        <AlertIcon />
        {errMsg}
        <CloseButton
          onClick={() => setErrMsg(null)}
          color="gray.700"
          size="sm"
          position="absolute"
          right="8px"
        />
      </Alert>
      <Box w="100%" bg="white" p="24px" boxShadow="md" rounded="lg" borderWith="1px">
        <Stack spacing={4}>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="email" color="gray.300" />} />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                variant="filled"
                placeholder="Email"
                focusBorderColor="blue.300"
                borderWidth="1px"
                disabled={auth.locked}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="lock" color="gray.300" />} />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={visiblePassword ? 'text' : 'password'}
                variant="filled"
                placeholder="Password"
                focusBorderColor="blue.300"
                pr="2.5rem"
                borderWidth="1px"
                disabled={auth.locked}
              />
              <InputRightElement width="2.5rem">
                <PseudoBox
                  as="button"
                  height="32px"
                  lineHeight="0"
                  px="8px"
                  rounded="2px"
                  fontSize="14px"
                  fontWeight="semibold"
                  onClick={() => setVisiblePassword(!visiblePassword)}
                  disabled={auth.locked}
                >
                  <Icon
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    name={visiblePassword ? 'view-off' : 'view'}
                    color="gray.400"
                  />
                </PseudoBox>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            isLoading={auth.locked}
            loadingText="Login..."
            variantColor="blue"
            variant="solid"
            onClick={(e) => {
              e.preventDefault()
              auth.login(email, password)
            }}
          >
            Login
          </Button>

          <Box>
            <Text textAlign="center" fontSize="sm" color="gray.600">
              Can't access to account?{' '}
              <Link as={NaviLink} color="blue.300" href="/auth/forgot">
                Forgot password.
              </Link>
            </Text>
          </Box>
          <Box>
            <Text textAlign="center" fontSize="xs" color="gray.600">
              Use default account for access as <i>Super Administrator</i>
            </Text>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

export default observer(LoginForm)
