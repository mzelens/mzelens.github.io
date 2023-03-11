import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import './index.css';

import Discovery from '../../components/Discovery';
import RestaurantList from '../../components/RestaurantList';
import FilterByCategory from '../../components/FilterByCategory';
import { restaurantItems, groceryItems } from '../../../../constants';

function ClientLanding() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Flex as="section" flexDir="column" gap="20px" mt="50px">
      <FilterByCategory
        restaurantItems={restaurantItems}
        groceryItems={groceryItems}
        categoryId={'scroll2'}
        setSelectedCategory={setSelectedCategory}
      />
      <Discovery />
      <RestaurantList selectedCategory={selectedCategory} />
    </Flex>
  );
}

export default ClientLanding;
