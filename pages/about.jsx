import { Box, Container, Heading, Image, ListItem, Text, UnorderedList, useMediaQuery } from "@chakra-ui/react";

const About = () => {

    const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

    return (
      <Container minH={"70vh"} maxW={900} p={"0 0.5rem"}>
        <Image
          src="/images/ntuhsencomunact.jpg"
          w={"100%"}
          h={isLargerThan700 ? 450 : 250}
          borderRadius="lg"
          alt="Ntuhsen Community activities"
        ></Image>

        <Box textAlign={"center"}>
          <Heading color="brand.500" fontFamily={"Andika"} mt={10}>
            Who We Are
          </Heading>

          <Text fontFamily={"Roboto"} mt={5}>
            <Text fontWeight={600}>
              NALDCCAM is a community based green Agricultural and Livestock
              Company.
            </Text>

            <Text>
              We manage diverse farming and livestock projects, impacting the
              lives of millions, and are committed to providing people with new
              opportunities. <br />
              We also collaborate with local populations, engaging them in
              provincial agricultural operations and projects by creating job
              opportunities during the projects.
            </Text>
          </Text>
        </Box>

        <Box mt={20}>
          <Heading fontSize={"1.5rem"} fontFamily="Andika" color={"brand.500"}>
            Our Story
          </Heading>

          <Text mt={5}>
            The company went operational in 2013 as a Common Initiative Group
            with the aim of bringing farmers under a common canopy, forming a
            synergistic strategic alliance in procuring farm inputs at moderate
            prices, accessing market outlets, technical know-how and finance.
          </Text>

          <Text fontFamily={"Andika"} fontWeight={600} mt={2}>
            As a common initiative group, it operated with some specific
            objectives as follow:
          </Text>

          <UnorderedList mt={5}>
            <ListItem>To safeguard members’ interests;</ListItem>
            <ListItem>
              Source and secure funding for the farmers’ initiatives;
            </ListItem>
            <ListItem>
              Developed and promote sustainable agricultural initiatives ;
            </ListItem>
            <ListItem>
              Knowledge transmission through workshops, seminars, world cafés,
              to build and empower members’ capacities;
            </ListItem>
            <ListItem>
              Mobilize and engage women and youths in sustainable agricultural
              processes;
            </ListItem>
            <ListItem>Introduce green agriculture in Cameroon.</ListItem>
          </UnorderedList>

          <Text mt={10}>
            Another development came in 2019, when the CIG emerged to a private
            Limited company known as NTUHSEN AND SONS SARL (NSS). As NSS, we
            embarked on general supplies, Building/Construction, Opening of
            farms, Training sessions, Import and Exportation. In 2022, we are
            finally settling on NALDCCAM with key operations tilted towards
            green agriculture, prosperous livestock, agro-processing, knowledge
            transmission, Research and Development.
          </Text>
        </Box>

        <Box mt={10}>
          <Heading fontSize={"1.5rem"} fontFamily="Andika" color={"brand.500"}>
            Our Vision
          </Heading>

          <Text mt={5}>
            To improve rural livelihoods and sustainable food system through
            value addition, offering affordable, mechanized agricultural
            equipment to small and medium scale farmers in order to increase
            green agricultural production and a prosperous livestock sector in
            the country.
          </Text>

          <Image
            src="/images/ntuhsencampain.jpg"
            w={"100%"}
            h={isLargerThan700 ? 450 : 250}
            borderRadius="lg"
            mt={5}
            alt='Ntuhsen campaign'
          ></Image>
        </Box>

        <Box mt={10}>
          <Heading fontSize={"1.5rem"} fontFamily="Andika" color={"brand.500"}>
            Our Mission
          </Heading>

          <UnorderedList mt={5}>
            <ListItem>
              To continuously offer dependable, agreeable, and equitable priced
              services to our customers;
            </ListItem>
            <ListItem>
              To create a favorable policy and legal framework for the
              sustainable development of the livestock industry;{" "}
            </ListItem>
            <ListItem>
              To stay consistent, build trust, and establish sustainable
              business relationships with customers while capitalizing on green
              agricultural potentials to preserve the ecosystem, climate
              resilience, food security, sources of revenue, and economic
              safe-living in Cameroon.
            </ListItem>
          </UnorderedList>
        </Box>

        <Box textAlign={"center"}>
          <Heading color="brand.500" fontFamily={"Andika"} mt={10}>
            Our Core Values
          </Heading>
          <Text fontFamily={"Roboto"} mt={5}>
            We embed integrity, accountability, customer satisfaction,
            quality-focus, proactivity, motivation, and sustainable relationship
            in all our services
          </Text>
        </Box>

        <Container
          maxW={600}
          mt={10}
          mb={"8rem"}
          position={"relative"}
          display="flex"
          justifyContent={"center"}
        >
          <Image
            width={400}
            h={400}
            src="/images/ntuhsenceo.jpeg"
            borderTopRightRadius={isLargerThan700 ? "10rem" : "8rem"}
            borderBottomRightRadius={isLargerThan700 ? "10rem" : "8rem"}
            alt='Ntuhsen CEO'
          />

          <Box
            position={"absolute"}
            top={isLargerThan700? "20rem" : '22rem'}
            right={isLargerThan700 ? "8rem" : "4rem"}
            bg="brand.100"
            color={"brand.300"}
            fontSize="0.9rem"
            textAlign={"center"}
            p={isLargerThan700 ? "1rem 3rem" : "1rem"}
            borderRadius={"3rem"}
            width={isLargerThan700 ? "70%" : "80%"}
          >
            <Text fontFamily={"Andika"} fontWeight={600}>
              Lidel Kelly Toh
            </Text>
            <Text fontFamily={"Roboto"}>
              <small>Cheif Executive Officer (CEO)</small> <br />
              <small>During a field inspection</small>
            </Text>
          </Box>
        </Container>

        <Box mt={10}>
          <Heading fontSize={"1.5rem"} fontFamily="Andika" color={"brand.500"}>
            Our Objectives
          </Heading>
        </Box>
      </Container>
    );
};

export default About;
