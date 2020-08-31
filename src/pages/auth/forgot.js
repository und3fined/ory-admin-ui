/*
 * File: forgot.js
 * Project: ory-admin-ui
 * File Created: 31 Aug 2020 15:43:12
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 31 Aug 2020 15:46:40
 * Modified By: me@und3fined.com (me@und3fined.com>)
 * -----
 * Copyright (c) 2020 und3fined.com
 */
/*
 * File: reset.js
 * Project: ory-admin-ui
 * File Created: 31 Aug 2020 15:45:31
 * Author: und3fined (me@und3fined.com)
 * -----
 * Last Modified: 31 Aug 2020 15:45:33
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

function ForgotForm({ request, auth }) {
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
          <Text fontSize="sm" color="gray.700">
            We will send you an email with instructions for regenerating your password.
          </Text>
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
          <Button
            isLoading={auth.locked}
            loadingText="Email sending..."
            variantColor="blue"
            variant="solid"
            onClick={(e) => {
              e.preventDefault()
              auth.login(email, password)
            }}
          >
            Confirm
          </Button>

          <Box>
            <Text textAlign="center" fontSize="sm" color="gray.700">
              Can't access to account?{' '}
              <Link as={NaviLink} color="blue.300" href="/auth/forgot">
                Forgot password.
              </Link>
            </Text>
          </Box>
        </Stack>
      </Box>
    </Stack>
  )
}

export default observer(ForgotForm)
