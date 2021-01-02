import * as React from 'react'
import NavBar from './navBar/navBar'
import { ChakraProvider, Container, HStack, Link, Text } from '@chakra-ui/react'
import ThemeToggleButton from './navBar/themeToggleButton'

type Props = {
  title: JSX.Element
  links: JSX.Element
  children: React.ReactNode
}

export default function Layout({ title, links, children }: Props) {
  const copyrightStr = `Copyright © Seungbin Oh. Built with `
  const repoName = 'gatsby-starter-apple'
  const repoSrc = 'https://github.com/sungik-choi/gatsby-starter-apple'

  return (
    <ChakraProvider>
      <NavBar title={title}>
        {links}
      </NavBar>
      <Container maxW="1024px">{children}</Container>
      <Container centerContent>
        <HStack aria-label="Copyright">
          <Text fontSize="md">
            {copyrightStr}
            <Link href={repoSrc} target="__blank" isExternal>
              {repoName}
            </Link>
          </Text>
        </HStack>
      </Container>
      <ThemeToggleButton />
    </ChakraProvider>
  )
}
