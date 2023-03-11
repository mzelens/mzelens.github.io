import { Box, Heading, Flex } from '@chakra-ui/react';
import { restaurantInspectMock } from '../../mocks/restaurantInspectMock';
import RestaurantInspectForLanding from '../RestaurantInspectForLanding';
import ScrollButton from '../ScrollButton';
import './index.scss';

function Discovery() {
  return (
    <Box as="section" className="container">
      <Heading>Discover</Heading>
      <Flex alignItems="center" mt={5} position="relative">
        <ScrollButton
          rightButton={false}
          left="10"
          position="absolute"
          id={'#discovery-item-list'}
        />
        <Flex
          gap="20px"
          padding="20px"
          width="100%"
          overflowX="scroll"
          id="discovery-item-list"
        >
          {restaurantInspectMock.restaurantMenu.map((dealSection) => {
            {
              return dealSection.deals.map((item, i) => (
                <RestaurantInspectForLanding item={item} key={i} />
              ));
            }
          })}
        </Flex>
        <ScrollButton
          rightButton={true}
          right="10"
          position="absolute"
          id={'#discovery-item-list'}
        />
      </Flex>
    </Box>
  );
}

export default Discovery;
