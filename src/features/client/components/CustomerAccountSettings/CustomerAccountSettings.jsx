import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Select,
  Input,
  Button,
  Stack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import CustomerAccountActionbar from '../CustomerAccountActionbar/CustomerAccountActionbar';

import './CustomerAccountSettings.scss';

function CustomerAccountSettings({ customer }) {
  const user = useSelector((state) => state.user.data);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: customer.phone,
      photo: customer.photo,
    },
  });

  const handleRemovePhoto = () => {};

  function onSubmit() {}

  return (
    <div className="customer-dataform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className="customer-dataform__control"
          isInvalid={errors.country}
        >
          <FormLabel htmlFor="country">Country</FormLabel>
          <Select
            id="country"
            {...register('country', {
              required: 'This field is required.',
            })}
          >
            <option value="Lithuania">Lithuania</option>
          </Select>
          <FormErrorMessage>
            {errors.country && errors.country.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="customer-dataform__control"
          isInvalid={errors.photo}
        >
          <Input
            type="file"
            id="photo"
            hidden
            accept="image/*"
            {...register('photo')}
          />
          <FormLabel>Photo</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center w="full">
              <Avatar
                size="2xl"
                name={`${user?.firstName} ${user?.lastName}`}
                src={customer.photo}
              >
                <AvatarBadge
                  as={IconButton}
                  size="md"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  icon={<SmallCloseIcon />}
                  onClick={handleRemovePhoto}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Photo</Button>
            </Center>
          </Stack>
          <FormErrorMessage>
            {errors.photo && errors.photo.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="customer-dataform__control"
          isInvalid={errors.firstName}
        >
          <FormLabel htmlFor="first-name">First name</FormLabel>
          <Input
            id="first-name"
            placeholder="First name"
            {...register('firstName', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="customer-dataform__control"
          isInvalid={errors.lastName}
        >
          <FormLabel htmlFor="last-name">Last name</FormLabel>
          <Input
            id="last-name"
            placeholder="Last name"
            {...register('lastName', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="customer-dataform__control"
          isInvalid={errors.email}
        >
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register('email', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="customer-dataform__control"
          isInvalid={errors.email}
        >
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input
            type="tel"
            id="phone"
            placeholder="Phone"
            {...register('phone', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.phone && errors.phone.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          className="customer-dataform__submit"
          colorScheme="blue"
          size="lg"
          isLoading={isSubmitting}
        >
          Update
        </Button>
      </form>

      <CustomerAccountActionbar customer={customer} />
    </div>
  );
}

export default CustomerAccountSettings;
