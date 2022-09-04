const { defineConfig } = require("cypress");
module.exports = defineConfig({
  watchForFileChanges: false,
  projectId: "hx8r14",
  reporter: 'mochawesome',
  env:{
    MAILOSAUR_API_KEY: "Dg3SdviYEjt68D6W",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
