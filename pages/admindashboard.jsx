import { Button, Container, Heading, HStack } from "@chakra-ui/react";
import { useAuth } from "./components/authprovider";
import ProtectedRoute from "./components/protectedroute";

const Admindashboard = () => {

    const { user, logOut } = useAuth();

    return (
      <ProtectedRoute>
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
                        onClick={logOut}
            >
              Log Out
            </Button>
          </HStack>
          <Heading fontFamily={"Andika"} color="brand.500">
            {" "}
            Dashboard
          </Heading>
        </Container>
      </ProtectedRoute>
    );
}

export default Admindashboard;