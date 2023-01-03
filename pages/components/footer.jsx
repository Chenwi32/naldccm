import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

     const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container maxW={"unset"} p={0} bg={"brand.500"} color="brand.300" mt={10}>
      <Container maxW={1200} p={5}>
        <Flex
          justifyContent={"space-between"}
          flexDirection={isLargerThan700 ? "row" : "column"}
        >
          <Box>
            <Heading fontSize={"1.3rem"} fontFamily={"Adika"} color="brand.400">
              Social
            </Heading>
            <Flex gap={5} mt={3}>
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
            <Heading
              mt={isLargerThan700 ? 0 : 10}
              color="brand.400"
              fontSize={"1.3rem"}
              fontFamily={"Adika"}
            >
              Contact
            </Heading>
            <Flex flexDirection={"column"} mt={3}>
              <VStack alignItems="flex-start">
                <Text>Call:</Text>
                <Text>+237 670 850 414 / +237 653 955 513</Text>
              </VStack>
            </Flex>
          </Box>

          <Box>
            <Heading
              mt={isLargerThan700 ? 0 : 10}
              color="brand.400"
              fontSize={"1.3rem"}
              fontFamily={"Adika"}
            >
              About
            </Heading>
            <Flex flexDirection={"column"} mt={3}>
              <VStack  alignItems="flex-start">
                <Text>Address:</Text>
                <small>Nsimeyong III, Damas Yaoundé, Cameroon</small>
              </VStack>
              <VStack  mt={3} alignItems="flex-start">
                <Text>Registration Number:</Text>
                <small>RC/YAE/2019/B/1157</small>
              </VStack>
            </Flex>
          </Box>
        </Flex>
        <Text mt={10} >
          <small>
            &#x00A9; NALDCCAM<sup>&#x00AE;</sup> 2023 | All Rights Reserved
          </small>
        </Text>
      </Container>
    </Container>
  );
};

export default Footer;
