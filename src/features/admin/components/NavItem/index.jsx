import { Flex, Icon, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React from 'react';

export default function NavItem({ icon, to, isIndex, children, ...rest }) {
  const { pathname } = useLocation();
  const isActive = isIndex
    ? pathname === '/admin/restaurants'
    : to === pathname;

  return (
    <Link
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      as={RouterLink}
      to={to}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        sx={
          isActive && {
            bg: 'cyan.100',
            color: 'black',
          }
        }
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
}
