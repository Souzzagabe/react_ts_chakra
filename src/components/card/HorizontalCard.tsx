import {
  Flex,
  Image,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import { customScrollbar } from "../../styles/styles";

interface HorizontalCardProps {
  card: {
    image: {
      url: string;
      alt: string;
    };
    title: string;
    content: string;
    publishDate?: string;
  };
}

export default function HorizontalCard({ card }: HorizontalCardProps) {
  const { image, title, content, publishDate } = card;

  return (
    <Flex
      w="100vw"
      borderRadius="8px"
      bgColor="gray.100"
      overflow="hidden"
      mt="30"
      mb="50"
      maxW="800px"
      p="8px"
    >
      <Image
        src={image.url}
        alt={image.alt}
        maxW={["200px", "300px", "400px", "500px"]}
        maxH={["200px", "300px", "400px", "500px"]}
        objectFit="cover"
        borderLeftRadius="8px"
      />
      <VStack
        textAlign="left"
        p="16px"
        spacing="4"
        align="flex-start"
        flex="1"
        minW="200px"
        h={["200px", "300px", "400px"]}
      >
        {publishDate && (
          <Text fontSize="sm" color="gray.500" fontWeight="semibold">
            {publishDate}
          </Text>
        )}
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
