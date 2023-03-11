import React from 'react';
import { useSelector } from 'react-redux';

import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Image,
  Button,
  Flex,
} from '@chakra-ui/react';
import CustomerOrderSteps from '../CustomerOrderSteps';

import './CustomerOrderStatus.scss';
import { useLocation, useNavigate } from 'react-router';

function CustomerOrderStatus() {
  const location = useLocation();
  const { orderTotal, payMethod } = location.state;
  const cartItems = useSelector((store) => store.cart.list);
  const customerInfo = useSelector((store) => store.customer);
  const primaryAddress = customerInfo.addressBook.filter(
    (addy) => addy.primary
  )[0];
  const deliveryAddress = `${primaryAddress.street} ${primaryAddress.building}-${primaryAddress.apartment}, ${primaryAddress.city}`;
  const navigate = useNavigate();

  return (
    <Box position="relative" className="container order-status" mt="100px">
      <CustomerOrderSteps />
      <Box className="order-status__details order-details" mt="50px">
        <Box className="order-details__info">
          <Text className="order-details__title">Order details:</Text>
          <UnorderedList className="order-details__list">
            <ListItem>
              <Box as="span">Customer:</Box>
              {`${customerInfo.firstName} ${customerInfo.lastName}`}
            </ListItem>
            <ListItem>
              <Box as="span">Delivery address:</Box> {deliveryAddress}
            </ListItem>
            <ListItem>
              <Box as="span">Payment:</Box> {orderTotal} EUR by {payMethod}
            </ListItem>
          </UnorderedList>
        </Box>
        <Box className="order-details__dishes dish-list">
          <Text className="order-details__title">Selected dishes:</Text>
          <UnorderedList className="dish-list__values">
            {cartItems.map((dish, index) => (
              <ListItem key={dish.id} className="dish-list__item">
                <Box className="dish-list__image">
                  <Image
                    src={dish.recipeThumb}
                    alt={`${dish.recipeName} image`}
                  />
                </Box>
                <Text>
                  {index + 1}. {dish.recipeName}{' '}
                  <Box as="span">({dish.quantity} pcs.)</Box>
                </Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
      <Flex flexDir="column" align="center" mt="30px">
        <Box as="span" fontSize="24px" align="center">
          Your promocode for 10% discount for the upcoming order is
          <Text fontWeight="700" fontSize="28px" fontStyle="italic">
            BFD37
          </Text>
        </Box>
        <Button
          size="lg"
          mt="20px"
          width="50%"
          bg="#3182ce"
          color="#ffffff"
          onClick={() => navigate('/')}
        >
          Continue shopping
        </Button>
      </Flex>
    </Box>
  );
}

export default CustomerOrderStatus;
