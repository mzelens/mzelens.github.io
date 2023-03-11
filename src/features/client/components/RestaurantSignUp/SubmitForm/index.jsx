import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';
import './index.scss';

function SubmitForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  const onSubmit = () => {
    setOverlay(<OverlayOne />);
    onOpen();
  };

  return (
    <div className="restaurant-signup__container">
      <div className="signup__wrapper">
        <div className="signup__message">
          <h2 className="signup__header">
            Fill out the form and we will get back to you within 48 hours.
          </h2>
          <h3 className="restaurant-signup__text-big">
            Since many restaurants are visiting our site to sign up for free, we
            will do our best to get back to you within 48 hours. <br />
            Until then, please make sure that your menu card is ready to go
            online.
          </h3>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="signup__header">
            Sign up and get your own webshop or join us at bfd.lt
          </div>
          <Stack spacing={3} direction="column">
            <FormControl isRequired>
              <RadioGroup name="subType" mt="10px">
                <Stack>
                  <Radio {...register('subType')} value="webshop">
                    Get your own webshop
                  </Radio>
                  <Radio {...register('subType')} value="bfd.lt">
                    Get your restaurant on bfd.lt
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </Stack>
          <FormControl mt="20px" isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name of the restaurant</FormLabel>
            <Input
              id="name"
              {...register('name', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="20px" isInvalid={errors.owner}>
            <FormLabel htmlFor="owner">Full name of the owner</FormLabel>
            <Input
              id="owner"
              {...register('owner', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.owner && errors.owner.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="20px" isInvalid={errors.phone}>
            <FormLabel htmlFor="phone">Phone number of the owner</FormLabel>
            <Input
              id="phone"
              {...register('phone', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mt="20px" isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email address of the owner</FormLabel>
            <Input
              id="email"
              {...register('email', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <Button mt={8} colorScheme="teal" type="submit">
            Submit information
          </Button>
        </form>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Application Submitted</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>We will get back to you within 24 hours!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default SubmitForm;
