import { memo, useState, } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Button,
  IconButton,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const isDrawerVisible = ["none", "none", "flex", "flex"].includes(
    window.getComputedStyle(document.body).getPropertyValue("display")
  );

  return (
    <Flex
      gap="5"
      p="4"
      bgColor="white"
      boxShadow="xs"
      background="#14151E"
      shadow={"1px 1px 8px rgba(0, 0, 0, 0.6)"}
      justify="space-around"
    >
      <Link href="/">
        <Flex align="center" gap="5">
          <Flex
            direction="column"
            textShadow={"1px 1px 2px rgba(0, 0, 0, 0.5)"}
          >
            <Heading fontSize="2xl" color="#FFF">
              bibicode .
            </Heading>
          </Flex>
        </Flex>
      </Link>
      <Flex display={["none", "none", "flex", "flex"]}>
        <Button
          colorScheme="teal"
          variant="solid"
          h=""
          ml="10px"
          onClick={() => {
            navigate("/home");
          }}   
        >
          Home
        </Button>
        <Button colorScheme="teal" variant="solid" h="" ml="10px">
          Contact
        </Button>
        <Button colorScheme="teal" variant="solid" h="" ml="10px" mr="10px">
          About
        </Button>
      </Flex>
      {isDrawerVisible && (
        <IconButton
          h="32px"
          justifyContent="center"
          alignItems="center"
          aria-label="Open Menu"
          size="md"
          icon={<HamburgerIcon />}
          display={["flex", "flex", "none", "none"]}
          onClick={handleToggle}
        />
      )}
      <Drawer placement="right" onClose={handleToggle} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            fontWeight="bold"
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
          >
            Menu
          </DrawerHeader>
          <DrawerBody>
            <List spacing={4}>
              <ListItem>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  h="30px"
                  w="100%"
                  boxShadow="1px 1px 2px rgba(0, 0, 0, 0.3)"
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  Home
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  h="30px"
                  w="100%"
                  boxShadow="1px 1px 2px rgba(0, 0, 0, 0.3)"
                >
                  Contact
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  h="30px"
                  w="100%"
                  boxShadow="1px 1px 2px rgba(0, 0, 0, 0.3)"
                >
                  About
                </Button>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default memo(Header);