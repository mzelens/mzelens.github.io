import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import RestaurantOrdersNav from '../RestaurantOrdersNav/RestaurantOrdersNav';
import RestaurantOrderCard from '../RestaurantOrderCard/RestaurantOrderCard';
import RestaurantOrder from '../RestaurantOrder/RestaurantOrder';

import './RestaurantOrders.scss';

import restaurants from '../../mocks/restaurants';

function RestaurantOrders() {
  const ORDER_STATUSES = ['declined', 'in-delivery', 'delivered'];

  const restaurant = restaurants[0];

  const [ordersSort, setOrdersSort] = useState('pending');
  const [activeOrder, setActiveOrder] = useState(null);

  const orders = useSelector((state) =>
    state.orders.list.filter((order) => order.restaurantId === restaurant.id)
  );

  const filteredOrders = orders.filter((order) =>
    ordersSort === 'history'
      ? ORDER_STATUSES.includes(order.status)
      : order.status === ordersSort
  );

  return (
    <div className="restaurant-orders">
      <RestaurantOrdersNav
        ordersSort={ordersSort}
        setOrdersSort={setOrdersSort}
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
      />

      <div className="restaurant-orders__content">
        {activeOrder && (
          <RestaurantOrder
            order={activeOrder}
            ordersSort={ordersSort}
            setActive={setActiveOrder}
            setOrdersSort={setOrdersSort}
          />
        )}

        {!activeOrder && (
          <div className="restaurant-orders__list orders-list">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <RestaurantOrderCard
                  key={order.id}
                  order={order}
                  setActive={setActiveOrder}
                />
              ))
            ) : (
              <p className="orders-list__empty">No {ordersSort} orders</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantOrders;
