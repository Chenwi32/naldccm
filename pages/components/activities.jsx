import { Box, Container, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";

const Activities = () => {

const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <Container maxW={1200} mt={10} p={1}>
      <Flex gap={5} flexDirection={isLargerThan700 ? "row" : "column"}>
        <Box>
          <Image
            src="/images/ntuhsencampain.jpg"
            h={250}
            w={400}
            alt="training session"
          />

          <Text mt={5} textAlign={"center"} fontFamily={"Roboto"}>
            <small>
               NALDCCAM Training Session
            </small>
           
          </Text>
        </Box>
        <Box>
          <Image
            src="/images/ntuhsenfarm.png"
            h={250}
            w={400}
            alt="Yarm farm"
          />

          <Text mt={5} textAlign={"center"} fontFamily={"Roboto"}>
            <small>
              One of NALDCCAM's Yarm Farms At Kumfutu
            </small>
            
          </Text>
        </Box>
        <Box>
          <Image
            src="/images/ntuhsencomunact.jpg"
            h={250}
            w={400}
            alt="Community activities"
          />

          <Text mt={5} textAlign={"center"} fontFamily={"Roboto"}>
            <small>
               NALDCCAM Community Activities
            </small>
           
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Activities;
