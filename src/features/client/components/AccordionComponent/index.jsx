import React from 'react';
import {
  Accordion,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Text,
} from '@chakra-ui/react';

function AccordionComponent({ title, body }) {
  return (
    <Accordion allowToggle m={5}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              <Text as="b">{title}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>{body}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionComponent;
