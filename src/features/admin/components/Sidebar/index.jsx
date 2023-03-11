import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Link,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import NavItem from '../NavItem/index.jsx';
import { getAdminRoutes } from '../../../../router/index.jsx';
import { Link as ReachLink } from 'react-router-dom';
import logoUrl from '../../../../assets/application-logo.svg';

export default function Sidebar({ onClose, ...rest }) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link display="flex" as={ReachLink} to="/">
          <Image boxSize="30px" src={logoUrl} />
        </Link>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {getAdminRoutes().map((link) => (
        <NavItem
          key={link.navItemName}
          icon={link.navItemIcon}
          to={link.index ? '' : link.path}
          isIndex={link.index}
        >
          {link.navItemName}
        </NavItem>
      ))}
    </Box>
  );
}
