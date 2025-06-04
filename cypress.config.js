const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app-hom.cocobambu.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
