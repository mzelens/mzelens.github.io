import { Heading, ListItem, UnorderedList, Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function FooterArticle({ article }) {
  return (
    <Box width="100%" textAlign={{ base: 'center', md: 'left' }}>
      <Heading
        marginBottom="10px"
        fontSize={{ base: '14px', md: '14px', lg: '16px' }}
        color="gray"
      >
        {article.footerArticleHeading}
      </Heading>
      <UnorderedList
        listStyleType="none"
        fontSize={{ base: '12px', md: '12px', lg: '14px' }}
        marginInlineStart="0"
        display="flex"
        gap="5px"
        flexDir={{ base: 'column', sm: 'row', md: 'column' }}
        justifyContent="space-between"
      >
        {article.footerArticleListItems.map((listItem, i) => {
          return (
            <ListItem key={i}>
              <Link as={RouterLink} to={listItem.to || ''}>
                {listItem.content}
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
}

export default FooterArticle;
