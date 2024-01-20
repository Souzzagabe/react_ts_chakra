import { Flex, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { customScrollbar } from "../../../../styles/styles";
import { HorizontalCardType } from "./types";

export default function HorizontalCard({ card }: HorizontalCardType) {
  const { image, title, content, publishDate } = card;

  return (
    <Flex
      maxW="850px"
      maxH="400px"
      borderRadius="8px"
      bgColor="gray.100"
      direction={["row"]}
      mt="50px"
    >
      <Image
        src={image.url}
        alt={image.alt}
        maxW={["100px", "250px", "300px", "300px", "300px"]}
        maxH={["250px", "300px", "300px", "300px"]}
        objectFit="cover"
        borderLeftRadius="8px"
        justifySelf="center"
      />
      <VStack
        p="16px"
        spacing={["5px", "16px"]}
        align="flex-start"
        maxW="350px"
        h={["200px", "300px", "300px"]}
      >
        {publishDate && (
          <Text fontSize="sm" color="gray.500" fontWeight="semibold">
            {publishDate}
          </Text>
        )}
        <Heading fontSize={["md", "2xl", "2xl"]}>{title}</Heading>
        <Text fontSize="md" overflowY="auto" css={customScrollbar}>
          {content}
        </Text>
      </VStack>
    </Flex>
  );
}
