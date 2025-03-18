import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Container,
  HStack,
  Text,
  Flex,
  Button,
  Link as ChakraLink,
  useColorMode,
} from "@chakra-ui/react";
import { PlusSquareIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, red.400,pink.400)"}
          bgClip={"text"}
        >
          <ChakraLink as={ReactRouterLink} to="/">
            Product Store
          </ChakraLink>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <ChakraLink as={ReactRouterLink} to="/create">
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </ChakraLink>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
