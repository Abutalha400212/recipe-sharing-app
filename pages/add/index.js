import BasicNavbar from "@/components/BasicNavBar";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useFormik } from "formik";
import { useAddRecipe } from "@/hook/useAddRecipe";
import { useAuth } from "@/context/AuthContextProvider";
import { useRouter } from "next/router";
export default function Add() {
  const {
    user: { email, displayName },
  } = useAuth();
  const { mutate: addRecipe, error, isError } = useAddRecipe();
  if (isError) {
    console.log(error.message);
  }
  const router = useRouter();
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      name: "",
      country: "",
      mealImg: "",
      details: "",
    },
    onSubmit: (values, { resetForm }) => {
      addRecipe({ ...values, displayName, email });
      resetForm({});
      router.push("/home");
      toast({
        title: "Recipe added.",
        status: "success",
        duration: 2000,
        isClosable: false,
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack
        maxW={{ base: "container.lg", lg: "container.sm" }}
        mx={{ base: "6", lg: "auto" }}
        gap={2}
        my={3}>
        <Heading mt={2} fontSize={"2xl"} textAlign="center">
          Add Recipe
        </Heading>
        <FormControl>
          <FormLabel>Recipe Name</FormLabel>
          <Input
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            type="text"
          />
          <FormHelperText>We'll give a proper name.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Country Name</FormLabel>
          <Input
            onChange={formik.handleChange}
            value={formik.values.country}
            type="text"
            name="country"
          />
          <FormHelperText>Which are famous for?</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Photo URL</FormLabel>
          <Input
            onChange={formik.handleChange}
            value={formik.values.mealImg}
            type="text"
            name="mealImg"
          />
          <FormHelperText>We'll share your Recipe Img.</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            onChange={formik.handleChange}
            value={formik.values.details}
            name="details"
          />
          <FormHelperText>
            How to prepare it in according to your Culture?
          </FormHelperText>
        </FormControl>
        <Button type="submit" colorScheme={"blue"}>
          Submit
        </Button>
      </Stack>
    </form>
  );
}
Add.getLayout = function getLayout(page) {
  return <BasicNavbar>{page}</BasicNavbar>;
};
