import React from 'react';

import './RestaurantDish.scss';

function RestaurantDish({ dish }) {
  return (
    <div className={`restaurant-dish is-${dish.status}`}>
      <img
        className="restaurant-dish__image"
        src={dish.image}
        alt={`${dish.name} image`}
      />

      <div className="restaurant-dish__content">
        <p className="restaurant-dish__title">{dish.name}</p>
        <p className="restaurant-dish__price">Price: {dish.price} EUR</p>
        <p className="restaurant-dish__status">
          Current status: <span>{dish.status}</span>
        </p>

        <p className="restaurant-dish__description">{dish.description}</p>

        <div className="restaurant-dish__ingredients ingredients">
          <p className="ingredients__title">Ingredients:</p>
          <ul className="ingredients__list">
            {dish.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDish;
