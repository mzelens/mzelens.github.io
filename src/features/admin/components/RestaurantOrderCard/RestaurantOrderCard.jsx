import React from 'react';
import { useSelector } from 'react-redux';

import './RestaurantOrderCard.scss';

function RestaurantOrderCard({ order, setActive }) {
  const handleClick = () => setActive(order);

  const allDishes = useSelector((state) => state.dishes.list);

  const orderDishes = order.dishes.map((dish) => {
    const name = allDishes.find((item) => item.id === dish.id).name;
    return { ...dish, name };
  });

  return (
    <div className="restaurant-ordercard" onClick={handleClick}>
      <p className="restaurant-ordercard__title">Order #{order.id}</p>
      <p className="restaurant-ordercard__payment">
        {order.payment.total} EUR by {order.payment.method}
      </p>
      <p className={`restaurant-ordercard__status is-${order.status}`}>
        Status: <span>{order.status}</span>
      </p>
      <div className="restaurant-ordercard__dishes dish-list">
        <p className="dish-list__title">Dishes:</p>
        <ul className="dish-list__values">
          {orderDishes.map((dish) => (
            <li key={dish.id}>
              {dish.name} <span>({dish.amount} pcs.)</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantOrderCard;
