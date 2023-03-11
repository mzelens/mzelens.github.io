import { Button } from '@chakra-ui/react';

const CategoryButton = ({ category, onClick, buttonColor }) => {
  return (
    <Button
      onClick={onClick}
      display="block"
      minWidth="fit-content"
      fontSize="20px"
      borderRadius="lg"
      color={buttonColor === 'blue' ? 'white' : 'black'}
      colorScheme={buttonColor}
    >
      {category}
    </Button>
  );
};

export default CategoryButton;
