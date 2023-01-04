import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";

const Services = () => {

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

    return (
      <Container bg={"brand.101"} maxW={"unset"} w="100%" p={0}>
        <Container maxW={1200} mt={10} p={isLargerThan700 ? 10 : 1}>
          <Flex gap={10} flexDirection={isLargerThan700 ? "row" : "column"}>
            <Image
              src="/images/ntuhsenservices.png"
              w={isLargerThan700 ? "60%" : "100%"}
              alt="Services"
            />

            <Box fontFamily={"Roboto"} letterSpacing={1}>
              <Heading color={"brand.500"} fontFamily={"Andika"}>
                Our Services
              </Heading>

              <UnorderedList mt={10}>
                <ListItem>
                  Establishing leading agriculture farms and production centers
                  according to customer’s requirements and market demands;
                </ListItem>

                <ListItem mt={5}>
                  Introducing food processing technologies, advanced dairy and
                  meat production, automated hatcheries, slaughterhouses, flour
                  mills, feed plants and packing houses are part of our
                  agro-industrial capabilities;
                </ListItem>

                <ListItem mt={5}>
                  Agriculture R&D - Using our in-house technology and know-how
                  to create innovative agro-farming and livestock research
                  stations and laboratories to forecast the future of
                  agriculture.
                </ListItem>

                <ListItem mt={5}>
                  Conducting professional Training Seminars /Workshops and World
                  Cafes (agronomy and livestock) for local farmers.
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Container>
      </Container>
    );
};

export default Services;
