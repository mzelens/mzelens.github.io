import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Heading,
  Image,
  Box,
} from '@chakra-ui/react';
import { addToCart } from '../../../../store/reducers/cartReducer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function RestaurantInspectModal({ isOpen, onClose, deal }) {
  const [dealCount, setDealCount] = useState(1);
  const itemTotal = (dealCount * deal.recipePrice).toFixed(2);

  const onCloseCombined = () => {
    onClose();
    setDealCount(1);
  };

  const dispatch = useDispatch();

  const addItemToCart = (deal) =>
    dispatch(addToCart({ ...deal, quantity: dealCount }));

  return (
    <Modal isOpen={isOpen} onClose={() => onCloseCombined()}>
      <ModalOverlay />
      <ModalContent overflow="hidden">
        <ModalHeader padding="0">
          <Box height={{ base: '250px', md: '300px' }} overflow="hidden">
            <Image
              src={deal.recipeThumb}
              width="100%"
              objectFit="cover"
              position="relative"
            />
          </Box>
          <Heading margin="20px 20px 0 20px" fontSize="24px">
            {deal.recipeName}
          </Heading>
          <Flex alignItems="center">
            <Text margin="20px" fontSize="16px">
              €{deal.recipePrice}
            </Text>
            {deal.popular && (
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
              >
                Popular
              </Text>
            )}
          </Flex>
        </ModalHeader>
        <ModalCloseButton bg="lightgray" rounded="xl" />
        <ModalBody padding="20px">
          <Text fontSize="14px">{deal.recipeBio}</Text>
        </ModalBody>

        <ModalFooter>
          <Flex width="100%" justifyContent="space-between">
            <Flex bg="lightgray" alignItems="center" rounded="md">
              <Button
                variant="ghost"
                onClick={() =>
                  setDealCount((prevCount) =>
                    prevCount === 1 ? prevCount : --prevCount
                  )
                }
              >
                -
              </Button>
              <Text paddingInline="10px">{dealCount}</Text>
              <Button
                variant="ghost"
                onClick={() => setDealCount((prevCount) => ++prevCount)}
              >
                +
              </Button>
            </Flex>
            <Button
              bg="blue.400"
              color="white"
              onClick={() => addItemToCart(deal)}
            >
              Add to order
              <Box paddingLeft="20px" as="span">
                {itemTotal}
              </Box>
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default RestaurantInspectModal;
