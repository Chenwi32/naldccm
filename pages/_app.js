import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import { AuthContextProvider } from "./components/authprovider";
import Layout from "./components/layout";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      brand: {
        100: "#51bd87",
        101: "#51bd8710",
        102: "#44FF99",
        200: "#1A2BFA",
        300: "#f7fff8",
        301: "#f7fff8fa",
        400: "#4F9FFF",
        500: "#722272",
        600: "#000",
        601: "#000000d7",
      },
    },
  });

  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
