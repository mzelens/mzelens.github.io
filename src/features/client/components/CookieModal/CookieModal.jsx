import React, { useRef } from 'react';

import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

import './CookieModal.scss';

function CookieModal() {
  const cookieValue = localStorage.getItem('cookie-policy');

  const { isOpen, onClose } = useDisclosure({
    defaultIsOpen: cookieValue !== 'accept',
  });

  const acceptRef = useRef();

  const handleAccept = () => {
    localStorage.setItem('cookie-policy', 'accept');
    onClose();
  };

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={acceptRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent className="cookie-modal">
        <AlertDialogHeader>This website uses cookies</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          We use cookies to personalise content and ads, to provide social media
          features and to analyse our traffic. We also share information about
          your use of our site with our social media, advertising and analytics
          partners who may combine it with other information that &apos;
          provided to them or that they&apos;ve collected from your use of their
          services.
        </AlertDialogBody>
        <AlertDialogFooter className="cookie-modal__footer">
          <Button colorScheme="red" w="full" onClick={onClose}>
            Deny
          </Button>
          <Button
            className="cookie-modal__accept"
            colorScheme="green"
            w="full"
            ref={acceptRef}
            onClick={handleAccept}
          >
            Accept All
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CookieModal;
