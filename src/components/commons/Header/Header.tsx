import { memo } from "react";

import { Flex, Heading} from "@chakra-ui/react";
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
    >
      <a href="/">
        <Flex align="center" gap="5">
          <Flex
            direction="column"
            textShadow={"1px 1px 2px rgba(0, 0, 0, 0.5)"}
          >
            <Heading fontSize="2xl" color="#FFF">bibicode .</Heading>
          </Flex>
        </Flex>
      </a>
    </Flex>
  );
}

export default memo(Header)