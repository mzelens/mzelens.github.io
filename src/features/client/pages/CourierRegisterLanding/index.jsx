import React from 'react';
import './index.scss';
import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import CardWithImage from '../../components/CardImageRight';
import CardText from '../../components/CardText';
import AccordionComponent from '../../components/AccordionComponent';
import CardImageTop from '../../components/CardImageTop';
import Circle from '../../components/Circle';
import UserForm from '../../components/UserForm/UserForm';
import { useRef } from 'react';

function CourierRegisterLanding() {
  const [smallerScreen] = useMediaQuery('(max-width: 750px)');
  const targetRef = useRef();

  const handleClick = () => {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box width="100%" maxWidth="1120px" margin="0 auto">
      <Box>
        <Flex flexDirection="column" alignItems="center">
          <Text as="b" fontSize="5xl" textAlign="center">
            Become A Courier!
          </Text>
          <Button width="150px" onClick={handleClick}>
            Submit A Form
          </Button>
        </Flex>
      </Box>
      <Box m={10}>
        <Flex flexDirection="column" alignItems="center" textAlign="center">
          <Text as="b" fontSize="4xl">
            Why is it worth becoming a courier?
          </Text>
          <Text width="50%">
            As courier-partners, you can deliver orders to customers from local
            restaurants and shops - in the evening, for a few hours during lunch
            or at any other time you want. It&apos;s easy to join - you
            don&apos;t need any experience!
          </Text>
        </Flex>
      </Box>
      <Flex
        flexDirection={smallerScreen ? 'column' : 'row'}
        gap="10"
        m={10}
        alignItems="center"
      >
        <CardImageTop
          heading="Competitive Earnings"
          list={[
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          ]}
          imageSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          imageAlt="image alt"
        />
        <CardImageTop
          heading="Competitive Earnings"
          list={[
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          ]}
          imageSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          imageAlt="image alt"
        />
        <CardImageTop
          heading="Competitive Earnings"
          list={[
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
          ]}
          imageSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          imageAlt="image alt"
        />
      </Flex>
      <Box m={10}>
        <Flex flexDirection="column" alignItems="center" textAlign="center">
          <Text as="b" fontSize="4xl">
            Get started in 3 easy steps
          </Text>
          <Flex flexDirection="row" m={5}>
            <Circle circleText="1" bodyText="Submit your application" />
            <Circle circleText="2" bodyText="Get approved" />
            <Circle circleText="3" bodyText="Deliver & Earn" />
          </Flex>
          <Button width="150px" onClick={handleClick}>
            Submit A Form
          </Button>
        </Flex>
      </Box>
      <CardWithImage
        heading="A few things you'll need to get started"
        text="Check our simple application requirements:"
        list={['Item1', 'Item2']}
        imageSrc="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        imageAlt="Cafe"
      />
      <Box m={10}>
        <Flex
          flexDirection={smallerScreen ? 'column' : 'row'}
          alignItems={smallerScreen ? 'center' : 'normal'}
          justifyContent="space-between"
        >
          <CardText
            textBody='"As a student, free schedule gives me the opportunity to
        earn extra income while maintaining the highest level of
        education."'
            textFooter="Name"
          />
          <CardText
            textBody='"Freedom of choice is one of my core values. I get the
                  opportunity to be my own boss, to work whenever I want and to
                  manage my income easily. I am really happy with this
                  platform."'
            textFooter="Name"
          />
          <CardText
            textBody="&quot;Wolt gives me the opportunity to earn extra income in my
                  spare time. It's also fun to drive around the city, take
                  in the sights and meet people. I have been a Wolt Courier
                  Partner for a year now and I can't complain about
                  anything.&quot;"
            textFooter="Name"
          />
        </Flex>
      </Box>
      <Box m={10} ref={targetRef}>
        <Flex flexDirection="column" alignItems="center">
          <Text as="b" fontSize="4xl" textAlign="center">
            Sign up today and you&apos;ll hit the road in no time!
          </Text>
          <UserForm />
        </Flex>
      </Box>
      <Box m={10}>
        <Box textAlign="center">
          <Text as="b" fontSize="4xl">
            Frequently asked questions
          </Text>
        </Box>
        <Box mb={5}>
          <AccordionComponent
            title="How long does the application process take?"
            body="Typically, it takes less than 30 minutes to fill out the
              application. You'll need to
              create an account, enter in a few basic details, and upload the
              required documents."
          />
          <AccordionComponent
            title="Are there other requirements to deliver?"
            body="You'll need to be 18 years or older, and in possession of a
              valid work permit. Additional requirements vary depending on
              whether you want to deliver using a scooter, a car, or a bike.
              You'll be informed about which documents are required based
              on your selected contract type."
          />
        </Box>
      </Box>
      <Box m={10}>
        <Flex flexDirection="column" textAlign="center">
          <Text as="b" fontSize="4xl">
            About
          </Text>
          <Text>About delivery app text awesome</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default CourierRegisterLanding;
