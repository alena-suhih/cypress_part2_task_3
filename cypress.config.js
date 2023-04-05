const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zxg82m',
  e2e: {
    baseUrl: "https://petstore.swagger.io",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
