import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Center,
  Flex,
  Stack,
  Heading,
  Image,
  useToast,
} from '@chakra-ui/react';

import SwedbankUrl from '../../../../assets/swedbank-icon.png';
import CashUrl from '../../../../assets/cash-icon.svg';
import PayseraUrl from '../../../../assets/paysera-icon.png';
import { useNavigate } from 'react-router-dom';

function PaymentModal({
  paymentIsOpen,
  paymentOnClose,
  payMethod,
  orderTotal,
}) {
  const toast = useToast();
  const navigate = useNavigate();

  const cancelPayment = () => {
    paymentOnClose();
    toast({
      title: `Something went wrong!`,
      status: 'error',
      isClosable: true,
    });
  };

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

  const payMethodWidth = payMethod === 'PaySera' ? '100px' : '30px';

  return (
    <Modal isOpen={paymentIsOpen} onClose={paymentOnClose} size="full">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader marginTop="30vh" textAlign="center">
          <Flex justifyContent="center" gap="10px">
            <Image src={payMethodUrl} width={payMethodWidth} />
            <Text>Payment window</Text>
          </Flex>
        </ModalHeader>
        <ModalBody>
          <Center>
            <Flex gap="20px">
              <Stack
                padding="10px 20px"
                border="1px solid lightgray"
                rounded="md"
              >
                <Heading fontSize="16px">Order nr.: 1856715813</Heading>
                <Text>Total: {orderTotal} EUR</Text>
                <Heading fontSize="16px">Merchant:</Heading>
                <Text>Name: BestFoodDelivery, UAB</Text>
              </Stack>
              <Stack>
                <Button
                  onClick={() =>
                    navigate('/order-status', {
                      state: { orderTotal, payMethod },
                    })
                  }
                >
                  Accept
                </Button>
                <Button onClick={cancelPayment}>Decline</Button>
              </Stack>
            </Flex>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default PaymentModal;
