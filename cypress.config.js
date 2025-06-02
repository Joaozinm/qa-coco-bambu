import { defineConfig } from "cypress";
import preprocessor from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    baseUrl: "https://app-hom.cocobambu.com/delivery",
    supportFile: "cypress/support/e2e.js",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        preprocessor({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
