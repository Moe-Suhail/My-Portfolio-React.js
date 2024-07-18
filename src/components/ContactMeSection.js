import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://http://localhost:3000//contactme", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#1b263b"
      py={[12, 16]} // Responsive padding on small and large screens
      spacing={8}
    >
      <VStack
        maxW="1024px" // Set maximum width for the form container
        mx="auto" // Center the form horizontally
        p={[4, 8]} // Responsive padding on small and large screens
        alignItems="flex-start"
        color="black" // Set text color to black
      >
        <Heading as="h1" id="contactme-section" size="2xl" mb={8} color="white">
          Contact me 📩
        </Heading>
        <Box
          p={6}
          rounded="md"
          w="100%"
          bg="#b9baa3" // Background color changed to #a4ac86
          boxShadow="lg"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <VStack spacing={6}>
              <FormControl
                isInvalid={
                  !!formik.errors.firstName && formik.touched.firstName
                }
                w="100%" // Ensure input takes full width
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  _focus={{ backgroundColor: "#cfe1b9" }} // Set focus color
                />
                <FormErrorMessage>
                  {formik.errors.firstName}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
                w="100%" // Ensure input takes full width
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  _focus={{ backgroundColor: "#cfe1b9" }} // Set focus color
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl w="100%"> {/* Ensure select takes full width */}
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  _focus={{ backgroundColor: "#cfe1b9" }} // Set focus color
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
                w="100%" // Ensure textarea takes full width
              >
                <FormLabel htmlFor="comment">Your message </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                  _focus={{ backgroundColor: "#cfe1b9" }} // Set focus color
                />
                <FormErrorMessage>
                  {formik.errors.comment}
                </FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="green"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
