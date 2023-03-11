import React from 'react';

import { Tag } from '@chakra-ui/react';

import './CustomerAccountOrdersInfo.scss';

function CustomerAccountOrdersInfo({ order }) {
  return (
    <div className="customer-order">
      <div className="customer-order__info order-info">
        <p className="order-info__restaurant order-info__item">
          {order.restaurant}
        </p>
        <div className="order-info__order order-info__item">
          <p className="order-info__id order-info__value">
            Order #{order.id} -{' '}
          </p>
          <Tag
            className="order-info__status"
            size="md"
            variant="solid"
            colorScheme={order.status === 'fulfilled' ? 'green' : 'blue'}
          >
            {order.status}
          </Tag>
        </div>
        <p className="order-info__date order-info__item">{order.date}</p>
        <p className="order-info__price order-info__item">
          Total sum:{' '}
          <span className="order-info__value">
            {order.payment.total} EUR by {order.payment.method}
          </span>
        </p>
        <p className="order-info__delivery order-info__item">
          Delivery address:{' '}
          <span className="order-info__value">
            {order.deliveryAddress.city}, {order.deliveryAddress.street},{' '}
            {order.deliveryAddress.building}
          </span>
        </p>
      </div>

      <div className="customer-order__dishes order-dishes">
        <p className="order-dishes__title">Selected dishes:</p>
        <ul className="order-dishes__list dish-list">
          {order.dishes.map((dish, index) => (
            <li key={dish.id} className="dish-list__item">
              <div className="dish-list__image">
                <img src={dish.image} alt={`${dish.name} image`} />
              </div>
              <div className="dish-list__body">
                <p className="dish-list__name">
                  {index + 1}. {dish.name} <span>({dish.amount} pcs.)</span>
                </p>
                <p className="dish-list__price">
                  {dish.price} * {dish.amount} = {dish.price * dish.amount} EUR
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CustomerAccountOrdersInfo;
