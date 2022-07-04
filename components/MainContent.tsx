import {
  Box,
  Button, Heading, Link,
  Stack,
  Text
} from '@chakra-ui/react'
import ChromeIcon from './icons/Chrome'
import { Links } from './types'

const gradientText = {
  backgroundClip: 'text',
  textColor: 'transparent',
  bgGradient: 'linear-gradient(275.82deg, #6FBBFC 0%, #6D48FF 100%);',
}

const MainContent = () => (
  <Box maxWidth="550px">
    <Heading
      fontWeight="bold"
      fontSize={['5xl', '6xl']}
      lineHeight={1.1}
      as="h1"
    >
      A dead simple{' '}
      <Text as="span" {...gradientText}>
         window manager
      </Text>{' '}
      for macOS.
    </Heading>
    <Text mt={6} fontSize={['md', 'lg']} as="h2">
      Free and{' '}
      <Link color="blurple.300" href={Links.githubRepo}>
        open-source,
      </Link>{' '}
      Assembl resizes, organizes, and maximizes all visible windows with one easy-to-remember keyboard shortcut.
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
        leftIcon={<ChromeIcon />}
        variant="solid"
        colorScheme="blurple"
      >
        Download Assembl - it&apos;s free
      </Button>
    </Stack>
  </Box>
)

export default MainContent
