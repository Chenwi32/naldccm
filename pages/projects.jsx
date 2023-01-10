import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  SkeletonText,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../firebase";

const Projects = () => {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  const projectCollection = collection(db, "projects");

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    // Query all Id cards
    const projectQuery = query(projectCollection);

    // get id cards
    const querySnapshot = await getDocs(projectQuery);

    // Map through the ids and add them to a new array
    const results = [];

    querySnapshot.forEach((snapshot) => {
      results.push(snapshot.data());
    });

    // assign the new array to the foundIds
    setProjects(results);
  };

  // Get the  when message changes onclick
  // of the button below

  useEffect(() => {
    getProjects();
  }, []);

  const loading = projects.length === 0;

  return (
    <Container p={isLargerThan700 ? 0 : 5} maxW={1200} mt={10} mb={10}>
      <Heading fontFamily={"Andika"} color="brand.500" mt={10} mb={5}>
        Our Projects
      </Heading>

      <SimpleGrid columns={isLargerThan700 ? 2 : 1} gap={5} columnGap={5}>
        {loading ? (
          <>
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>

            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>

            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          </>
        ) : (
          projects.map((project) => {
            return (
              <Flex
                key={project.projectId}
                p={5}
                boxShadow={"lg"}
                border={"1px solid"}
                borderRadius="lg"
                flexDirection={"column"}
                alignItems={"center"}
                textAlign="center"
              >
                <Heading mb={5} fontSize={"1.5rem"} color={"brand.500"}>
                  {project.projectTitle}
                </Heading>

                <Heading fontSize={"1rem"} color={"brand.600"}>
                  {project.projectHeadline}
                </Heading>

                <Text mt={5} fontFamily={"Roboto"} color={"brand.600"}>
                  {project.projectBody}
                </Text>

                <HStack mt={5}>
                  <Text fontWeight={600}>Status:</Text>
                  {project.iscompleted === false ? (
                    <Text color={"orange"}>In Progress</Text>
                  ) : (
                    <Text color={"brand.100"}>Copleted</Text>
                  )}
                </HStack>

                <Button
                  mt={5}
                  bg={"brand.100"}
                  color={"brand.300"}
                  _hover={{
                    bg: "brand.500",
                    color: "brand.300",
                  }}
                  boxShadow={"lg"}
                >
                  Learn more about this project
                </Button>
              </Flex>
            );
          })
        )}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
