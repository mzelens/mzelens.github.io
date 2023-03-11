import React from 'react';
import { useForm } from 'react-hook-form';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Stack,
  Checkbox,
  CheckboxGroup,
  Button,
  Text,
} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { weekdays } from '../../../../constants';

import './RestaurantDescriptionForm.scss';

import restaurants from '../../mocks/restaurants';

function RestaurantDescriptionForm() {
  const restaurant = restaurants[0];

  const defaultFormValues = {
    name: restaurant.name,
    address: restaurant.address,
    hoursFrom: restaurant.workingHours.from,
    hoursTill: restaurant.workingHours.till,
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultFormValues,
  });

  const onSubmit = (data) => {
    weekdays.forEach((day) => {
      const startValue = data.schedule[day].start;
      const endValue = data.schedule[day].end;
      const startSeconds = startValue
        ? parseInt(startValue.split(':')[0], 10) * 3600 +
          parseInt(startValue.split(':')[1], 10) * 60
        : '';
      const endSeconds = endValue
        ? parseInt(endValue.split(':')[0], 10) * 3600 +
          parseInt(endValue.split(':')[1], 10) * 60
        : '';
      data.schedule[day] = { start: startSeconds, end: endSeconds };
    });

    return data;
  };

  return (
    <div className="restaurant-dataform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className="restaurant-dataform__control"
          isInvalid={errors.name}
        >
          <FormLabel htmlFor="restaurant-name">Restaurant name</FormLabel>
          <Input
            id="restaurant-name"
            placeholder="Restaurant name"
            {...register('name', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dataform__control"
          isInvalid={errors.address}
        >
          <FormLabel htmlFor="restaurant-address">Restaurant address</FormLabel>
          <Input
            id="restaurant-address"
            placeholder="Restaurant address"
            {...register('address', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.address && errors.address.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl className="restaurant-dataform__control">
          <FormLabel htmlFor="restaurant-schedule">
            Restaurant schedule
          </FormLabel>
          {weekdays.map((day) => (
            <HStack key={day} alignItems="center">
              <Text w={{ base: '130px', md: '100px' }}>{`${day
                .charAt(0)
                .toUpperCase()}${day.slice(1)}:`}</Text>
              <Input type="time" {...register(`schedule.${day}.start`)} />
              <Text>to</Text>
              <Input type="time" {...register(`schedule.${day}.end`)} />
            </HStack>
          ))}
        </FormControl>

        <FormControl
          className="restaurant-dataform__control"
          isInvalid={errors.paymentMethods}
        >
          <FormLabel>Payment methods</FormLabel>

          <CheckboxGroup
            colorScheme="green"
            defaultValue={Object.entries(restaurant.paymentMethods)
              .filter(([, isActive]) => isActive)
              .map(([method]) => method)}
          >
            <Stack spacing={2} direction={['column', 'row']}>
              {Object.keys(restaurant.paymentMethods).map((method) => (
                <Checkbox
                  {...register('payment')}
                  key={method}
                  value={method}
                  size="lg"
                  colorScheme="green"
                >
                  by {method}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>

          <FormErrorMessage>
            {errors.paymentMethods && errors.paymentMethods.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          className="restaurant-dataform__submit"
          colorScheme="green"
          size="lg"
          isLoading={isSubmitting}
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default RestaurantDescriptionForm;
