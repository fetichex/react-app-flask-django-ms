import { VStack } from '@chakra-ui/react'

import useStore from '../store'
import ProductCard from './ProductCard'

export default function ProductsList() {
  const products = useStore(state => state.products)
  return (
    <VStack h='100%' w='full' px={{ base: '5', sm: '16' }} pt='2'>
      {products.map(p => {
        return (
          <ProductCard
            id={p.id}
            title={p.title}
            image={p.image}
            likes={p.likes}
          />
        )
      })}
    </VStack>
  )
}
