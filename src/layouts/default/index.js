/**
 * Default Layout
 */
import { Stack } from '@chakra-ui/core'

function DefaultLayout({ children }) {
  return (
    <Stack spacing={8} direction="column" align="center" justify="center" height="100%">
      {children}
    </Stack>
  )
}

export default DefaultLayout
