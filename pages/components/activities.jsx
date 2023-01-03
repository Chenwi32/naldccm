import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

const Activities = () => {
  return (
    <Container maxW={1200} mt={10}>
      <Flex gap={5}>
        <Box>
          <Image src="/images/ntuhsencampain.jpg" h={250} w={400} />

          <Text mt={5} textAlign={"center"} fontFamily={"Sofia"}>
            NALDCCAM Training Session
          </Text>
        </Box>
        <Box>
          <Image src="/images/ntuhsenfarm.png" h={250} w={400} />

          <Text mt={5} textAlign={"center"} fontFamily={"Sofia"}>
            One of NALDCCAM's Yarm Farms At Kumfutu
          </Text>
        </Box>
        <Box>
          <Image src="/images/ntuhsencomunact.jpg" h={250} w={400} />

          <Text mt={5} textAlign={"center"} fontFamily={"Sofia"}>
            NALDCCAM Community Activities
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Activities;
