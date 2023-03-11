import { Box, Flex, Heading } from '@chakra-ui/react';

import { restaurants } from '../../mocks/restaurantsMock';
import RestaurantListCard from '../RestaurantListCard';

function RestaurantList({ isFeatured, selectedCategory }) {
  let restaurantsList = isFeatured
    ? restaurants.filter((item) => item.featured)
    : restaurants;

  if (selectedCategory && selectedCategory !== 'All') {
    restaurantsList = restaurantsList.filter((restaurant) =>
      restaurant.restaurantTags.includes(selectedCategory)
    );
  }

  return (
    <Box as="section" className="container">
      {selectedCategory ? (
        <Heading>{selectedCategory} restaurants</Heading>
      ) : (
        <Heading>All restaurants</Heading>
      )}
      <Flex
        flexWrap="wrap"
        gap="2"
        justifyContent="space-between"
        marginTop="10px"
      >
        {restaurantsList.map((restaurant, i) => {
          return <RestaurantListCard key={i} restaurant={restaurant} />;
        })}
      </Flex>
    </Box>
  );
}

export default RestaurantList;
