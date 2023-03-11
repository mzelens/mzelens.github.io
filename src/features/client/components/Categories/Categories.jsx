import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

import { categories } from '../../mocks/categoriesMock';

function Categories() {
  return (
    <Box as="section" className="container">
      <Heading>Categories</Heading>
      <Flex
        flexWrap="wrap"
        gap="2"
        justifyContent="space-between"
        marginTop="10px"
      >
        {categories.map((category, i) => {
          return (
            <LinkBox
              key={i}
              as="article"
              maxW={{ base: '100%', sm: '49%', md: '32%', lg: '24%' }}
              borderWidth="1px"
              rounded="md"
              overflow="hidden"
              _hover={{ transform: 'scale(1.01)' }}
              transition="0.3s"
            >
              <Box height="150px" overflow="hidden">
                <Image src={category.categoryThumb} />
              </Box>
              <Box p="3">
                <Heading fontSize="14px">
                  <LinkOverlay href="#">{category.category}</LinkOverlay>
                </Heading>
                <Text fontSize="12px">{category.restaurantCount} places</Text>
              </Box>
            </LinkBox>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Categories;
