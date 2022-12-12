import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box padding={4}>
        <Box marginX={"auto"} width="1200px">
          <Component {...pageProps} />
        </Box>
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
