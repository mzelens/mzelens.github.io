import {
  Button,
  Text,
  Flex,
  Heading,
  Image,
  Box,
  Center,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  deleteItem,
} from '../../../../store/reducers/cartReducer';
import { DeleteIcon } from '@chakra-ui/icons';

function CartSideBar({ cartItems }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const increaseQuantity = (id) => dispatch(increaseItemQuantity(id));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity(id));
  const deleteItemFromCart = (id) => dispatch(deleteItem(id));

  const orderTotal = cartItems.length
    ? cartItems
        .reduce((acc, curr) => {
          const currValue = +curr.recipePrice;
          return acc + currValue * curr.quantity;
        }, 0)
        .toFixed(2)
    : '0';

  return (
    <Flex height="100%" direction="column" position="relative">
      <Box
        bg="white"
        borderTop="1px solid lightgray"
        borderBottom="1px solid lightgray"
        padding="10px 0"
      >
        <Flex direction="column">
          <Stack padding="0 20px" alignItems="left">
            <Text fontSize="20px" color="rgb(118, 118, 118)">
              Your order from
            </Text>
            <Heading mt="0" fontSize="26px">
              BFD.LT
            </Heading>
          </Stack>
          <Box
            padding="0px 20px"
            mt="20px"
            mb="20px"
            maxHeight="200px"
            overflow="auto"
          >
            {cartItems.map((item, i) => {
              const itemTotal = (+item.recipePrice * item.quantity).toFixed(2);
              return (
                <Flex
                  key={i}
                  padding="5px 0"
                  justifyContent="space-between"
                  borderBottom="1px solid lightgrey"
                >
                  <Flex>
                    <Center
                      overflow="hidden"
                      rounded="md"
                      height="60px"
                      marginRight="10px"
                      minWidth="100px"
                      width="30%"
                      maxHeight="150px"
                    >
                      <Image src={item.recipeThumb} rounded="md" />
                    </Center>
                    <Center>
                      <Box>
                        <Heading fontSize="16px">{item.recipeName}</Heading>
                        <Text fontSize="14px" marginTop="10px" color="blue.400">
                          €{itemTotal}
                        </Text>
                      </Box>
                    </Center>
                  </Flex>
                  <Center>
                    <Flex
                      alignItems="center"
                      gap="10px"
                      rounded="md"
                      padding="5px"
                    >
                      <Button
                        onClick={() => decreaseQuantity(item.id)}
                        size="sm"
                        bg="white"
                        rounded="full"
                        variant="outline"
                      >
                        -
                      </Button>
                      <Text>{item.quantity}</Text>
                      <Button
                        size="sm"
                        bg="white"
                        rounded="full"
                        variant="outline"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => deleteItemFromCart(item.id)}
                        size="sm"
                        bg="white"
                        rounded="full"
                        variant="outline"
                      >
                        <DeleteIcon />
                      </Button>
                    </Flex>
                  </Center>
                </Flex>
              );
            })}
          </Box>
          <Spacer />
          <Box>
            <Button
              width="100%"
              bg="blue.400"
              color="white"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              onClick={() => navigate('/checkout')}
              rounded="lg"
              borderRadius="24px"
            >
              <Box as="p">
                <Box
                  as="span"
                  padding="2px 8px"
                  bg="white"
                  rounded="xl"
                  color="blue.400"
                  fontSize="12px"
                  marginRight="10px"
                >
                  {cartItems.length}
                </Box>
                Go to checkout
              </Box>
              <Text>{orderTotal}</Text>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default CartSideBar;
