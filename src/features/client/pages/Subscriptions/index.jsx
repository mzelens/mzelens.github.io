import React from 'react';

import RestaurantHero from '../../components/RestaurantSignUp/RestaurantHero';
import RestaurantPromo from '../../components/RestaurantSignUp/RestaurantPromo';
import SubscriptionPlans from '../../components/RestaurantSignUp/SubscriptionPlans';
import SubmitForm from '../../components/RestaurantSignUp/SubmitForm';
import { ChakraProvider } from '@chakra-ui/react';
import './index.scss';

function Subscriptions() {
  return (
    <ChakraProvider>
      <RestaurantHero />
      <RestaurantPromo />
      <SubscriptionPlans />
      <SubmitForm />
    </ChakraProvider>
  );
}

export default Subscriptions;
