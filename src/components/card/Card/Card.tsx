import { Flex, Image, VStack, Text, Heading } from "@chakra-ui/react";
import { customScrollbar } from "../../../styles/styles";
import { CardType } from "./types.d";

interface CardProps {
    card: CardType;
}

export function Card({ card }: CardProps) {
  const { title, content, image, publishDate } = card;

  return (
    <Flex
      maxW="800px"
      minW="200px"
      direction="column"
      borderRadius="8px"
      bgColor="gray.100"
      mt="30"
      mb="50"
      p="8px"
    >
      {image && (
        <Image
          src={image.url}
          alt={image.alt}
          w="100%"
          h="100%" 
          objectFit="cover"
          borderTopRadius="8px"
        />
      )}

      <VStack
        p="16px"
        gap="16px"
        align="flex-start"
        minW="200px"
        h="100%"
        overflow="auto"
      >
        {publishDate && 
          <Text fontSize="sm" color="gray.500" fontWeight="semibold">
            {publishDate}
          </Text>
        }

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
