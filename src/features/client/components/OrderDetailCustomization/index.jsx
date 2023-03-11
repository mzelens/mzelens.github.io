import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { paymentsMethods } from '../../../../constants';
import SwedbankUrl from '../../../../assets/swedbank-icon.png';
import PayseraUrl from '../../../../assets/paysera-icon.png';
import CashUrl from '../../../../assets/cash-icon.svg';
import bicycleUrl from '../../../../assets/bicycle-icon.svg';

import OrderParametersModal from '../../components/OrderParametersModal';
import CheckoutItemCard from '../../components/CheckoutItemCard';
import CheckoutContactCheck from '../../components/CheckoutContactCheck';
import { useSelector } from 'react-redux';

function OrderDetailCustomization({ payMethod, setPayMethod }) {
  const {
    isOpen: deliveryAddressIsOpen,
    onOpen: deliveryAddressOnOpen,
    onClose: deliveryAddressOnClose,
  } = useDisclosure();

  const {
    isOpen: paymentOptionIsOpen,
    onOpen: paymentOptionOnOpen,
    onClose: paymentOptionOnClose,
  } = useDisclosure();

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const cartItems = useSelector((store) => store.cart.list);
  const customerInfo = useSelector((store) => store.customer);
  const primaryAddress = customerInfo.addressBook.filter(
    (addy) => addy.primary
  )[0];
  const [deliveryAddress, setDeliveryAddress] = useState(
    `${primaryAddress.street} ${primaryAddress.building}-${primaryAddress.apartment}, ${primaryAddress.city}`
  );

  const payMethodUrl = (() => {
    switch (payMethod) {
      case 'Swedbank':
        return SwedbankUrl;
      case 'PaySera':
        return PayseraUrl;
      case 'Cash':
        return CashUrl;
    }
  })();

  return (
    <Stack spacing="20px">
      <Stack spacing={3}>
        <Heading fontSize="28px">Delivery method and time</Heading>
        <Button
          variant="outline"
          onClick={deliveryAddressOnOpen}
          display="flex"
          justifyContent="space-between"
        >
          <Image src={bicycleUrl} width="30px" />
          <Text>{deliveryAddress}</Text>
          <ChevronRightIcon />
        </Button>

        <CheckoutContactCheck />

        <OrderParametersModal
          isOpen={deliveryAddressIsOpen}
          onClose={deliveryAddressOnClose}
          header="Delivery method and time"
          options={customerInfo.addressBook}
          setStateFn={setDeliveryAddress}
          section="addresses"
        />
      </Stack>

      <Stack spacing={3}>
        <Heading fontSize="28px">Selected items</Heading>
        <Stack>
          {cartItems &&
            cartItems.map((dish) => {
              return <CheckoutItemCard dish={dish} key={dish.recipeName} />;
            })}
          <Button onClick={goBack}>Add more items</Button>
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Heading fontSize="28px">Payment details</Heading>

        <Button
          variant="outline"
          onClick={paymentOptionOnOpen}
          display="flex"
          justifyContent="space-between"
        >
          <Image src={payMethodUrl} width="30px" />
          <Text>{payMethod}</Text>
          <ChevronRightIcon />
        </Button>

        <OrderParametersModal
          isOpen={paymentOptionIsOpen}
          onClose={paymentOptionOnClose}
          header="Payment option"
          options={paymentsMethods}
          setStateFn={setPayMethod}
        />
      </Stack>
    </Stack>
  );
}

export default OrderDetailCustomization;
