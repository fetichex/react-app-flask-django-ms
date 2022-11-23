import { Circle, Stack } from '@chakra-ui/react'
import { ReactNode } from 'react'

import useStore from '../store'

export default function Pagination() {
  const products = useStore(state => state.products)
  const paginate: ReactNode[] = []

  products.forEach(() => {
    paginate.push(<Circle size='10px' bg='blackAlpha.100'></Circle>)
  })
  return (
    <Stack
      direction='row'
      w='full'
      alignItems='flex-start'
      justifyContent='center'>
      {paginate}
    </Stack>
  )
}
