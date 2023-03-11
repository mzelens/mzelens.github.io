import React from 'react';
import {
  Box,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Image,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

function CardWithImage({ heading, text, list, imageSrc, imageAlt }) {
  return (
    <Box m={10}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Stack>
          <CardBody>
            <Heading as="h1" fontSize="4x1">
              {heading}
            </Heading>
            <Text py="2">{text}</Text>
            <List spacing={3}>
              {list.map((item, index) => (
                <ListItem key={index}>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  {item}
                </ListItem>
              ))}
            </List>
          </CardBody>
        </Stack>
        {imageSrc ? (
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '700px' }}
            src={imageSrc}
            alt={imageAlt}
          />
        ) : (
          <></>
        )}
      </Card>
    </Box>
  );
}

export default CardWithImage;
