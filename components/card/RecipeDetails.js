import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Code,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";
import { HiLocationMarker } from "@react-icons/all-files/hi/HiLocationMarker";
import React from "react";
import { BsArrowRightShort } from "@react-icons/all-files/bs/BsArrowRightShort";
export default function RecipeDetails({ detail }) {
  const { displayName, email, details, name, mealImg, country } = detail;
  return (
    <Grid
      placeItems={"center"}
      gap={3}
      p={5}
      templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}>
      <Stack rowGap={5}>
        <Image
          maxH={"70vh"}
          borderRadius={10}
          objectFit="cover"
          src={mealImg}
          alt={name}
        />
        <Heading size={"lg"}>
          {" "}
          Posted By :{displayName ? displayName : "Abu Talha"}
        </Heading>
        <Text fontSize={"20px"}>
          {" "}
          Contact Email : {email ? email : "abutalha141999@gmail.com"}
        </Text>
      </Stack>

      <Stack rowGap={4}>
        {" "}
        <Heading size={"lg"}> Recipe Name : {name}</Heading>
        <Flex alignItems={"center"}>
          <Icon w={10} h={10} as={HiLocationMarker} />
          <Text fontSize={"20px"}> Where is famous for ? : {country}</Text>
        </Flex>
        <Text size={"sm"} color="gray.700">
          {details}
        </Text>
        <Flex justifyContent={"center"} gap={2}>
          <Icon color={"green.500"} w={7} h={7} as={AiFillStar} />
          <Icon color={"green.500"} w={7} h={7} as={AiFillStar} />
          <Icon color={"green.500"} w={7} h={7} as={AiFillStar} />
          <Icon color={"green.500"} w={7} h={7} as={AiFillStar} />
          <Icon color={"green.500"} w={7} h={7} as={AiFillStar} />
        </Flex>
        <Flex gap={2}>
          <Input placeholder="Review" type="text" />
          <Button type="button">
            <BsArrowRightShort size={30} />
          </Button>
        </Flex>
      </Stack>
    </Grid>
  );
}
