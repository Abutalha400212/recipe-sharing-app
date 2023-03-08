import BasicNavbar from "@/components/BasicNavBar";
import RecipeCard from "@/components/card/RecipeCard";
import { useRecipe } from "@/hook/useRecipe";
import {
  Box,
  Container,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Heading,
  Input,
  Spinner,
} from "@chakra-ui/react";

export default function Home() {
  const { data, isLoading } = useRecipe();
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
  const recipies = data?.data?.data;
  return (
    <>
      <Flex maxW={{ base: "md", lg: "2xl" }} mx="auto" my={5}>
        <FormControl>
          <Input type="search" placeholder="Search your favorite recipe" />
        </FormControl>
      </Flex>
      <Grid
        my={1}
        mx={"auto"}
        maxW={"container.xl"}
        placeItems="center"
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={5}>
        {recipies?.map((recipe) => (
          <GridItem>
            <RecipeCard key={recipe._id} recipe={recipe} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <BasicNavbar>{page}</BasicNavbar>;
};
