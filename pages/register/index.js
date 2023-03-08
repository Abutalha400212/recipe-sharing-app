import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Link,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { InfoIcon } from "@chakra-ui/icons";
import BasicNavbar from "@/components/BasicNavBar";
import { useAuth } from "@/context/AuthContextProvider";
import { useRouter } from "next/router";
export default function Register() {
  const { register, updateUser, setLoading, loading } = useAuth();
  const toast = useToast();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      register(values.email, values.password).then(() => {
        updateUser(values.name);
        setLoading(false);
        resetForm({});
        router.push("/");
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 2000,
          isClosable: false,
        });
      });
    },
  });
  return (
    <Flex
      flexDirection="column"
      height="80vh"
      maxWidth={"100vw"}
      justifyContent="center"
      alignItems="center">
      <Stack mb="2" justifyContent="center" alignItems="center">
        <Icon w={12} h={12} as={InfoIcon} />
        <Heading color="teal.400">Register</Heading>
        <Box minW={{ base: "356px", md: "468px" }}>
          <form onSubmit={formik.handleSubmit}>
            <Stack width={"full"} rowGap={3}>
              <FormControl>
                <FormLabel>Your Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </FormControl>
              <Button
                isLoading={loading}
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full">
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have an account?{" "}
        <Link color="teal.500" href="/register">
          Login
        </Link>
      </Box>
    </Flex>
  );
}

Register.getLayout = function getLayout(page) {
  return <BasicNavbar>{page}</BasicNavbar>;
};
