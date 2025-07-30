import { defineConfig } from "@chakra-ui/react";

export const themeConfig = defineConfig({
  globalCss: {
    "html, body": {
      backgroundColor: "blue.400",
    },
  },
  theme: {
    tokens: {
      colors: {},
    },
  },
});
