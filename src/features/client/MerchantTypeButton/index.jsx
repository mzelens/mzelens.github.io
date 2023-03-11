import { Button } from '@chakra-ui/react';

function MerchantTypeButton({
  item,
  index,
  activeMerchantTypeIndex,
  handleCategoryTypeClick,
}) {
  return (
    <Button
      borderRadius="lg"
      display="block"
      minWidth="fit-content"
      fontSize="20px"
      onClick={() => handleCategoryTypeClick(item.name, index)}
      color={index === activeMerchantTypeIndex ? 'white' : 'black'}
      colorScheme={index === activeMerchantTypeIndex ? 'blue' : 'white'}
    >
      {item.icon}
      {item.name}
    </Button>
  );
}

export default MerchantTypeButton;
