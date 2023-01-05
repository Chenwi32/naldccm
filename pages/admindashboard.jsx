import { Container, Heading } from "@chakra-ui/react";
import ProtectedRoute from "./components/protectedroute";

const Admindashboard = () => {
    return (
        <ProtectedRoute>
            <Container maxW={1200} mt={10} minH={'70vh'}>
            <Heading fontFamily={'Andika'} color='brand.500'> Dashboard</Heading>
        </Container> 
        </ProtectedRoute>
       
    );
}

export default Admindashboard;