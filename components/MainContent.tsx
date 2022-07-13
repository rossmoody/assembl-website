import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import AppleIcon from './icons/Apple'
import GitHubIcon from './icons/GitHub'
import { Links } from './types'

const gradientText = {
  backgroundClip: 'text',
  textColor: 'transparent',
  bgGradient: 'linear-gradient(90deg, #00B2EB 0%, #DB3DDE 100%);',
}

const gradientFill = {
  bgGradient: 'linear-gradient(90deg, #00B2EB 0%, #DB3DDE 100%);',
}

const MainContent = () => (
  <Box maxWidth="550px">
    <Heading
      fontWeight="bold"
      fontSize={['5xl', '6xl']}
      lineHeight={1.1}
      as="h1"
    >
      The effortless{' '}
      <Text as="span" {...gradientText}>
        window manager
      </Text>{' '}
      for macOS
    </Heading>
    <Text mt={6} fontSize={['lg', 'xl']} as="h2" lineHeight="1.7">
      Free and{' '}
      <Link color="blurple.300" href={Links.githubRepo}>
        open-source,
      </Link>{' '}
      Assembl resizes, organizes, and maximizes all visible windows on a screen
      with one easy-to-remember keyboard shortcut.
    </Text>
    <Stack
      mt={12}
      spacing={4}
      direction={['column', 'row']}
      alignItems={['center', 'start']}
    >
      <Button
        as="a"
        href={Links.download}
        leftIcon={<AppleIcon size={20} />}
        variant="solid"
        {...gradientFill}
      >
        Download Assembl - it&apos;s free
      </Button>
    </Stack>
    <HStack spacing={2} mt={10} height="20px" display={['none', 'flex']}>
      <GitHubIcon size={20} />
      <Divider orientation="vertical" />
      <Text fontSize="xs" color="gray.300">
        Assembl is an{' '}
        <Link color="blurple.300" href={Links.download}>
          open-source project
        </Link>{' '}
        by{' '}
        <Link color="blurple.300" href={Links.download}>
          Ross Moody
        </Link>{' '}
      </Text>
    </HStack>
  </Box>
)

export default MainContent
