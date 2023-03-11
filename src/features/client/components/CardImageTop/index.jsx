import React from 'react';
import {
  Card,
  CardBody,
  Stack,
  Heading,
  List,
  ListItem,
  ListIcon,
  Image,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function CardImageTop({ heading, list, imageSrc, imageAlt }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={imageSrc} borderRadius="lg" alt={imageAlt} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{heading}</Heading>
          <List spacing={3}>
            {list.map((item, index) => (
              <ListItem key={index}>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                {item}
              </ListItem>
            ))}
          </List>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardImageTop;
