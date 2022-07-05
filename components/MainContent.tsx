import {
  Box,
  Button, Divider, Heading, HStack, Link,
  Stack,
  Text
} from '@chakra-ui/react'
import ChromeIcon from './icons/Chrome'
import StarIcon from './icons/Star'
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
      The most simple{' '}
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
    <HStack spacing={2} mt={10} height="20px" display={['none', 'flex']}>
      <HStack alignItems="center" spacing={1}>
        <StarIcon />
      </HStack>
      <Divider orientation="vertical" />
      <Text fontSize="xs" color="gray.300">
        Rated{' '}
        <Link color="blurple.300" href={Links.download}>
          5 stars
        </Link>{' '}
        by a bunch of awesome folks
      </Text>
    </HStack>
  </Box>
)

export default MainContent
