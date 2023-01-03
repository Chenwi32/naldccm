import { Container, Heading, Text} from "@chakra-ui/react";

const Intro = () => {
  

  return (
    <Container p={1} maxW={900} mt={10} textAlign={"center"}>
      <Heading fontFamily={"Roboto"} fontSize="1.3rem" color="brand.500">
        NTUHSEN AGRICULTURAL AND LIVESTOCK DEVELOPMENT CORPORATION CAMEROON
        (NALDCCAM)
      </Heading>

      <Text mt={5} fontFamily={"Roboto"}>
        Here to improve rural livelihoods and sustainable food system through
        value addition, offering affordable, mechanized agricultural equipment
        to small and medium scale farmers in order to increase green
        agricultural production and a prosperous livestock sector in the
        country.
      </Text>
    </Container>
  );
};

export default Intro;
