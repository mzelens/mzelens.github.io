import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  ModalFooter,
  Button,
  useDisclosure,
  Flex,
  Box,
  Input,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

const UserForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    return data;
  };

  const [smallerScreen] = useMediaQuery('(max-width: 750px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box backgroundColor="#edf2f7" width="100%" borderRadius="lg" p={5} m={3}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex
            flexDirection="column"
            alignItems={smallerScreen ? 'default' : 'center'}
          >
            <Box>
              <Text>First name</Text>
              <Input
                size="lg"
                width={smallerScreen ? '100%' : '300px'}
                {...register('firstName')}
              />
            </Box>
            <Box>
              <Text>Last name</Text>
              <Input
                size="lg"
                width={smallerScreen ? '100%' : '300px'}
                {...register('lastName')}
              />
            </Box>
            <Box>
              <Text>Email</Text>
              <Input
                size="lg"
                width={smallerScreen ? '100%' : '300px'}
                {...register('email')}
              />
            </Box>
            <Box>
              <Text>Password</Text>
              <Input
                type="password"
                size="lg"
                width={smallerScreen ? '100%' : '300px'}
                {...register('password')}
              />
            </Box>
            <Box>
              <Text>Phone Number</Text>
              <Input
                size="lg"
                width={smallerScreen ? '100%' : '300px'}
                {...register('phoneNumber')}
              />
            </Box>
            <Box>
              <Text>Date of birth</Text>
              <Input
                type="date"
                size="lg"
                width={smallerScreen ? '100%' : '300px'}
                ml="0"
                p="0"
                {...register('date')}
              />
            </Box>
            <Button
              type="submit"
              onClick={onOpen}
              mt={3}
              colorScheme="black"
              variant="outline"
            >
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="green">Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>You&apos;ve successfully submitted form!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserForm;
