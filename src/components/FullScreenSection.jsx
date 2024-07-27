import * as React from "react";
import { VStack, Box } from "@chakra-ui/react";

/**
 * FullScreenSection Component
 *
 * A versatile component that creates a full-screen section with centered content alignment.
 *
 * Props:
 * - children: The content to be displayed within the section.
 * - isDarkBackground: A boolean indicating whether the background is dark. This affects the text color.
 * - backgroundImage: The background image for the section.
 * - ...boxProps: Additional props to be spread onto the outer VStack for further customization.
 */
const FullScreenSection = ({ children, isDarkBackground, backgroundImage, ...boxProps }) => {
  return (
    <Box
      position="relative"
      width="100%"
      minHeight="100vh"
      overflow="hidden"
    >
      <Box
        backgroundImage={backgroundImage}
        backgroundSize="cover"
        backgroundPosition="center"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        opacity="0.5" // Adjust the opacity to make the background semi-transparent
        zIndex="0"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor={isDarkBackground ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"}
        zIndex="1"
      />
      <VStack
        position="relative"
        zIndex="2"
        color={isDarkBackground ? "white" : "black"}
        align="center"
        justify="center"
        minHeight="100vh"
        width="100%"
        {...boxProps}
      >
        {children}
      </VStack>
    </Box>
  );
};

export default FullScreenSection;
