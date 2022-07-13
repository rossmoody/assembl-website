import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import animation from './assets/hero-animation.gif'
import MainContent from './MainContent'

const Main = () => {
  return (
    <Flex
      as="main"
      gap={[20, 20, 20, 10]}
      direction={['column', 'column', 'column', 'row']}
      maxWidth="1260px"
      mx="auto"
    >
      <Flex flex={1} justifyContent="center" alignItems="center">
        <MainContent />
      </Flex>
      <Box flex={1}>
        <Image
          alt="Assembl product example"
          src={animation}
          layout="responsive"
        />
      </Box>
    </Flex>
  )
}

export default Main
