const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://conduit-realworld-example-app.fly.dev",
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/reports/mocha",
        "quite": true,
        "overwrite": false,
        "html": false, 
        "json": true
      }
    }
  },
  },
);
