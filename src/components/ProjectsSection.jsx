import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#e1e1e1" // Dark Blue background similar to Landing Section
      isDarkBackground
      p={8}
    >
      <VStack alignItems="center" spacing={8} width="100%">
        <Heading as="h1" id="projects-section" color="black">
          Featured Projects
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gridGap={8}
          width="100%"
          maxWidth="1280px"
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
            />
          ))}
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
