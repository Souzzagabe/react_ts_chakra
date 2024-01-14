import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex p="5" position="sticky" top="0" bgColor="white" boxShadow="xs" zIndex="2">
      <Image src="Icon.jpg" color="gray.500" alt="Ícone blog.bg" />
      <Heading>Blob.G</Heading>
      <Text>Notícias do mundo dos códigos</Text>
    </Flex>
  );
}