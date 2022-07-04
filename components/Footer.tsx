import { Box, Divider, Flex, Spacer, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import Logotype from './Logotype'
import { Links } from './types'

const Footer = () => (
  <Flex mt={40} mb={12} direction={['column', 'column', 'row']} gap={2}>
    <Box w="150px">
      <Logotype />
    </Box>
    <Spacer />
    <Stack spacing={4} fontSize="sm" direction={['column', 'row']}>
    <Link href={Links.twitter}>Check out my other apps</Link>
    <Divider orientation='vertical'/>
      <Link href={Links.twitter}>Twitter</Link>
      <Link href={Links.githubRepo}>GitHub</Link>
      <Link href={Links.githubIssues}>Submit a bug</Link>
    </Stack>
  </Flex>
)

export default Footer
