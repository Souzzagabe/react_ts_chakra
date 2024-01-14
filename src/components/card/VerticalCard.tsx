import { Flex, Image, VStack, Text, Heading } from "@chakra-ui/react";

interface VerticalCardProps {
  card: {
    image: {
      url: string;
      alt: string;
    };
    title: string;
    content: string;
    publishDate: string;
  };
}

export default function VerticalCard({ card }: VerticalCardProps) {
  const { image, title, content, publishDate } = card;

  return (
    <Flex
      maxW="80%"
      borderRadius="8px"
      bgColor="gray.100"
      overflow="hidden"
      mt="30"
      mb="50"
    >
      <Image
        src={image.url}
        alt={image.alt}
        maxW="400px"
        maxH="400px"
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
        h="400px"
      >
        <Text 
        fontSize="sm" color="gray.500">
          {publishDate}
        </Text>
        <Heading fontSize="xl" size="lg">{title}</Heading>
        <Text fontSize="md" overflowY="auto">{content}</Text>
      </VStack>
    </Flex>
  );
}
