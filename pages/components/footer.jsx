import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container maxW={"unset"} bg={"brand.500"} color="brand.300" mt={10}>
      <Container maxW={1200} p={5}>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Heading fontSize={"1.3rem"} fontFamily={"Adika"} color="brand.400">
              Social
            </Heading>
            <Flex gap={5} mt={5}>
              <Icon
                fontSize={"1.5rem"}
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "translateY(-0.3rem)",
                }}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Icon>
              <Icon
                fontSize={"1.5rem"}
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "translateY(-0.3rem)",
                }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Icon>
              <Icon
                fontSize={"1.5rem"}
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "translateY(-0.3rem)",
                }}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </Icon>
            </Flex>
          </Box>

          <Box>
            <Heading color="brand.400" fontSize={"1.3rem"} fontFamily={"Adika"}>
              Contact
            </Heading>
            <Flex flexDirection={"column"} mt={5}>
              <HStack gap={5}>
                <Text>Call:</Text>
                <Text>+237 670 850 414 / +237 653 955 513</Text>
              </HStack>
            </Flex>
          </Box>

          <Box>
            <Heading color="brand.400" fontSize={"1.3rem"} fontFamily={"Adika"}>
              About
            </Heading>
            <Flex flexDirection={"column"} mt={5}>
              <HStack gap={2}>
                <Text>Address:</Text>
                <small>Nsimeyong III, Damas Yaoundé, Cameroon</small>
              </HStack>
              <HStack gap={2} mt={3}>
                <Text>Registration Number:</Text>
                <small>RC/YAE/2019/B/1157</small>
              </HStack>
            </Flex>
          </Box>
        </Flex>
        <Text mt={10} textAlign="center">
          <small>
            &#x00A9; NALDCCAM<sup>&#x00AE;</sup> 2023 | All Rights Reserved
          </small>
        </Text>
      </Container>
    </Container>
  );
};

export default Footer;
