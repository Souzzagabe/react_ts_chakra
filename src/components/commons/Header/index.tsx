import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex gap="5" p="5" position="sticky" top="0" bgColor="white" boxShadow="xs" zIndex="2">
      <a href="/">
        <Flex align="center" gap="5">
          <Image src="/Icon.jpg" color="gray.500" alt="Ícone blob.g" width="34px" />
          <Flex direction="column">
            <Heading fontSize="2xl">blob.g</Heading>
            <Text>Notícias do mundo dos códigos</Text>
          </Flex>
        </Flex>
      </a>
    </Flex>
  );
}