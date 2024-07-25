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
      backgroundColor="#00274D" // Dark Blue background
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
        <Heading as="h1" id="contactme-section" size="2xl" mb={8} color="#BDC3C7">
          Contact Me
        </Heading>
        <Box
          p={6}
          rounded="md"
          w="100%"
          bg="#C0C0C0" // Silver background for form container
          boxShadow="lg"
          borderWidth="1px"
          borderColor="#BDC3C7" // Light Grey for borders
        >
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <VStack spacing={6}>
              <FormControl
                isInvalid={!!formik.errors.firstName && formik.touched.firstName}
                w="100%" // Ensure input takes full width
              >
                <FormLabel htmlFor="firstName" color="black">Name</FormLabel> {/* Label color set to black */}
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  _focus={{ backgroundColor: "#B0B0B0" }} // Lighter grey on focus
                  bg="#E0E0E0" // Light grey for input background
                  color="black" // Text color in input field
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
                w="100%" // Ensure input takes full width
              >
                <FormLabel htmlFor="email" color="black">Email Address</FormLabel> {/* Label color set to black */}
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  _focus={{ backgroundColor: "#B0B0B0" }} // Lighter grey on focus
                  bg="#E0E0E0" // Light grey for input background
                  color="black" // Text color in input field
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl w="100%"> {/* Ensure select takes full width */}
                <FormLabel htmlFor="type" color="black">Type of enquiry</FormLabel> {/* Label color set to black */}
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  _focus={{ backgroundColor: "#B0B0B0" }} // Lighter grey on focus
                  bg="#E0E0E0" // Light grey for select background
                  color="black" // Text color in select field
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={!!formik.errors.comment && formik.touched.comment}
                w="100%" // Ensure textarea takes full width
              >
                <FormLabel htmlFor="comment" color="black">Your message</FormLabel> {/* Label color set to black */}
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                  _focus={{ backgroundColor: "#B0B0B0" }} // Lighter grey on focus
                  bg="#E0E0E0" // Light grey for textarea background
                  color="black" // Text color in textarea
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                bg="#00274D" // Dark Blue background to match the landing section
                color="white" // Text color in the button
                _hover={{ bg: "#001f3f" }} // Darker blue on hover
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
