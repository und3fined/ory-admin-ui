/**
 * Home index
 */
import { Box, Spinner, Text } from '@chakra-ui/core'
import Layout from 'layouts/default'

import styles from './index.module.css'

export default function MainPage() {
  return (
    <Layout>
      <Box className={styles['main-container']} rounded="lg" overflow="hidden ">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          <Text fontSize="xl">Ory Admin</Text>
        </Box>
        <Spinner
          margin="8px"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.300"
          color="blue.500"
          size="xl"
        />
      </Box>
    </Layout>
  )
}
