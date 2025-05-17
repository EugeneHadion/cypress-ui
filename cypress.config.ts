import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "n2fpkc",
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
