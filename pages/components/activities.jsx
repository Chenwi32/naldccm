import { Box, Container, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

const Activities = () => {

const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container maxW={1200} mt={10} p={1}>
      <Flex gap={5} flexDirection={isLargerThan700? 'row' : 'column'}>
        <Box>
          <Image
            src="/images/ntuhsencampain.jpg"
            h={250}
            w={400}
            alt="training session"
          />

          <Text mt={5} textAlign={"center"} fontFamily={"Sofia"}>
            NALDCCAM Training Session
          </Text>
        </Box>
        <Box>
          <Image
            src="/images/ntuhsenfarm.png"
            h={250}
            w={400}
            alt="Yarm farm"
          />

          <Text mt={5} textAlign={"center"} fontFamily={"Sofia"}>
            One of NALDCCAM's Yarm Farms At Kumfutu
          </Text>
        </Box>
        <Box>
          <Image
            src="/images/ntuhsencomunact.jpg"
            h={250}
            w={400}
            alt="Community activities"
          />

          <Text mt={5} textAlign={"center"} fontFamily={"Sofia"}>
            NALDCCAM Community Activities
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Activities;
