import { Box, FormControl, FormLabel, Switch } from '@chakra-ui/react';

function CheckoutContactCheck() {
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="10px 20px"
      border="1px solid lightgray"
      rounded="md"
    >
      <FormLabel
        htmlFor="no-contact-delivery"
        mb="0"
        fontWeight="normal"
        fontSize="18px"
        lineHeight="24px"
      >
        No-contact Delivery
        <br />
        <Box
          as="span"
          fontWeight="light"
          fontSize="15px"
          letterSpacing="-0.2px"
          color="blackAlpha.600"
        >
          Please leave the order in front of my door
        </Box>
      </FormLabel>
      <Switch id="no-contact-delivery" />
    </FormControl>
  );
}

export default CheckoutContactCheck;
