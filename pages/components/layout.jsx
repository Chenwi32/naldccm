import { Container } from "@chakra-ui/react";
import Footer from "./footer";

import Navigation from "./navigation";

const Layout = ({ children }) => {
  return (
    <>
      
      <Navigation/>
      <Container p={0} maxW={"unset"} w="100%" m={0}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
