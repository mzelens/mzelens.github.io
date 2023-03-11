import React from 'react';
import { useSelector } from 'react-redux';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import './index.scss';
import CouriersOrderCard from '../CouriersOrderCard';
import CourierTable from '../CourierTableOrders';

function CouriersDashboard() {
  const orderList = useSelector((state) => state.orders.list);
  const readyForDeliveryOrderList = orderList.filter(
    (order) => order.status === 'pending'
  );
  const deliveredOrderList = orderList.filter(
    (order) => order.status === 'delivered'
  );

  return (
    <div className="couriers-dashboard">
      <Tabs
        size={{ base: 'md', md: 'lg' }}
        isFitted
        variant="enclosed"
        colorScheme="green"
      >
        <TabList className="couriers-dashboard__tablist">
          <Tab>Pending orders</Tab>
          <Tab>Order history</Tab>
        </TabList>

        <TabPanels className="couriers-dashboard__tabpanels">
          <TabPanel p={0}>
            {readyForDeliveryOrderList.length ? (
              <CourierTable>
                {readyForDeliveryOrderList.map((order) => (
                  <CouriersOrderCard key={order.id} order={order} />
                ))}
              </CourierTable>
            ) : (
              <h3> No orders at this moment!</h3>
            )}
          </TabPanel>
          <TabPanel p={0}>
            {deliveredOrderList.length ? (
              <CourierTable>
                {deliveredOrderList.map((order) => (
                  <CouriersOrderCard key={order.id} order={order} />
                ))}
              </CourierTable>
            ) : (
              <h3> No order history available</h3>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default CouriersDashboard;
