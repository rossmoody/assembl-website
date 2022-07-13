import { Box, Flex, Spacer, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import Logotype from './Logotype'
import { Links } from './types'

const Footer = () => (
  <Flex
    mt={8}
    mb={6}
    direction={['column', 'column', 'row']}
    gap={2}
    as="footer"
  >
    <Box w="150px">
      <Logotype size={80} />
    </Box>
    <Spacer />
    <Stack spacing={4} fontSize="xs" direction={['column', 'row']}>
      <Link href={Links.twitter}>Twitter</Link>
      <Link href={Links.githubRepo}>GitHub</Link>
      <Link href={Links.githubIssues}>Submit a bug</Link>
    </Stack>
  </Flex>
)

export default Footer
