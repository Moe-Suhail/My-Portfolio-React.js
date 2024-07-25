import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: mhmd1999.adil@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Moe-Suhail",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/mohammed-adil-hassan-75a7b5261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const Header = () => {
  const handleClick = (anchor) => (event) => {
    event.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="999" // Ensure the header is always on top
      bg="black" // Changed background to black
      px={4} // Padding on small screens
      py={4} // Increased padding for larger height
      boxShadow="md" // Add a shadow for better visibility
      textAlign="center" // Center align text
      lineHeight="1.5" // Adjust line height for better readability
    >
      <Box
        maxW="1280px"
        mx="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack spacing={4}>
          {socials.map((social) => (
            <Link href={social.url} key={social.url} color="white" fontSize="2xl">
              <FontAwesomeIcon icon={social.icon} />
            </Link>
          ))}
        </HStack>
        <HStack spacing={8}>
          <Link href="#projects" onClick={handleClick("projects")} color="white" fontSize="lg">
            Projects
          </Link>
          <Link href="#contactme" onClick={handleClick("contactme")} color="white" fontSize="lg">
            Contact Me
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
