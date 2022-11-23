import { HamburgerIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'

export const ProductMenuOptions = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList>
        <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        <MenuItem icon={<DeleteIcon />} color='red.500'>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export const ProductOptions = () => {
  return (
    <ButtonGroup>
      <Button colorScheme='teal' variant='ghost'>
        <EditIcon />
      </Button>
      <Button colorScheme='red' variant='ghost'>
        <DeleteIcon />
      </Button>
    </ButtonGroup>
  )
}
