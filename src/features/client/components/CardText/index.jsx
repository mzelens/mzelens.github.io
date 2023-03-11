import React from 'react';
import { Card, CardBody, Text, CardFooter, Box } from '@chakra-ui/react';

function CardText({ textBody, textFooter }) {
  return (
    <Card textAlign="center" alignItems="center" width="300px" m={5}>
      <CardBody>
        <Text>{textBody}</Text>
      </CardBody>
      <CardFooter>
        <Box>
          <Text>{textFooter}</Text>
        </Box>
      </CardFooter>
    </Card>
  );
}

export default CardText;
