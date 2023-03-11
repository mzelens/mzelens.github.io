import React, { useEffect } from 'react';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import { Flex, Alert, Text, Box } from '@chakra-ui/react';
import { steps } from '../../mocks/orderStepsMock';

function CustomerOrderSteps() {
  const { nextStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  useEffect(() => {
    const stepInterval = setInterval(() => {
      return activeStep === steps.length - 1 ? reset() : nextStep();
    }, 3000);
    return () => clearInterval(stepInterval);
  });

  const content = (message, icon) => (
    <Alert status="info" variant="subtle" className="order-status__alert">
      <Box width="60px" height="60px">
        {icon}
      </Box>
      <Text className="order-status__title">{message}</Text>
    </Alert>
  );

  return (
    <Flex flexDir="column" width="100%">
      <Steps
        activeStep={activeStep}
        state="loading"
        colorScheme="blue"
        mb="20px"
      >
        {steps.map(({ label, message, icon }) => (
          <Step label={label} key={label}>
            {content(message, icon)}
          </Step>
        ))}
      </Steps>
    </Flex>
  );
}

export default CustomerOrderSteps;
