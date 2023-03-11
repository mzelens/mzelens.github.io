import {
  Flex,
  ListItem,
  UnorderedList,
  Box,
  Image,
  Button,
  Link,
} from '@chakra-ui/react';
import React from 'react';

import appleStoreUrl from '../../../../assets/get-on-apple-store.svg';
import googleStoreUrl from '../../../../assets/get-on-google-store.png';
import { footerArticles } from '../../mocks/footerArticlesMock';
import FooterArticle from '../FooterArticle';

function Footer() {
  return (
    <Box
      as="footer"
      bg="black"
      color="white"
      padding={{ base: '20px', md: '50px 20px 15px 20px' }}
    >
      <Flex
        justifyContent="space-between"
        flexDir={{ base: 'column', md: 'row' }}
        alignItems="center"
        gap="20px"
      >
        <Box
          display="flex"
          flexDir={{ base: 'column', sm: 'row', md: 'column' }}
          gap="10px"
        >
          <Link>
            <Image src={appleStoreUrl} minW="120px" maxW="120px" />
          </Link>
          <Link>
            <Image src={googleStoreUrl} minW="120px" maxW="120px" />
          </Link>
        </Box>
        {footerArticles.map((article) => {
          return (
            <FooterArticle
              key={article.footerArticleHeading}
              article={article}
            />
          );
        })}
      </Flex>
      <Flex
        justifyContent="space-between"
        marginTop="50px"
        flexDir={{ base: 'column', md: 'row' }}
      >
        <UnorderedList
          listStyleType="none"
          fontSize="12px"
          marginInlineStart="0"
          display="flex"
        >
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              Lithuania
            </Button>
          </ListItem>
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              English
            </Button>
          </ListItem>
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              Accesibility
            </Button>
          </ListItem>
        </UnorderedList>
        <UnorderedList
          listStyleType="none"
          marginInlineStart="0"
          display="flex"
          flexWrap="wrap"
        >
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              Accesibility Statemnet
            </Button>
          </ListItem>
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              Terms and Conditions
            </Button>
          </ListItem>
          <ListItem>
            <Button
              _hover={{ textDecoration: 'underline' }}
              fontSize="12px"
              variant="ghost"
            >
              Privacy policy
            </Button>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Box>
  );
}

export default Footer;
