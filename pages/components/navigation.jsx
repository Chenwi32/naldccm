import {
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navigation = () => {
  return (
    <Container p={0} maxW={"unset"} bg="brand.300">
      <Container p={"0 0.5rem"} maxW={1200}>
        <Menu>
          <Flex
            p={"0.5rem 0"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Link href="/">
              <Heading fontSize={"1.5rem"} color="brand.100">
                NALDCCAM
              </Heading>
            </Link>

            <MenuButton
              border="0"
              color="brand.600"
              bg={"unset"}
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              _hover={{
                bg: "",
              }}
              _active={{
                color: "brand.500",
              }}
              fontSize={"2rem"}
            />
            <MenuList boxShadow="lg">
              <Link href={"/about"}>
                <MenuItem border="0" bg="inherit">
                  About
                </MenuItem>
              </Link>

              <Link href={'/projects'}>
                <MenuItem border="0" bg="inherit">
                Our Projects
              </MenuItem>
              </Link>
              
            </MenuList>
          </Flex>
        </Menu>
      </Container>
    </Container>
  );
};

export default Navigation;
