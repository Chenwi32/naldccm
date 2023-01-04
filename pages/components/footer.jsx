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
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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
              Follow us on
            </Heading>
            <Flex gap={5} mt={3}>
              <a
                href="https://www.facebook.com/profile.php?id=100063924069677&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  fontSize={"1.5rem"}
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "translateY(-0.3rem)",
                  }}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Icon>
              </a>

              <a
                href="https://www.instagram.com/naldccam/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  fontSize={"1.5rem"}
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "translateY(-0.3rem)",
                  }}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Icon>
              </a>

              <a
                href="https://youtube.com/@naldccam"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  fontSize={"1.5rem"}
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "translateY(-0.3rem)",
                  }}
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </Icon>
              </a>
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
              <VStack alignItems="flex-start">
                <Text>Address:</Text>
                <small>Nsimeyong III, Damas Yaoundé, Cameroon</small>
              </VStack>
              <VStack mt={3} alignItems="flex-start">
                <Text>Registration Number:</Text>
                <small>RC/YAE/2019/B/1157</small>
              </VStack>
            </Flex>
          </Box>
        </Flex>
      </Container>

      <Container bg="brand.300" color={"brand.500"} maxW={"unset"}>
        <Flex
          m={"auto"}
          mt={10}
          maxW={1200}
          p={2}
          justifyContent={"space-between"}
          flexDirection={isLargerThan700? 'row' : 'column'}
        >
          <Text>
            <small>
              &#x00A9; NALDCCAM<sup>&#x00AE;</sup> 2023 | All Right Reserved
            </small>
          </Text>

          <Flex gap={5}>
            <Link href={""}>
              <Text textDecoration={"underline"}>
                <small>Terms of use</small>
              </Text>
            </Link>

            <Link href={""}>
              <Text textDecoration={"underline"}>
                <small>Privacy Policy</small>
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Container>
  );
};

export default Footer;
