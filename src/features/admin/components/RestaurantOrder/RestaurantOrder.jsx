import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../../../store/reducers/ordersReducer';

import {
  Box,
  Checkbox,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';

import './RestaurantOrder.scss';

function RestaurantOrder({ order, ordersSort, setActive, setOrdersSort }) {
  const allDishes = useSelector((state) => state.dishes.list);

  const orderDishes = order.dishes.map((dish) => {
    const name = allDishes.find((item) => item.id === dish.id).name;
    return { ...dish, name };
  });

  const dispatch = useDispatch();
  const dispatchUpdate = (order) => dispatch(update(order));

  const handleChangeStatus = (status) => {
    dispatchUpdate({ ...order, status: status });
    setActive(null);
    setOrdersSort(status === 'in-delivery' ? 'history' : status);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const sureRef = React.useRef();

  const handleSetReady = () => {
    onClose();
    handleChangeStatus('ready');
  };

  return (
    <div className="restaurant-order">
      <div className="restaurant-order__info">
        <p className="restaurant-order__title">Order #{order.id}</p>
        <p className={`restaurant-order__status is-${order.status}`}>
          Current status: <span>{order.status}</span>
        </p>
        <p className="restaurant-order__payment">
          Payment: {order.payment.total} EUR by {order.payment.method}
        </p>
      </div>

      <div className="restaurant-order__dishes dishes-form">
        {orderDishes.map((dish) => (
          <Box className="dishes-form__control" key={dish.id}>
            <Checkbox
              size="lg"
              colorScheme="green"
              isDisabled={ordersSort !== 'active'}
            >
              {dish.name} <span>({dish.amount} pcs.)</span>
            </Checkbox>
          </Box>
        ))}

        {ordersSort === 'pending' && (
          <>
            <Button
              className="dishes-form__button"
              colorScheme="green"
              size="lg"
              onClick={() => handleChangeStatus('active')}
            >
              Accept order
            </Button>

            <Button
              className="dishes-form__button"
              colorScheme="red"
              size="lg"
              onClick={() => handleChangeStatus('declined')}
            >
              Decline order
            </Button>
          </>
        )}

        {ordersSort === 'active' && (
          <>
            <Button
              className="dishes-form__button"
              colorScheme="green"
              size="lg"
              onClick={onOpen}
            >
              Ready for delivery
            </Button>

            <AlertDialog
              isCentered={true}
              isOpen={isOpen}
              leastDestructiveRef={sureRef}
              onClose={onClose}
            >
              <AlertDialogOverlay>
                <AlertDialogContent className="dishes-modal">
                  <AlertDialogHeader
                    fontSize="2xl"
                    fontWeight="bold"
                    textAlign="center"
                  >
                    Are you sure?
                  </AlertDialogHeader>

                  <AlertDialogBody fontSize="lg" textAlign="center">
                    You won&apos;t be able to undo this action.
                  </AlertDialogBody>

                  <AlertDialogFooter className="dishes-modal__footer">
                    <Button colorScheme="red" onClick={onClose} w="full">
                      No
                    </Button>
                    <Button
                      colorScheme="green"
                      ref={sureRef}
                      onClick={handleSetReady}
                      w="full"
                    >
                      Yes
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </>
        )}

        {ordersSort === 'ready' && (
          <Button
            className="dishes-form__button"
            colorScheme="green"
            size="lg"
            onClick={() => handleChangeStatus('in-delivery')}
          >
            Finish order
          </Button>
        )}
      </div>
    </div>
  );
}

export default RestaurantOrder;
