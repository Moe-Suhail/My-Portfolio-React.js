import React, {useEffect} from "react";
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
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: 'hireMe',
      comment:''
    },
    onSubmit: (values) => {
      submit('https://http://localhost:3000//contactme',values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required'),
      email: Yup.string().email("Invalid email address").required('Required'),
      comment:Yup.string().min(25,"Must be at least 25 characters").required('Required'),
    }),
  });
  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message); 
      if (response.type === 'success') {
        formik.resetForm()
      }
  }
},[response])

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#656d4a"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  sx={{
                    _focus: {
                      backgroundColor: "#a4ac86",
                    },
                  }}
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input 
                  sx={{
                    _focus: {
                      backgroundColor: "#a4ac86",
                    },
                  }}
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                  id="type" 
                  name="type"
                  sx={{
                    _focus: {
                      backgroundColor: "#a4ac86",
                    },
                  }}
                  {...formik.getFieldProps('type')}
                >
                  <option value="hireMe" style={{ backgroundColor: "#414833", color: "white" }}>
                    Freelance project proposal
                  </option>
                  <option value="openSource" style={{ backgroundColor: "#414833", color: "white" }}>
                    Open source consultancy session
                  </option>
                  <option value="other" style={{ backgroundColor: "#414833", color: "white" }}>
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  sx={{
                    _focus: {
                      backgroundColor: "#a4ac86",
                    },
                  }}
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="green" width="full" isLoading={isLoading}>
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
