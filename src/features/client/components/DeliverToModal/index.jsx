import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Input,
  Divider,
  Icon,
  Text,
} from '@chakra-ui/react';
import { BiHome } from 'react-icons/all.js';
import { useDispatch, useSelector } from 'react-redux';
import { setPrimaryAddress } from '../../../../store/reducers/customerReducer';

function DeliverToModal({ isOpen, onClose, isLoggedIn }) {
  const dispatch = useDispatch();

  const customerAddressBook = useSelector(
    (state) => state.customer.addressBook
  );
  const dispatchPrimaryAddress = (addressId) => {
    dispatch(setPrimaryAddress(addressId));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Change order details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            {isLoggedIn &&
              customerAddressBook?.map((address) => {
                const addressFormated = `${address.street} ${address.building}-${address.apartment}, ${address.city}`;
                const border = address.primary
                  ? '2px solid #4299e1'
                  : '2px solid lightgray';

                return (
                  <Button
                    onClick={() => dispatchPrimaryAddress(address.id)}
                    key={addressFormated}
                    border={border}
                    variant="unstyled"
                    position="relative"
                  >
                    {address.primary && (
                      <Icon
                        position="absolute"
                        left="5px"
                        top="2px"
                        as={BiHome}
                        boxSize={8}
                        color="white"
                        bg="blue.500"
                        padding="5px"
                        rounded="full"
                      />
                    )}

                    <Text>{addressFormated}</Text>
                  </Button>
                );
              })}
            <Divider />
            <Input
              placeholder={
                isLoggedIn
                  ? 'Add another address...'
                  : 'Add delivery address...'
              }
            />
          </Stack>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeliverToModal;
