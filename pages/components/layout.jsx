import { Container } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container p={0} maxW={"unset"} w="100%" m={0}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
