import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../../../store/reducers/dishesReducer';

import RestaurantDishesNav from '../RestaurantDishesNav/RestaurantDishesNav';
import RestaurantDishCard from '../RestaurantDishCard/RestaurantDishCard';
import RestaurantDish from '../RestaurantDish/RestaurantDish';
import RestaurantDishForm from '../RestaurantDishForm/RestaurantDishForm';

import './RestaurantDishes.scss';

import restaurants from '../../mocks/restaurants';

function RestaurantDishes() {
  const restaurant = restaurants[0];

  const dishes = useSelector((state) =>
    state.dishes.list.filter((dish) => dish.restaurantId === restaurant.id)
  );

  const [activeDish, setActiveDish] = useState(null);
  const [formState, setFormState] = useState('idle');

  const dispatch = useDispatch();
  const dispatchRemove = (dish) => dispatch(remove(dish));

  const handleRemove = () => {
    dispatchRemove(activeDish.id);
    setActiveDish(null);
    setFormState('idle');
  };

  return (
    <div className="restaurant-dishes">
      <RestaurantDishesNav
        activeDish={activeDish}
        setActiveDish={setActiveDish}
        formState={formState}
        setFormState={setFormState}
        handleRemove={handleRemove}
      />

      <div className="restaurant-dishes__content">
        {formState === 'idle' ? (
          activeDish && <RestaurantDish dish={activeDish} />
        ) : (
          <RestaurantDishForm
            dish={activeDish}
            allDishes={dishes}
            setActiveDish={setActiveDish}
            formState={formState}
            setFormState={setFormState}
          />
        )}

        {formState === 'idle' && !activeDish && (
          <div className="restaurant-dishes__list dish-list">
            {dishes.length > 0 ? (
              dishes.map((dish) => (
                <RestaurantDishCard
                  key={dish.id}
                  dish={dish}
                  setActive={setActiveDish}
                />
              ))
            ) : (
              <p className="dish-list__empty">No dishes added yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantDishes;
