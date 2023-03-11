import React, { useEffect } from 'react';
import { Box, Slide, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar';
import MobileNav from '../MobileNav';

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  let location = useLocation();
  useEffect(() => onClose(), [location]);

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Sidebar
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Slide
        direction="left"
        in={isOpen}
        style={{ zIndex: 10, transition: 'transform 0.3s ease-out' }}
      >
        <Sidebar onClose={onClose} />
      </Slide>
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}
