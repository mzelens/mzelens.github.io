import { Button, Flex, Text, useOutsideClick } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  decreaseItemQuantity,
  increaseItemQuantity,
  deleteItem,
} from '../../../../store/reducers/cartReducer';

function CheckoutItemQuantity({ dish }) {
  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  const dispatch = useDispatch();
  const increaseQuantity = (id) => dispatch(increaseItemQuantity(id));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity(id));
  const deleteItemFromCart = (id) => dispatch(deleteItem(id));

  return (
    <>
      {isModalOpen ? (
        <Flex
          alignItems="center"
          gap="10px"
          rounded="md"
          border="1px solid lightgray"
          padding="5px"
          ref={ref}
        >
          <Button
            onClick={() => decreaseQuantity(dish.id)}
            size="sm"
            bg="white"
            rounded="full"
            variant="outline"
          >
            -
          </Button>
          <Text>{dish.quantity}</Text>
          <Button
            size="sm"
            bg="white"
            rounded="full"
            variant="outline"
            onClick={() => increaseQuantity(dish.id)}
          >
            +
          </Button>
          <Button
            onClick={() => deleteItemFromCart(dish.id)}
            size="sm"
            bg="white"
            rounded="full"
            variant="outline"
          >
            <DeleteIcon />
          </Button>
        </Flex>
      ) : (
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="outline"
          _hover={{
            border: '2px solid #4299e1',
          }}
        >
          {dish.quantity}
        </Button>
      )}
    </>
  );
}

export default CheckoutItemQuantity;
