import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};
const fonts = {
  heading: `Montserrat, ${base.fonts.heading}`,
  body: `Montserrat, ${base.fonts.body}`,
};
const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.50", "black")(props),
    },
  }),
};
const config2 = {
  colors: {
    brand: {
      main: "#00BFA6", //"#6D1E91",
      light: "#1affe1",
      "main-dark": "#00b39b", // "#a841d8",
      white: "#fff",
      dark: "#030019",
      500: "#00BFA6", //color scheme
    },
    fonts,
  },
  styles,
};
const theme = extendTheme({ config }, config2);

export default theme;
