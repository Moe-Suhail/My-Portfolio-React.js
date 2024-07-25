import React from 'react';
import { VStack, Image, HStack, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const YourComponent = ({ imageSrc, title, description }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      borderRadius="xl"
      cursor="pointer"
      spacing={0} // Remove spacing between children
    >
      <Image src={imageSrc} borderTopRadius="xl" />
      <VStack spacing={4} p={4} alignItems='flex-start' w="100%">
        <HStack justifyContent="space-between" alignItems='center' w="100%">
          <Heading as='h3' size='md'>{title}</Heading>  
        </HStack>
        <Text color="#64748b" fontSize="lg">{description}</Text>
        <HStack>
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default YourComponent;
