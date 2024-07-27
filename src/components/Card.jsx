import React from 'react';
import { VStack, Image, HStack, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const YourComponent = ({ imageSrc, title, description }) => {
  return (
    <VStack
      color="black"
      backgroundColor="lightgray" // Changed background color to light gray
      borderRadius="xl"
      cursor="pointer"
      spacing={0} // Remove spacing between children
      boxShadow="md" // Added box shadow for a card-like effect
      overflow="hidden"
    >
      <Image src={imageSrc} borderTopRadius="xl" />
      <VStack spacing={4} p={4} alignItems='flex-start' w="100%">
        <HStack justifyContent="space-between" alignItems='center' w="100%">
          <Heading as='h3' size='md'>{title}</Heading>  
        </HStack>
        <Text color="#64748b" fontSize="lg">{description}</Text>
        <HStack spacing={2} alignItems="center">
          <Text fontWeight="bold" color="#3182CE">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#3182CE" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default YourComponent;
