import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, Spinner, Td, Tr, useDisclosure } from '@chakra-ui/react';

import './index.scss';
import CourierSelectionModal from '../CourierSelectionModal';

function CouriersOrderCard({ order }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selected, setSelected] = useState(false);

  const restaurant = useSelector((state) =>
    state.restaurants.list.find(
      (restaurant) => restaurant.id === order.restaurantId
    )
  );

  const handleClickAssign = () => {
    onOpen();
    setSelected(true);
  };
  const handleClose = () => {
    onClose();
    setSelected(false);
  };

  return (
    <>
      <Tr key={order.id}>
        <Td>{order.id}</Td>
        <Td>{restaurant.name} </Td>
        <Td>{order.customer.name} </Td>
        <Td>{order.status}</Td>
        <Td>
          <Button onClick={handleClickAssign}>
            {selected ? <Spinner /> : 'Select'}
          </Button>
        </Td>
      </Tr>

      <CourierSelectionModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
}

export default CouriersOrderCard;
