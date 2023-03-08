import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  Icon,
  Code,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { BiLike } from "@react-icons/all-files/bi/BiLike";
import { BiChat } from "@react-icons/all-files/bi/BiChat";
import { BiShare } from "@react-icons/all-files/bi/BiShare";
export default function RecipeCard({
  recipe: { name, details, mealImg, _id, displayName },
}) {
  return (
    <NextLink href={`/home/${_id}`}>
      <Card maxW="md">
        <Image maxH={"60vh"} objectFit="cover" src={mealImg} alt={name} />
        <Flex justify={"space-between"} p={2}>
          <Code children={`# ${displayName ? displayName : "Abu Talha"}`} />
          <Code children={`# ${name}`} />
        </Flex>
        <Text p={2} textColor={"gray.500"} fontFamily={"serif"}>
          {details.length > 150 ? (
            <>
              {details.slice(0, 150) + "..."}{" "}
              <Link color="teal.500" href={`/home/${_id}`}>
                Read More
              </Link>{" "}
            </>
          ) : (
            details
          )}
        </Text>
        <Flex gap={2} p={2}>
          <IconButton>
            <Icon as={BiLike} />
          </IconButton>
          <IconButton>
            <Icon as={BiShare} />
          </IconButton>
        </Flex>
      </Card>
    </NextLink>
  );
}
