import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Footer } from "../components/Footer/Footer";
// import Navbar from "../components/Navbar/Navbar";
import { wrapper } from "../redux/store";
import theme from "../styles/theme";

const Navbar = dynamic(() => import("../components/Navbar/Navbar"), {
  ssr: false,
});

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

export default wrapper.withRedux(MyApp);
