import {
  VStack,
  HStack,
  Divider,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { ProductMenuOptions, ProductOptions } from './Buttons'
import { Product } from '../interfaces'

export default function ProductCard({ id, title, image, likes }: Product) {
  const [isMobile] = useMediaQuery('(max-width: 500px)')
  return (
    <VStack key={id} w='inherit' maxW='3xl'>
      <HStack spacing='10' w='full' justifyContent='space-between'>
        <Image
          src={image}
          alt={title}
          fallbackSrc='https://via.placeholder.com/60'
          rounded='lg'
          w='50px'
        />
        <Text>{title}</Text>
        <HStack h='16' py='4' spacing='6'>
          <Text>{likes}</Text>
          <Divider orientation='vertical' />
        </HStack>
        <HStack>
          {isMobile ? <ProductMenuOptions /> : <ProductOptions />}
        </HStack>
      </HStack>
      <Divider />
    </VStack>
  )
}
