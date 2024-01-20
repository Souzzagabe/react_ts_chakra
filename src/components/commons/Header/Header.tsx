import { memo } from "react";

import { NavLink } from "react-router-dom";

import { Flex, Heading, Button } from "@chakra-ui/react";
// import { IconButton } from "@chakra-ui/icons";

export function Header() {
  return (
    <Flex
      gap="5"
      p="4"
      bgColor="white"
      boxShadow="xs"
      zIndex="2"
      background="#14151E"
      shadow={"1px 1px 8px rgba(0, 0, 0, 0.6)"}
      justify="space-around"
    >
      <a href="/">
        <Flex align="center" gap="5">
          <Flex
            direction="column"
            textShadow={"1px 1px 2px rgba(0, 0, 0, 0.5)"}
          >
            <Heading fontSize="2xl" color="#FFF">
              bibicode .
            </Heading>
          </Flex>
        </Flex>
      </a>
      <Flex>
        <Button colorScheme="teal" variant="solid" h="" ml="10px">
          Home
        </Button>
        <Button colorScheme="teal" variant="solid" h="" ml="10px">
          Contact
        </Button>
        <Button colorScheme="teal" variant="solid" h=""ml="10px" mr="10px">
          About
        </Button>
      </Flex>
    </Flex>
  );
}

export default memo(Header);