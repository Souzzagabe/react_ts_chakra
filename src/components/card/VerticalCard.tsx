import { Flex, Image, VStack, Text, Heading } from '@chakra-ui/react';

interface VerticalCardProps {
    image: {
        url: string;
        alt: string;
    };
    title: string;
    content: string;
    publishDate: string;
}

export default function VerticalCard({ image, title, content, publishDate }: VerticalCardProps) {
    return (
        <Flex direction="column" alignItems="center" justifyContent="center">
            <Image src={image.url} alt={image.alt} maxW="800px" />
            <VStack textAlign="center" mt="4">
                <Text>{publishDate}</Text>
                <Heading>{title}</Heading>
                <Text>{content}</Text>
            </VStack>
        </Flex>
    );
}