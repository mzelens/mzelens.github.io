import React from 'react';

import { Icon, Button } from '@chakra-ui/react';
import { BiBasket } from 'react-icons/all.js';

import './CustomerAccountOrdersList.scss';

function CustomerAccountOrdersList({ orderList, setActiveOrder }) {
  return (
    <div className="customer-orderlist">
      {orderList.length > 0 ? (
        orderList.map((order) => (
          <div className="order-item" key={order.id}>
            <div className="order-item__icon">
              <Icon as={BiBasket} boxSize={5} color="white" />
            </div>

            <div className="order-item__body">
              <div className="order-item__info">
                <p className="order-item__restaurant">{order.restaurant}</p>
                <p className="order-item__date">{order.date}</p>
              </div>
              <p className="order-item__price">{order.payment.total} EUR</p>
            </div>

            <Button
              colorScheme="blue"
              className="order-item__button"
              onClick={() => setActiveOrder(order)}
            >
              View
            </Button>
          </div>
        ))
      ) : (
        <p className="customer-orderlist__empty">No orders yet</p>
      )}
    </div>
  );
}

export default CustomerAccountOrdersList;
