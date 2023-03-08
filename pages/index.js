import BasicNavbar from "@/components/BasicNavBar";
import { useAuth } from "@/context/AuthContextProvider";
import { Box, Button, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  const {
    user: { email },
  } = useAuth();
  return (
    <Box
      mt={{ lg: 1 }}
      minH={"90vh"}
      backgroundImage={
        "url(https://img.freepik.com/free-photo/ingredients-cabbage-carrot-pie-cabbage-carrots-eggs-flour-milk-butter-spices-white-background_127032-2682.jpg)"
      }
      backgroundSize="cover"
      backgroundPosition={"center"}>
      <Grid minH={"80vh"} placeItems={"center"}>
        <Flex
          gap={5}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems="center">
          <Text
            textAlign={"center"}
            maxW={{ base: "100vw", lg: "80vw" }}
            fontFamily={"monospace"}
            fontSize={{ base: "20px", lg: "30px" }}>
            Welcome to our recipe sharing platform, you are sharing something
            special and unique that will make them feel like they are an
            essential part of your life.
          </Text>
          {!email && (
            <Flex gap={3}>
              <NextLink href={"/register"}>
                <Button
                  size={"lg"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.main"}
                  _hover={{
                    bg: "brand.main-dark",
                  }}>
                  Sign Up
                </Button>
              </NextLink>
              <NextLink href={"/login"}>
                <Button
                  fontSize={"sm"}
                  fontWeight={600}
                  colorScheme={"blue"}
                  size={"lg"}
                  _hover={{
                    bg: "brand.main-dark",
                  }}>
                  Sign In
                </Button>
              </NextLink>
            </Flex>
          )}
          {email && (
            <NextLink href={"/home"}>
              <Button colorScheme={"blue"} size={"lg"}>
                Explore{" "}
              </Button>
            </NextLink>
          )}
        </Flex>
      </Grid>
    </Box>
  );
}

Home.getLayout = function getLayout(page) {
  return <BasicNavbar>{page}</BasicNavbar>;
};
