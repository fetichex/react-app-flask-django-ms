import { Container, Flex, VStack } from '@chakra-ui/react'

import NavBar from './NavBar'
import Pagination from './Pagination'
import { ChildrenType } from '../interfaces'

export default function Layout({ children }: ChildrenType) {
  return (
    <>
      <Container maxW='container.lg' h='inherit'>
        <VStack h='inherit' justifyContent='space-between' alignItems='center'>
          <Flex as='nav' h='10vh' w='full'>
            <NavBar />
          </Flex>
          <Flex as='main' h='80vh' w='full'>
            {children}
          </Flex>
          <Flex as='footer' h='10vh' w='full'>
            <Pagination />
          </Flex>
        </VStack>
      </Container>
    </>
  )
}
