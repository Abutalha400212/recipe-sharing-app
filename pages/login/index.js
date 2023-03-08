import BasicNavbar from "@/components/BasicNavBar";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Link,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { UnlockIcon } from "@chakra-ui/icons";
import { useAuth } from "@/context/AuthContextProvider";
import { useRouter } from "next/router";
export default function Login() {
  const router = useRouter();
  const { login, loading, setLoading } = useAuth();
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      login(values.email, values.password).then(() => {
        setLoading(false);
        resetForm({});
        router.push("/");
        toast({
          title: "Account Logged In.",
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
      height="70vh"
      maxWidth={"100vw"}
      justifyContent="center"
      alignItems="center">
      <Stack mb="2" justifyContent="center" alignItems="center">
        <Icon w={12} h={12} as={UnlockIcon} />
        <Heading color="teal.400">Login</Heading>
        <Box minW={{ base: "356px", md: "468px" }}>
          <form onSubmit={formik.handleSubmit}>
            <Stack width={"full"} rowGap={3}>
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
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="/register">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
}

Login.getLayout = function getLayout(page) {
  return <BasicNavbar>{page}</BasicNavbar>;
};
