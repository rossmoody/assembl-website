import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Fragment } from 'react'
import Logotype from './Logotype'

const TopNav = () => (
  <Fragment>
    <Flex as="nav" alignItems="center" py={8}>
      <Box w="180px">
        <Logotype />
      </Box>
      <Spacer />
    </Flex>
    <Spacer height={[8]} />
  </Fragment>
)

export default TopNav
