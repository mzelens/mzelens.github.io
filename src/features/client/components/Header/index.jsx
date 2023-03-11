import { Link as ReachLink } from 'react-router-dom';
import {
  Box,
  Link,
  Image,
  useDisclosure,
  Flex,
  Input,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';

import logoUrl from '../../../../assets/application-logo.svg';
import LogInModal from '../LogInModal';
import UserMenu from '../UserMenu';
import CartDrawer from '../CartDrawer';
import SignUpModal from '../SignupModal';
import DeliverToButton from '../DeliverToButton';
import { ButtonGroup, Button } from '@chakra-ui/react';

function Header() {
  const {
    isOpen: isLoginModalOpen,
    onOpen: onLoginModalOpen,
    onClose: onLoginModalClose,
  } = useDisclosure();
  const {
    isOpen: isSignupModalOpen,
    onOpen: onSignupModalOpen,
    onClose: onSignupModalClose,
  } = useDisclosure();
  const [smallerScreen] = useMediaQuery('(max-width: 800px)');

  return (
    <>
      <Box
        as="header"
        height={smallerScreen ? '120px' : '80px'}
        position="fixed"
        left="0"
        right="0"
        top="0"
        zIndex="5"
        borderBottom="1px solid lightgray"
        bg="white"
        display="flex"
        flexDirection="column"
      >
        <Box
          className="container"
          height="50px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex
            gap="10px"
            alignItems="center"
            width="auto"
            justifyContent="flex-start"
          >
            <Link as={ReachLink} to="/">
              <Image boxSize="30px" src={logoUrl} />
            </Link>
            {!smallerScreen && <DeliverToButton isLoggedIn={true} />}
          </Flex>
          <Input
            color="black"
            bg="lightgray"
            placeholder={
              smallerScreen
                ? 'Search for meal...'
                : 'Search for cuisine, meal, restaurant...'
            }
            width={smallerScreen ? '40%' : '300px'}
            borderRadius="50px"
          />
          {smallerScreen ? (
            <Flex flexWrap="wrap" justifyContent="flex-end" width="25%">
              <UserMenu
                onLoginModalOpen={onLoginModalOpen}
                onSignupModalOpen={onSignupModalOpen}
              />
            </Flex>
          ) : (
            <>
              <ButtonGroup gap={{ base: '5px', sm: '20px' }}>
                <Button onClick={onLoginModalOpen} variant="ghost">
                  Log In
                </Button>
                <Button
                  onClick={onSignupModalOpen}
                  colorScheme="blue"
                  color="white"
                >
                  Sign up
                </Button>
              </ButtonGroup>
            </>
          )}
          <CartDrawer />
        </Box>
        {smallerScreen && <DeliverToButton isLoggedIn={true} />}
      </Box>
      <LogInModal
        isOpen={isLoginModalOpen}
        onClose={onLoginModalClose}
        onSignupModalOpen={onSignupModalOpen}
      />
      <SignUpModal isOpen={isSignupModalOpen} onClose={onSignupModalClose} />
    </>
  );
}

export default Header;
