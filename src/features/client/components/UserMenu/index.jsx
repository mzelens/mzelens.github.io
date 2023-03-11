import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';

function UserMenu({ onLoginModalOpen, onSignupModalOpen }) {
  return (
    <Menu>
      <MenuButton as={Button}>User</MenuButton>
      <MenuList>
        <MenuItem onClick={onLoginModalOpen} variant="ghost">
          Log In
        </MenuItem>
        <MenuItem onClick={onSignupModalOpen}>Sign up</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserMenu;
