import { ReactNode } from 'react'

export type Children = {
  children: ReactNode
}

export type IconProps = {
  size?: number
}

export type HighlightData = {
  color: string
  logo: React.ReactNode
  subtitle: string
  title: string
  description: string | ReactNode
}

export enum Links {
  download = "https://github.com/rossmoody/Assembl/raw/main/Release/Assembl.dmg",
  twitter = 'https://www.twitter.com/_rossmoody',
  githubRepo = 'https://www.github.com/rossmoody/Assembl',
  githubIssues = 'https://github.com/rossmoody/Assembl/issues',
}
