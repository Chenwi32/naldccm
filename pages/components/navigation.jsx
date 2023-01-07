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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useAuth } from "./authprovider";
import { useRouter } from "next/router";


const Navigation = () => {
const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useAuth();

  const checkUser = () => {
    
      if (!user.uid) {
        onOpen();
      } else {
        router.push("/admindashboard");
      }
    
  };

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

              <Link href={"/projects"}>
                <MenuItem border="0" bg="inherit">
                  Our Projects
                </MenuItem>
              </Link>

              <MenuItem border="0" bg="inherit">
                <Text
                  p={0}
                  bg={""}
                  _hover={{
                    bg: "",
                  }}
                  onClick={checkUser}
                >
                  Dashboard
                </Text>
              </MenuItem>
            </MenuList>
          </Flex>
        </Menu>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>You are not logged in as an admin</ModalBody>

          <ModalFooter display={"flex"} justifyContent="space-between">
            <Button
              _hover={{
                bg: "",
              }}
              bg={"brand.500"}
              color="brand.300"
              mr={3}
              onClick={onClose}
            >
              Go back
            </Button>
            <Link href={"/login"}>
              <Button
                bg={"brand.100"}
                color="brand.300"
                _hover={{
                  bg: "",
                }}
                onClick={onClose}
              >
                Log In
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Navigation;
