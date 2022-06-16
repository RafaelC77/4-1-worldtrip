import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    dark: {
      headingsAndText: "#47585B",
      black: "#000000",
      info: "#999999",
    },
    light: {
      headingsAndText: "#F5F8FA",
      info: "#DADADA",
    },
    highlight: "#FFBA08",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "light.headingsAndText",
        color: "dark.headingsAndText",
      },
    },
  },
});
