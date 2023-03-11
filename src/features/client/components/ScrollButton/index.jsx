import { Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

function ScrollButton({ rightButton, id, ...rest }) {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const containerElement = document.querySelector(`${id}`);
    if (containerElement) {
      setContainer(containerElement);
    }
  }, [id]);

  const handleClick = () => {
    if (container) {
      container.scrollLeft += rightButton ? 160 : -160;
    }
  };

  return (
    <Button {...rest} zIndex={4} onClick={handleClick}>
      {rightButton ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </Button>
  );
}

export default ScrollButton;
