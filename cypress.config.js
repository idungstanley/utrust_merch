const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  watchForFileChanges: false,
  projectId: "hx8r14",
  reporter: "mochawesome",
  env: {
    MAILOSAUR_API_KEY: "Dg3SdviYEjt68D6W",
  },
  e2e: {
    specPattern: "cypress/integration/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
  },
});
