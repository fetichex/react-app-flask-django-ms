import { ChangeEvent, FormEvent, useState } from 'react'
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Image,
  Input,
  VStack,
  Spinner,
  ModalCloseButton,
  Stack,
} from '@chakra-ui/react'

import { uploadFile } from '../firebase/config'
import useStore from '../store'
import { Product } from '../interfaces'

interface StateType {
  title?: string
  image?: string
}

export default function AddProductForm() {
  const addProduct = useStore(state => state.addProduct)
  const [loading, setLoading] = useState<boolean>(false)
  const [product, loadProduct] = useState<StateType>()

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (!value || !value.length) return
    loadProduct({
      ...product,
      title: value,
    })
  }

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files || !files.length) return
    setLoading(true)
    const url = await uploadFile(files[0])
    loadProduct({
      ...product,
      image: url,
    })
    setLoading(false)
  }

  const getValues = (e: any) => {
    const values: Product = {
      title: e.target.title.value,
      image: product?.image,
      id: 1,
      likes: 0,
    }
    return values
  }

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    addProduct(getValues(e))
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <FormControl>
      <form onSubmit={e => handleSubmit(e)}>
        <VStack
          mb={'12px'}
          w='full'
          spacing={2}
          alignItems='center'
          justifyContent='center'>
          <VStack w='inherit' spacing='-1'>
            <FormLabel>Title</FormLabel>
            <Input
              w='inherit'
              placeholder='Product Tile'
              onChange={e => handleTitle(e)}
              name='title'
            />
          </VStack>
          <VStack w='inherit' spacing='-1'>
            <Input
              w='inherit'
              border='none'
              px='1'
              pt='2'
              type='file'
              size='lg'
              onChange={e => handleFile(e)}
            />
          </VStack>
          <VStack w='inherit'>
            {!loading && product?.image ? (
              <Center h='10rem' w='full' overflow={'hidden'}>
                <Image src={product?.image} w='250px' objectFit='cover' />
              </Center>
            ) : (
              <Spinner />
            )}
          </VStack>
          <Stack w='full'>
            <Button as={ModalCloseButton} h='50px' w='full' type='submit'>
              create
            </Button>
          </Stack>
        </VStack>
      </form>
    </FormControl>
  )
}
