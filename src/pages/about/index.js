/**
 * About page
 */

import { Box } from '@chakra-ui/core'

import styles from './style.module.css'

export default function AboutPage() {
  return (
    <Box
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <h2 className={styles.hello}>About</h2>
    </Box>
  )
}
