import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const config = {
  fonts,
  breakpoints,
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
