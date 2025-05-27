const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5171",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: false,
  },
});
