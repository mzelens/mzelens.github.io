import { Table, Thead, Tr, Th, TableContainer, Tbody } from '@chakra-ui/react';

function CourierTableOrders({ children }) {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>Order id</Th>
            <Th>Restaurant name</Th>
            <Th>Customer name</Th>
            <Th>status</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
}

export default CourierTableOrders;
