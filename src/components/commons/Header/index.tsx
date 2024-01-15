import { Flex, Heading, Text } from "@chakra-ui/react";

export function Header() {

  return (
    <Flex
      gap="5"
      p="5"
      position="sticky"
      top="0"
      bgColor="white"
      boxShadow="xs"
      zIndex="2"
      background={"##D25804"}
      shadow={"1px 3px 8px rgba(0, 0, 0, 0.6)"}
    >
      <a href="/">
        <Flex align="center" gap="5">
          {/* <Image
            src="/Icon.jpg"
            color="gray.500"
            alt="Ícone blob.g"
            width="34px"
          /> */}
          <Flex
            direction="column"
            textShadow={"1px 1px 2px rgba(0, 0, 0, 0.5)"}
          >
            <Heading fontSize="2xl">Blog</Heading>
            <Text>news from the world of codes</Text>
          </Flex>
        </Flex>
      </a>
    </Flex>
  );
}
