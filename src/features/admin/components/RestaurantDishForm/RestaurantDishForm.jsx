import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { add, update } from '../../../../store/reducers/dishesReducer';

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  Textarea,
  Select,
  Button,
} from '@chakra-ui/react';

import './RestaurantDishForm.scss';

import restaurants from '../../mocks/restaurants';

function RestaurantDishForm({
  dish = null,
  allDishes,
  setActiveDish,
  formState,
  setFormState,
}) {
  const restaurant = restaurants[0];

  const defaultFormValues = dish
    ? {
        name: dish.name,
        status: dish.status,
        price: dish.price,
        description: dish.description,
        ingredients: dish.ingredients.join('\n'),
        image: dish.image,
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
  const dispatchAdd = (dish) => dispatch(add(dish));
  const dispatchUpdate = (dish) => dispatch(update(dish));

  const onSubmit = (data) => {
    const newDish = { ...data, price: Number(data.price) };
    newDish.restaurantId = Number(restaurant.id);
    newDish.ingredients = data.ingredients
      .split('\n')
      .filter((line) => line.length);

    if (formState === 'edit') {
      newDish.id = Number(dish.id);
      dispatchUpdate(newDish);
      setActiveDish(newDish);
      setFormState('idle');
    }

    if (formState === 'add') {
      let attempts = 10;
      while (attempts > 0) {
        let newId = Math.floor(Math.random() * 900000) + 100000;
        if (!allDishes.find((item) => item.id === newId)) {
          newDish.id = newId;
          break;
        }
        attempts--;
      }

      if (newDish.id) {
        dispatchAdd(newDish);
        setActiveDish(newDish);
        setFormState('idle');
      }
    }
  };

  return (
    <div className="restaurant-dishform">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.name}
        >
          <FormLabel htmlFor="dish-name">Dish name</FormLabel>
          <Input
            id="dish-name"
            placeholder="Dish name"
            {...register('name', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.price}
        >
          <FormLabel htmlFor="dish-price">Price (EUR)</FormLabel>
          <NumberInput step={0.01} precision={2}>
            <NumberInputField
              id="dish-price"
              placeholder="Dish price"
              {...register('price', {
                required: 'This field is required.',
                min: {
                  value: 0,
                  message: 'Min value is 0.',
                },
                max: {
                  value: 100000,
                  message: 'Max value is 100000.',
                },
              })}
            />
          </NumberInput>

          <FormErrorMessage>
            {errors.price && errors.price.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.status}
        >
          <FormLabel htmlFor="dish-status">Current status</FormLabel>
          <Select
            id="dish-status"
            {...register('status', {
              required: 'This field is required.',
            })}
          >
            <option value="active">active</option>
            <option value="draft">draft</option>
          </Select>
          <FormErrorMessage>
            {errors.status && errors.status.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.description}
        >
          <FormLabel htmlFor="dish-description">Dish description</FormLabel>
          <Textarea
            id="dish-description"
            placeholder="Some words here..."
            {...register('description', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.ingredients}
        >
          <FormLabel htmlFor="dish-ingredients">Dish ingredients</FormLabel>
          <Textarea
            id="dish-ingredients"
            placeholder="Each ingredient from new line..."
            {...register('ingredients')}
          />
          <FormErrorMessage>
            {errors.ingredients && errors.ingredients.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          className="restaurant-dishform__control"
          isInvalid={errors.image}
        >
          <FormLabel htmlFor="dish-image">Image link</FormLabel>
          <Input
            id="dish-image"
            placeholder="Dish image"
            {...register('image', {
              required: 'This field is required.',
            })}
          />
          <FormErrorMessage>
            {errors.image && errors.image.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          className="restaurant-dishform__submit"
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

export default RestaurantDishForm;
