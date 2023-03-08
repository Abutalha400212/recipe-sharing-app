import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  useToast,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BiExit } from "@react-icons/all-files/bi/BiExit";
import NextLink from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContextProvider";
import { useRouter } from "next/router";
export default function BasicNavbar({ children }) {
  const router = useRouter();
  const {
    user: { email, displayName },
    logOut,
  } = useAuth();
  const { isOpen, onToggle } = useDisclosure();
  const toast = useToast();
  const handleLogOut = () => {
    logOut();
    router.push("/");
    toast({
      title: "Account Sign Out.",
      status: "success",
      duration: 2000,
      isClosable: false,
    });
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <NextLink href={"/"}>
            <Image src={"/logo.png"} alt={"Logo"} height="40" width="40" />
          </NextLink>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          alignItems={"center"}
          spacing={6}>
          {!email && (
            <NextLink href={"/login"}>
              <Button fontSize={"sm"} fontWeight={400} variant={"link"}>
                Sign In
              </Button>
            </NextLink>
          )}
          {!email && (
            <NextLink href={"/register"}>
              <Button
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
          )}
          {email && displayName && <Avatar size={"sm"} name={displayName} />}
          {email && (
            <IconButton onClick={handleLogOut}>
              <Icon w={6} h={6} as={BiExit} />
            </IconButton>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      {children}
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NextLink href={navItem.href ?? "#"}>
                <Link
                  as={"div"}
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </NextLink>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Stack spacing={4}>
      <NextLink href={href || "#"}>
        <Flex
          py={2}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}>
            {label}
          </Text>
        </Flex>
      </NextLink>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Add Recipe",
    href: "/add",
  },
  {
    label: "About Us",
    href: "/about",
  },
];
