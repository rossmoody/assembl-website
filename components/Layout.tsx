import { Flex } from '@chakra-ui/react'
import Footer from './Footer'
import TopNav from './TopNav'
import { Children } from './types'

const Layout = ({ children }: Children) => (
  <Flex
    px={[8, 12, 16]}
    direction="column"
    flex={1}
    maxWidth="1560px"
    minH="100vh"
    minW="100vw"
  >
    <TopNav />
    <Flex direction="column" flex={1}>
      {children}
    </Flex>
    <Footer />
  </Flex>
)

export default Layout
