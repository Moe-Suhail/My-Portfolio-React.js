import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import FullScreenSection from "./FullScreenSection";
import avatarImage from "../images/m1.jpg";
import pexelsImage from "../images/pexels.jpg";

const greeting = "Hello, I am Mohammed!";
const bio1 = "A web developer ⭐";
const bio2 = "specialised in React-Js";

const wordAnimation = {
  hidden: { opacity: 0, y: -50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundImage={`url(${pexelsImage})`}
    px={{ base: 4, md: 0 }}
  >
    <VStack spacing={{ base: 6, md: 10 }} textAlign="center">
      <Avatar size="2xl" name="Mohammed Adil" src={avatarImage} border="2px solid #FF9900" /> {/* Orange border for contrast */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.5 } },
        }}
      >
        {greeting.split(" ").map((word, index) => (
          <motion.span key={index} custom={index} variants={wordAnimation}>
            <Heading as="h4" size="md" noOfLines={1} color="#FFFFFF" display="inline">
              {word}{" "}
            </Heading>
          </motion.span>
        ))}
      </motion.div>

      <VStack spacing={6}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.5, delayChildren: greeting.split(" ").length * 0.5 } },
          }}
        >
          {bio1.split(" ").map((word, index) => (
            <motion.span key={index} custom={index} variants={wordAnimation}>
              <Heading as="h1" size="xl" noOfLines={1} color="#FF9900" display="inline"> {/* Orange color for bio1 */}
                {word}{" "}
              </Heading>
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0, transition: { delay: (greeting.split(" ").length + bio1.split(" ").length) * 0.5, type: "spring", stiffness: 100 } },
          }}
        >
          <Heading as="h1" size="xl" noOfLines={1} color="#D9D9D9"> {/* Light grey color for bio2 */}
            {bio2}
          </Heading>
        </motion.div>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
