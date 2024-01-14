import { Flex, Heading, Image, Text, Center } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex p="5" align="center" gap="3">
            <Image src="Icon.jpg"  color="gray.500" alt="Ícone blog.bg"/>
            <Flex direction="column">    
                <Heading>Blob.G</Heading>
                <Text>Noticias do mundo dos códigos</Text>
            </Flex>
        </Flex>
    )
}