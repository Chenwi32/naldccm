import { Box, Container } from "@chakra-ui/react";
import Banner from "./banner";
import Navigation from "./navigation";

const Header = () => {
  return (
    <Container
      maxW="unset"
      minH={'fit-content'}
      bg="brand.100"
      bgImage="/images/ntusen.png"
      backgroundRepeat="no-repeat"
      backgroundPosition={"center"}
      backgroundSize="cover"
      backgroundBlendMode={"hard-light"}
      p={0}
    >
      <Navigation />

      <Banner/>
    </Container>
  );
};

export default Header;
