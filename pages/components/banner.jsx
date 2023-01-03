import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";

const Banner = () => {
  return (
    <Container
      maxW={"unset"}
      h={"100%"}
      w="100%"
      p={10}
      background={
        "linear-gradient(90deg, rgba(255,255,255,0.9589023109243697) 0%, rgba(255,255,255,0.8776698179271709) 52%, rgba(255,255,255,0.12977065826330536) 100%);"
      }
    >
      <Container
        display="flex"
        alignItems={"flex-start"}
        justifyContent="flex-start"
        w="100%"
        maxW={1200}
      >
        <Box w={"60%"}>
          <Heading color={"brand.500"} fontFamily={"Andika"}>
            Our Vision
          </Heading>

          <Text
            mt={10}
            fontFamily={"Roboto"}
            fontWeight="600"
            letterSpacing={2}
          >
            We manage diverse farming and livestock projects, impacting the
            lives of millions, and are committed to providing people with new
            opportunities.
          </Text>

          <Flex
            w={"80%"}
            p={"1rem 1.5rem"}
            borderRadius="lg"
            mt={10}
            alignItems={"center"}
            justifyContent="space-between"
            bg={"brand.300"}
            boxShadow="lg"
          >
            <Text fontFamily={"Roboto"} fontWeight={600}>
              Learn More
            </Text>
            <Button
              bg={"brand.100"}
              color="brand.300"
              as={IconButton}
              icon={<ArrowForwardIcon />}
              _hover={{
                bg: "brand.500",
              }}
            />
          </Flex>
        </Box>
      </Container>
    </Container>
  );
};

export default Banner;
