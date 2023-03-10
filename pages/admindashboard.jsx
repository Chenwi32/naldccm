import {
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "./components/authprovider";
import ProtectedRoute from "./components/protectedroute";

import Head from "next/head";
import { useEffect, useState } from "react";

import { addDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Admindashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, logOut } = useAuth();

  const [projectTitle, setProjectTitle] = useState("");
  const [projectHeadline, setProjectHeadline] = useState("");
  const [projectBody, setProjectBody] = useState("");
  const [iscompleted, setIscompleted] = useState(false);
  const [projectId, setProjectId] = useState(0);
  const time = Date.now();

  const handlePost = async (e) => {
    e.preventDefault();
    const timestanp = Date.now().toString();

    const project = doc(db, `projects/${timestanp}`);

    const projectdata = {
      projectTitle,
      projectHeadline,
      projectBody,
      iscompleted,
      projectId
    };

    if (projectTitle !== "" && projectHeadline !== "" && projectBody !== "") {
      try {
        await setDoc(project, projectdata);
      } catch (error) {
        alert(error);
      }

      setProjectBody("");
      setProjectHeadline("");
      setProjectTitle("");
      setIscompleted(false);
      setProjectId(0)
    } else {
      alert("You forgot some fields");
    }
  };

  return (
    <ProtectedRoute>
      <>
        <Head>
          <title>Post a project</title>
        </Head>

        <Container maxW={1200} mt={10} minH={"70vh"}>
          <HStack justifyContent={"flex-end"}>
            <Button
              bg="brand.100"
              color="brand.300"
              _hover={{
                bg: "brand.500",
              }}
              p={5}
              mb={10}
              type="submit"
              onClick={onOpen}
            >
              Log Out
            </Button>
          </HStack>
          <Heading mb={10} fontFamily={"Andika"} color="brand.500">
            Dashboard
          </Heading>

          <Container
            minH={"70vh"}
            maxW={900}
            mb={10}
            p={10}
            color={"brand.600"}
            fontWeight={"bold"}
            borderRadius={"2xl"}
            boxShadow={"2xl"}
            border={"3px solid #fff"}
            fontFamily="Roboto"
          >
            <Heading fontFamily={"Andika"} mb={5}>
              What's the new project?
            </Heading>

            <VStack mb={5} align={"left"}>
              <Text>Poject Title</Text>
              <input
                className="main_input"
                type="text"
                value={projectTitle}
                onChange={(e) => {
                  setProjectTitle(e.target.value);
                }}
              />
            </VStack>

            <VStack mb={5} align={"left"}>
              <Text>Project Headline</Text>
              <input
                className="main_input"
                type="text"
                value={projectHeadline}
                onChange={(e) => {
                  setProjectHeadline(e.target.value);
                }}
              />
            </VStack>

            <VStack mb={5} align={"left"}>
              <Text>Project Body</Text>
              <textarea
                className="main_input"
                value={projectBody}
                name=""
                id="project_body"
                cols="25"
                rows="5"
                onChange={(e) => {
                  setProjectBody(e.target.value);
                  setProjectId(time);
                }}
              ></textarea>
            </VStack>

            <HStack mb={5} align={"left"}>
              <Text mr={5}>Project already completed </Text>
              <input
                className="checkbox"
                value={iscompleted}
                type="checkbox"
                onChange={(e) => {
                  setIscompleted(e.target.checked);
                }}
              ></input>
            </HStack>

            <HStack p={3} w={"100%"} justifyContent={"flex-end"} mt={10}>
              <Button
                bg={"brand.100"}
                color={"brand.300"}
                _hover={{
                  bg: "brand.500",
                  color: "brand.300",
                }}
                onClick={(e) => handlePost(e)}
              >
                Post Project
              </Button>
            </HStack>
          </Container>
        </Container>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody
              minH={200}
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            >
              <Text>Are you sure you want to log out?</Text>
            </ModalBody>

            <ModalFooter display={"flex"} justifyContent="space-between">
              <Button
                _hover={{
                  bg: "",
                }}
                bg={"brand.500"}
                color="brand.300"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
              
                <Button
                  bg={"red"}
                  color="brand.300"
                  _hover={{
                    bg: "",
                  }}
                  onClick={logOut}
                >
                  Continue
                </Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </ProtectedRoute>
  );
};

export default Admindashboard;
