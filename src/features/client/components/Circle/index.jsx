import React from 'react';
import { Box, Text } from '@chakra-ui/react';

function Circle({ circleText, bodyText }) {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" width="33%">
      <div className="circle">{circleText}</div>
      {bodyText ? <Text>{bodyText}</Text> : <></>}
    </Box>
  );
}

export default Circle;
