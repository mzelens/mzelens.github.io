import { Box, Heading, Image, Text, Flex, Button } from '@chakra-ui/react';

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clockUrl from '../../../../assets/clock-icon.svg';
import CartSideBar from '../../components/CartSideBar';
import RestaurantInspectSection from '../../components/RestaurantInspectSection';

function RestaurantInspect() {
  const restaurantInfo = useLoaderData();
  const cartItems = useSelector((store) => store.cart.list);

  const cartOpened = cartItems.length ? true : false;

  return (
    <Flex
      as="section"
      maxWidth="1240px"
      width="100%"
      justifyContent="space-between"
      margin="0 auto"
    >
      <Box p="0 10px" mt="50px">
        <Box position="relative" rounded="xl" overflow="hidden">
          <Image
            src={restaurantInfo.restaurantThumb}
            position="absolute"
            left="0"
            right="0"
            top={{ base: '0', lg: '-20vw' }}
            zIndex="-2"
            width="100vw"
            objectFit="cover"
          />
          <Box
            bg="black"
            opacity="0.4"
            position="absolute"
            left="0"
            right="0"
            top="-50vh"
            zIndex="-1"
            width="100%"
            height="200vh"
          ></Box>

          <Box
            className="container"
            paddingBlock="100px"
            color="white"
            paddingInline="30px"
          >
            <Heading>{`${restaurantInfo.restaurantName} (${restaurantInfo.restaurantAddress})`}</Heading>
            <Text>{restaurantInfo.restaurantBio}</Text>
          </Box>
        </Box>
        <Box bg="white" borderBottom="1px solid lightgray">
          <Flex
            className="container"
            alignItems="center"
            paddingBlock="15px"
            gap="15px"
            flexWrap="wrap"
          >
            <Flex gap="10px">
              <Image src={clockUrl} width="15px" />
              <Text>{restaurantInfo.restaurantWorkingHours}</Text>
            </Flex>
            <Box gap="10px">
              <Text>☆ {restaurantInfo.restaurantRating}</Text>
            </Box>
            <Button variant="ghost" color="blue.400" gap="10px">
              <Box
                as="span"
                color="white"
                padding="1px 9px "
                bg="blue.400"
                rounded="xl"
                marginRight="10px"
              >
                i
              </Box>
              See more information
            </Button>
          </Flex>
        </Box>
        <Flex padding={{ base: 0, sm: '0 10px' }} bg="white" gap="10px">
          <Box bg="white" paddingTop="20px" width="100%" flex="6">
            {restaurantInfo.restaurantMenu.map((dealSection, i) => {
              return (
                <RestaurantInspectSection
                  key={i}
                  dealSection={dealSection}
                  cartOpened={cartOpened}
                />
              );
            })}
          </Box>
        </Flex>
      </Box>
      <Box
        borderLeft="1px solid lightgray"
        display={cartOpened ? { base: 'none', lg: 'block' } : 'none'}
        width="100%"
        maxWidth="450px"
      >
        <Box maxWidth="450px" position="fixed" padding="20px 10px 0 10px">
          <CartSideBar cartItems={cartItems} />
        </Box>
      </Box>
    </Flex>
  );
}

export default RestaurantInspect;
