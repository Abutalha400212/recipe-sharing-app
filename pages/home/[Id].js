import BasicNavbar from "@/components/BasicNavBar";
import RecipeDetails from "@/components/card/RecipeDetails";
import { useRecipe } from "@/hook/useRecipe";
import { Grid, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export default function Details() {
  const router = useRouter();
  const { Id } = router.query;
  const { data, isError, error, isLoading } = useRecipe();
  if (isError) {
    console.log(error.message);
  }
  if (isLoading) {
    return (
      <Grid minH={"100vh"} placeItems={"center"}>
        <Spinner
          thickness="10px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Grid>
    );
  }
  const detail = data?.data?.data.filter((detail) => detail._id === Id)[0];
  return <div>{detail && <RecipeDetails detail={detail} />}</div>;
}
Details.getLayout = function getLayout(page) {
  return <BasicNavbar>{page}</BasicNavbar>;
};
