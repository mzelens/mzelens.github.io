import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import {
  addAddress,
  updateAddress,
} from '../../../../store/reducers/customerReducer';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Select,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';

import './CustomerAccountAddressForm.scss';

function CustomerAccountAddressForm({
  address,
  setActiveAddress,
  setShowForm,
}) {
  const defaultFormValues = address
    ? {
        city: address.city,
        street: address.street,
        building: address.building,
        floor: address.floor,
        apartment: address.apartment,
      }
    : {};

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultFormValues,
  });

  const dispatch = useDispatch();
  const dispatchAdd = (address) => dispatch(addAddress(address));
  const dispatchUpdate = (address) => dispatch(updateAddress(address));

  const addressIds = useSelector((state) =>
    state.customer.addressBook.map((address) => address.id)
  );

  const onSubmit = (data) => {
    const newAddress = { ...data };

    if (address) {
      newAddress.id = address.id;
      dispatchUpdate(newAddress);
    }

    if (!address) {
      let attempts = 10;
      while (attempts > 0) {
        let newId = Math.floor(Math.random() * 900000) + 100000;
        if (!addressIds.find((item) => item.id === newId)) {
          newAddress.id = newId;
          break;
        }
        attempts--;
      }

      if (newAddress.id) {
        if (!addressIds.length) {
          newAddress.primary = true;
        }
        dispatchAdd(newAddress);
      }
    }

    setActiveAddress(null);
    setShowForm(false);
  };

  return (
    <div className="address-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="address-form__control" isInvalid={errors.city}>
          <FormLabel htmlFor="city">City</FormLabel>
          <Select
            id="city"
            {...register('city', {
              required: 'This field is required.',
            })}
          >
            <option value="Vilnius">Vilnius</option>
            <option value="Kaunas">Kaunas</option>
          </Select>
          <FormErrorMessage>
            {errors.city && errors.city.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="address-form__control"
          isInvalid={errors.street}
        >
          <FormLabel htmlFor="street">Street</FormLabel>
          <Input
            id="street"
            placeholder="Street"
            {...register('street', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.street && errors.street.message}
          </FormErrorMessage>
        </FormControl>

        <HStack spacing="20px">
          <FormControl
            className="address-form__control"
            isInvalid={errors.lastName}
          >
            <FormLabel htmlFor="building">Building</FormLabel>
            <Input
              id="building"
              placeholder="Building"
              {...register('building', {
                required: 'This field is required.',
              })}
            />
            <FormErrorMessage>
              {errors.building && errors.building.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            className="address-form__control"
            isInvalid={errors.floor}
          >
            <FormLabel htmlFor="last-name">Floor</FormLabel>
            <Input id="floor" placeholder="Floor" {...register('floor')} />
            <FormErrorMessage>
              {errors.floor && errors.floor.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            className="address-form__control"
            isInvalid={errors.apartment}
          >
            <FormLabel htmlFor="apartment">Apartment</FormLabel>
            <Input
              id="apartment"
              placeholder="Apartment"
              {...register('apartment')}
            />
            <FormErrorMessage>
              {errors.apartment && errors.apartment.message}
            </FormErrorMessage>
          </FormControl>
        </HStack>

        <Button
          type="submit"
          className="address-form__submit"
          colorScheme="blue"
          size="lg"
          isLoading={isSubmitting}
        >
          {address ? 'Update' : 'Add'}
        </Button>
      </form>
    </div>
  );
}

export default CustomerAccountAddressForm;
