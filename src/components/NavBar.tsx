import { TriangleUpIcon, Search2Icon, AddIcon } from '@chakra-ui/icons'
import {
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Heading,
  Box,
  useMediaQuery,
  Center,
  IconButton,
} from '@chakra-ui/react'
import AddProductForm from './AddProductForm'
import { AddProduct } from './Modals'

export default function NavBar() {
  const [isMobile] = useMediaQuery('(max-width: 500px)')
  return (
    <HStack w='full' p='6' justifyContent='space-between' alignItems='center'>
      <HStack>
        <TriangleUpIcon h='50px' w='50px' />
        {isMobile ? null : <Heading>Logo</Heading>}
      </HStack>
      <Box w='md' px='4'>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray.300' />}
          />
          <Input placeholder='Find product' w='inherit' />
        </InputGroup>
      </Box>
      <Center display='inline-block'>
        <AddProduct>
          <AddProductForm />
        </AddProduct>
      </Center>
    </HStack>
  )
}
