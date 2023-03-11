import { Box, Heading, Flex } from '@chakra-ui/react';
import RestaurantInspectCard from '../RestaurantInspectCard';

function RestaurantInspectSection({ dealSection, cartOpened }) {
  return (
    <Box className="container">
      <Heading fontSize="24px">{dealSection.sectionName}</Heading>
      <Flex
        marginTop="10px"
        flexWrap="wrap"
        gap="20px"
        paddingBlock="20px"
        justifyContent="space-between"
      >
        {dealSection.deals.map((deal, i) => {
          return (
            <RestaurantInspectCard
              deal={deal}
              key={i}
              cartOpened={cartOpened}
            />
          );
        })}
      </Flex>
    </Box>
  );
}

export default RestaurantInspectSection;
