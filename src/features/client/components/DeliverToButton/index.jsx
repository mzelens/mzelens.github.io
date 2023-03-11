import { Button, Image, Text, Box, useDisclosure } from '@chakra-ui/react';
import locationUrl from '../../../../assets/location-icon.svg';
import arrowDownUrl from '../../../../assets/arrow-down-icon.svg';
import DeliverToModal from '../DeliverToModal';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';

function DeliverToButton({ isLoggedIn }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    location.pathname === '/checkout' ? setVisible(false) : setVisible(true);
  }, [location.pathname]);

  const customerPrimaryAddress = useSelector(
    (state) => state.customer.addressBook.filter((addy) => addy.primary)[0]
  );
  const customerPrimaryAddressString = `${customerPrimaryAddress.street} ${customerPrimaryAddress.building}-${customerPrimaryAddress.apartment}, ${customerPrimaryAddress.city}`;

  return (
    <>
      <Button
        display={visible ? 'flex' : 'none'}
        onClick={onOpen}
        variant="ghost"
        gap="10px"
      >
        <Image
          boxSize="30px"
          src={locationUrl}
          padding="5px"
          rounded="full"
          bg="blue.400"
        />
        <Text fontWeight="light">
          Delivery to
          <br />
          <Box as="span" color="blue.400" fontWeight="semibold" fontSize="14px">
            {isLoggedIn ? customerPrimaryAddressString : 'Somewhere..?'}
          </Box>
        </Text>
        <Image boxSize="20px" src={arrowDownUrl} />
      </Button>
      <DeliverToModal
        isLoggedIn={isLoggedIn}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default DeliverToButton;
