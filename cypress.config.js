const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: "https://merchants.sandbox-utrust.com",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
