import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarImage from "../images/m1.jpg"
const greeting = "Hello, I am Mohammed!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#414833"
  >
    <VStack spacing={10}>
      <Avatar size="2xl"
        name='Mohammed Adil'
        src={avatarImage} />
      
      <Heading as='h4' size='md' noOfLines={1}> {greeting}
      </Heading>
      <VStack spacing={6}>
        <Heading as='h1' size='3xl'noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as='h1' size='3xl'noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
