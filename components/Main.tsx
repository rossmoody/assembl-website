import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import graphic from './assets/hero-image.png'
import MainContent from './MainContent'

const Main = () => {
  return (
    <Flex
      as="main"
      gap={6}
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
          src={graphic}
          layout="responsive"
          placeholder="blur"
        />
      </Box>
    </Flex>
  )
}

export default Main
