import {
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { useSelector } from 'react-redux';

import PaymentModal from '../../components/PaymentModal';
import { mockFess } from '../../mocks/checkoutMock';

function CheckoutCart({ payMethod }) {
  const {
    isOpen: paymentIsOpen,
    onOpen: paymentOnOpen,
    onClose: paymentOnClose,
  } = useDisclosure();

  const cartItems = useSelector((store) => store.cart.list);

  const orderSubtotal = cartItems
    .reduce((acc, cur) => {
      return +cur.recipePrice * +cur.quantity + acc;
    }, 0)
    .toFixed(2);

  const orderTotal = (
    +orderSubtotal +
    +mockFess.deliveryFee +
    +mockFess.serviceFee +
    +mockFess.smallOrderFee
  ).toFixed(2);

  const handleOrderClick = () => {
    if (orderSubtotal > 0) paymentOnOpen();
  };

  return (
    <Stack
      gridColumn={{ base: '1', lg: '3' }}
      width="100%"
      spacing="20px"
      padding="15px"
      height="fit-content"
      border="1px solid lightgray"
      rounded="md"
    >
      <Flex gap="5px" alignItems="center">
        <Heading fontSize="28px">Prices in EUR, incl. taxes</Heading>
        <Button
          color="blue.400"
          rounded="full"
          border="1px solid #4299e1"
          fontSize="14px"
          padding="3px 10px"
          height="fit-content"
          minWidth="fit-content"
          variant="ghost"
          display="inline-block"
        >
          i
        </Button>
      </Flex>
      {/* Could map this when have real data */}
      <Flex justifyContent="space-between">
        <Text>Item subtotal</Text>
        <Text>{orderSubtotal}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Delivery (4.77 km)</Text>
        <Text>{mockFess.deliveryFee}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Service fee</Text>
        <Text>{mockFess.serviceFee}</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>Small order fee</Text>
        <Text>{mockFess.smallOrderFee}</Text>
      </Flex>
      <Divider />
      <Flex justifyContent="space-between">
        <Text>Total sum</Text>
        <Text>{orderTotal}</Text>
      </Flex>
      <Button
        position="sticky"
        color="white"
        bg="blue.400"
        onClick={handleOrderClick}
      >
        Click to order
      </Button>

      <PaymentModal
        paymentIsOpen={paymentIsOpen}
        paymentOnClose={paymentOnClose}
        payMethod={payMethod}
        orderTotal={orderTotal}
      />
    </Stack>
  );
}

export default CheckoutCart;
