import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        filterTests({ tag }) {
          return Boolean(tag);
        }
      });
      return config;
    },
    specPattern: 'cypress/{e2e,service-test}/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    env: {
      grepTag: '@smoke'
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  },
});
