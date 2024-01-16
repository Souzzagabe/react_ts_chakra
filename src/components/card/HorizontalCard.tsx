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
    maxW="850px"
    maxH="400px"
    borderRadius="8px"
    bgColor="gray.100"
    direction={['column', 'row']}
    mt="50px"
    >
      <Image
        src={image.url}
        alt={image.alt}
        maxW={['100px', '250px', '300px', '300px', '300px']}
        maxH={['100px', '250px', '300px', '300px', '300px']}
        objectFit="cover"
        borderLeftRadius="8px"
        alignSelf="center"
        justifySelf="center"
        p={['5px', '0px']}
      />
      <VStack
        p="16px"
        spacing={['5px', '16px']}
        align="flex-start"
        maxW="350px"
        h={['200px', '300px', '300px']}
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
