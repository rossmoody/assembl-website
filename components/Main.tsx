import { Box, Flex } from '@chakra-ui/react'
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
        <img
          alt="Assembl product animation"
          src="/hero-animation.gif"
          width="646px"
          height="680px"
          style={{ outline: '1px solid #512673', borderRadius: '8px' }}
        />
      </Box>
    </Flex>
  )
}

export default Main
