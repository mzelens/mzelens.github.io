import React from 'react';

import { Button } from '@chakra-ui/react';

import './RestaurantDishesNav.scss';

function RestaurantDishesNav({
  activeDish,
  setActiveDish,
  formState,
  setFormState,
  handleRemove,
}) {
  return (
    <div className="restaurant-dishes__nav">
      {activeDish && (
        <>
          <Button
            variant="outline"
            colorScheme="green"
            size="lg"
            onClick={() =>
              formState === 'idle' ? setActiveDish(null) : setFormState('idle')
            }
          >
            Back
          </Button>

          {formState === 'idle' && (
            <>
              <Button
                variant="outline"
                colorScheme="red"
                size="lg"
                onClick={handleRemove}
              >
                Remove
              </Button>

              <Button
                colorScheme="green"
                size="lg"
                onClick={() => setFormState('edit')}
              >
                Edit
              </Button>
            </>
          )}
        </>
      )}

      {!activeDish &&
        (formState === 'idle' ? (
          <Button
            colorScheme="green"
            size="lg"
            onClick={() => setFormState('add')}
          >
            Add new dish
          </Button>
        ) : (
          <Button
            variant="outline"
            colorScheme="green"
            size="lg"
            onClick={() =>
              formState === 'idle' ? setActiveDish(null) : setFormState('idle')
            }
          >
            Back
          </Button>
        ))}
    </div>
  );
}

export default RestaurantDishesNav;
