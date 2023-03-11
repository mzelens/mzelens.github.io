import React from 'react';

import './RestaurantDishCard.scss';

function RestaurantDishCard({ dish, setActive }) {
  const handleClick = () => setActive(dish);

  return (
    <div className={`dish-card is-${dish.status}`} onClick={handleClick}>
      <div className="dish-card__image">
        <img src={dish.image} alt={`${dish.name} image`} />
      </div>

      <div className="dish-card__content">
        <p className="dish-card__title">{dish.name}</p>
        <p className="dish-card__description">{dish.description}</p>
        <p className="dish-card__price">{dish.price} EUR</p>
      </div>
    </div>
  );
}

export default RestaurantDishCard;
