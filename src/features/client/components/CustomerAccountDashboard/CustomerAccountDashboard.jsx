import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CustomerAccountWelcome from '../CustomerAccountWelcome/CustomerAccountWelcome';
import CustomerAccountPayment from '../CustomerAccountPayment/CustomerAccountPayment';
import CustomerAccountAddress from '../CustomerAccountAddress/CustomerAccountAddress';
import CustomerAccountOrders from '../CustomerAccountOrders/CustomerAccountOrders';
import CustomerAccountSettings from '../CustomerAccountSettings/CustomerAccountSettings';

import './CustomerAccountDashboard.scss';

function CustomerAccountDashboard({ activeTab = 0 }) {
  const customer = useSelector((state) => state.customer);

  const [currentTab, setCurrentTab] = useState(activeTab);
  useEffect(() => setCurrentTab(activeTab), [activeTab]);

  return (
    <div className="customer-dashboard container">
      <Tabs
        size={{ base: 'md', md: 'lg' }}
        index={currentTab}
        isFitted
        variant="enclosed"
      >
        <TabList className="customer-dashboard__tablist">
          <Tab onClick={() => setCurrentTab(0)}>Personal Info</Tab>
          <Tab onClick={() => setCurrentTab(1)}>Payment Methods</Tab>
          <Tab onClick={() => setCurrentTab(2)}>Addresses</Tab>
          <Tab onClick={() => setCurrentTab(3)}>Order History</Tab>
          <Tab onClick={() => setCurrentTab(4)}>Settings</Tab>
        </TabList>

        <TabPanels className="customer-dashboard__tabpanels">
          <TabPanel p={0}>
            <CustomerAccountWelcome customer={customer} />
          </TabPanel>

          <TabPanel p={0}>
            <CustomerAccountPayment customer={customer} />
          </TabPanel>

          <TabPanel p={0}>
            <CustomerAccountAddress customer={customer} />
          </TabPanel>

          <TabPanel p={0}>
            <CustomerAccountOrders customer={customer} />
          </TabPanel>

          <TabPanel p={0}>
            <CustomerAccountSettings customer={customer} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default CustomerAccountDashboard;
