import { Flex, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { customScrollbar } from "../../styles/styles";

interface CardProps {
  card: {
    title: string;
    content: string;
    image: {
      url: string;
      alt: string;
    };
    publishDate: string;
  };
}

export function Card({ card }: CardProps) {
  const { title, content, image, publishDate } = card;

  return (
    <Flex
      w="100vw"
      direction={"column"}
      borderRadius="8px"
      bgColor="gray.100"
      mt="30"
      mb="50"
    >
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
          w={"100%"}
          h={"100%"}
          maxH={"100%"}
          objectFit={"cover"}
          borderTopRadius={"8px"}
        />
      )}

      <VStack
        p={"16px"}
        gap={"16px"}
        align={"flex-start"}
        minW={"100px"}
        h={"100%"}
        overflow={"auto"}
      >
        <Text fontSize="sm" color="gray.500" fontWeight="semibold">
          {publishDate}
        </Text>
        <Heading fontSize="xl" size="lg">
          {title}
        </Heading>
        <Text fontSize="md" overflowY="auto" css={customScrollbar}>
          {content}
        </Text>
      </VStack>
    </Flex>
  );
}
