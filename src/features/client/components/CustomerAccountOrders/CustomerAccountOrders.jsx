import React, { useState } from 'react';

import { Button } from '@chakra-ui/react';
import CustomerAccountOrdersList from '../CustomerAccountOrdersList/CustomerAccountOrdersList';
import CustomerAccountOrdersInfo from '../CustomerAccountOrdersInfo/CustomerAccountOrdersInfo';

import './CustomerAccountOrders.scss';

function CustomerAccountOrders({ customer }) {
  const [activeOrder, setActiveOrder] = useState(null);

  const handleBackClick = () => {
    setActiveOrder(null);
  };

  return (
    <div className="customer-orders">
      <div className="customer-orders__nav">
        {activeOrder && (
          <Button
            variant="outline"
            colorScheme="blue"
            size="lg"
            onClick={handleBackClick}
          >
            Back
          </Button>
        )}
      </div>

      {activeOrder ? (
        <CustomerAccountOrdersInfo order={activeOrder} />
      ) : (
        <CustomerAccountOrdersList
          orderList={customer.orders}
          setActiveOrder={setActiveOrder}
        />
      )}
    </div>
  );
}

export default CustomerAccountOrders;
