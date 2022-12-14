import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Footer } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { setupStore } from "../redux/store";
import theme from "../styles/theme";

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Box padding={4}>
          <Box marginX={"auto"} width="1200px">
            <Component {...pageProps} />
          </Box>
        </Box>
        <Footer />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
