import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useState } from 'react';
import courierList from '../../mocks/courier';

function CourierSelectionModal({ isOpen, onClose }) {
  const [waitingResponse, setWaitingResponse] = useState(false);
  const toast = useToast();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Couriers available</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TableContainer>
            <Table variant="striped" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th>time to pick-up</Th>
                  <Th>delivery time</Th>
                  <Th>rating</Th>
                  <Th>status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {courierList.map((courier) => {
                  const [selected, setSelected] = useState(false);

                  const courierLogic = () => {
                    setWaitingResponse(true);
                    setSelected(true);

                    setTimeout(() => {
                      setWaitingResponse(false);
                      setSelected(false);

                      // toast({
                      //   title: 'Courier Declined',
                      //   description: 'Select other courier',
                      //   status: 'error',
                      //   duration: 9000,
                      //   isClosable: true,
                      // });

                      toast({
                        title: 'Courier accepted',
                        description: 'Order now in order history',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      });
                      onClose();
                    }, 2000);
                  };
                  return (
                    <Tr key={`${courier.firstName} ${courier.lastName}`}>
                      <Td>{courier.timeToPickUp} min.</Td>
                      <Td>{courier.timeToDelivery} min.</Td>
                      <Td>{courier.rating.toFixed(1)} ☆</Td>
                      <Td>
                        <Button
                          isDisabled={waitingResponse}
                          onClick={courierLogic}
                        >
                          {selected ? <Spinner /> : 'Select'}
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </ModalBody>

        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CourierSelectionModal;
