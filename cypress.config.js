const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dik3do",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true, // ativa a feat de vídeo
    reporter: 'mochawesome', // define o reporter
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss" }
  },
});
