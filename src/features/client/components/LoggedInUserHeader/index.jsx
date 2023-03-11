import React from 'react';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import {
  FiChevronDown,
  FiSettings,
  FiLayers,
  CgProfile,
  FiLogOut,
} from 'react-icons/all.js';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../../../store/reducers/userReducer';

function LoggedInUserHeader() {
  const navigate = useNavigate();

  const sessionUser = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(remove());

  return (
    <HStack spacing={{ base: '0', md: '6' }}>
      <Flex alignItems={'center'}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: 'none' }}
          >
            <HStack>
              <Avatar
                size={'sm'}
                src={
                  'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">{`${sessionUser.firstName} ${sessionUser.lastName}`}</Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue('white', 'gray.900')}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
          >
            <MenuItem as="button" onClick={() => navigate('/account')}>
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: 'white',
                }}
                as={CgProfile}
              />
              Profile
            </MenuItem>
            <MenuItem
              as="button"
              onClick={() => navigate('/account/order-history')}
            >
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: 'white',
                }}
                as={FiLayers}
              />
              Order History
            </MenuItem>
            <MenuItem as="button" onClick={() => navigate('/account/settings')}>
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: 'white',
                }}
                as={FiSettings}
              />
              Settings
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={handleLogout}>
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: 'white',
                }}
                as={FiLogOut}
              />
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
}

export default LoggedInUserHeader;
