import { AddIcon } from '@chakra-ui/icons'
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useMediaQuery,
  IconButton,
} from '@chakra-ui/react'

import { ChildrenType } from '../interfaces'

export const AddProduct = ({ children }: ChildrenType) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery('(max-width: 500px)')
  return (
    <>
      {isMobile ? (
        <IconButton onClick={onOpen} aria-label='add product' rounded='full'>
          <AddIcon />
        </IconButton>
      ) : (
        <Button onClick={onOpen}>add product</Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
