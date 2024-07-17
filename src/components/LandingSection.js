import React from "react";
import { Avatar, Heading, VStack, Center } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatarImage from "../images/m1.jpg";

const greeting = "Hello, I am Mohammed! ";
const bio1 = "A web developer ⭐";
const bio2 = "specialised in React-Js";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#414833"
    px={{ base: 4, md: 0 }} // Adjust horizontal padding for different screen sizes
  >
    <VStack spacing={{ base: 6, md: 10 }} textAlign="center">
      <Avatar size="2xl" name="Mohammed Adil" src={avatarImage} />

      <Heading as="h4" size="md" noOfLines={1} color="white">
        {greeting}
      </Heading>

      <VStack spacing={6}>
        <Heading as="h1" size="xl" noOfLines={1} color="white">
          {bio1}
        </Heading>
        <Heading as="h1" size="xl" noOfLines={1} color="white">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
