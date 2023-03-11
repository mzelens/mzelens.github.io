import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../store/reducers/cartReducer';
import RestaurantInspectModal from '../RestaurantInspectModal';

function RestaurantInspectCard({ deal, cartOpened }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentItem = useSelector((store) =>
    store.cart.list.find((item) => item.id === deal.id)
  );

  const dispatch = useDispatch();
  const addItemToCart = (deal) => dispatch(addToCart({ ...deal, quantity: 1 }));
  const handleAddClick = () => {
    if (deal?.hasConfigurability) {
      onOpen();
    }
    addItemToCart(deal);
  };

  return (
    <Flex
      gap="5px"
      width="100%"
      maxW={
        cartOpened
          ? { base: '100%', xl: '45%' }
          : { base: '100%', lg: '45%', xl: '30%' }
      }
      border={
        currentItem?.quantity ? '2px solid #4299e1' : '1px solid lightgray'
      }
      rounded="md"
      padding="10px"
      alignItems="center"
      _hover={{ transform: 'scale(1.01)' }}
    >
      <Flex justifyContent="space-between">
        <Flex flexDir="column" justifyContent="space-between">
          <Box marginBottom="20px" textAlign="left" maxW="80%">
            <Heading fontSize="18px" mb="5px">
              {currentItem?.quantity && (
                <Text
                  as="span"
                  rounded="xl"
                  color="blue.400"
                  fontSize="16px"
                  marginRight="5px"
                >
                  {currentItem.quantity} x
                </Text>
              )}
              {deal.recipeName}
            </Heading>
            {deal?.popular && (
              <Text
                fontSize={{
                  base: '10px',
                  md: '12px',
                  lg: '14px',
                }}
                bg="blue.400"
                color="white"
                padding="4px 5px"
                rounded="md"
                fontWeight="600"
                display="inline-block"
              >
                Popular
              </Text>
            )}
            <Text fontSize="14px" wordBreak="break-word" color="lightslategray">
              {deal.recipeBio}
            </Text>
          </Box>
          <Flex alignItems="center">
            <Text fontSize="16px" paddingRight="20px">
              €{deal.recipePrice}
            </Text>
            <Button
              variant="outline"
              border="2px solid #4299e1"
              _hover={{ border: '2px solid #38A169' }}
              onClick={handleAddClick}
              mr="5px"
              size="md"
            >
              Add to basket
            </Button>
          </Flex>
        </Flex>
        <Box overflow="hidden" rounded="md" maxW={{ base: '40%', md: '50%' }}>
          <Image src={deal.recipeThumb} height="100%" objectFit="cover" />
        </Box>
      </Flex>
      <RestaurantInspectModal deal={deal} isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default RestaurantInspectCard;
