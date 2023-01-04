import { Box, Container, Image, Text, useMediaQuery } from "@chakra-ui/react";
import Head from "next/head";
import Activities from "./components/activities";
import Header from "./components/header";
import Intro from "./components/intro";
import Services from "./components/services";

export default function Home() {

      const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <>
      <Head>
        <title>NALDCCAM</title>
        <meta
          name="description"
          content="NTUHSEN AGRICULTURAL AND LIVESTOCK DEVELOPMENT CORPORATION CAMEROON"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Container maxW={"unset"} w="100%" m={0} p={0}>
        <Intro />
        <Activities />
        <Services />

      
      </Container>
    </>
  );
}
