import { Box, Flex, Spacer } from '@chakra-ui/react'
import Logotype from './Logotype'

const TopNav = () => (
  <Flex as="nav" alignItems="center" py={8}>
    <Box w="180px">
      <Logotype />
    </Box>
    <Spacer />
  </Flex>
)

export default TopNav
