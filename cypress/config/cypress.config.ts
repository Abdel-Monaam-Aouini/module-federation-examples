import { defineConfig } from "cypress";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {

  return config;
}

export default defineConfig({
  e2e: {
    excludeSpecPattern: '*.js',
    specPattern: './**/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './cypress/support/e2e.ts',
    fixturesFolder: './cypress/fixtures',
    defaultCommandTimeout: 10000,
    video: true,
    videoUploadOnPasses: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 61000,
    taskTimeout: 61000,
    watchForFileChanges: false,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    includeShadowDom: true,
    retries: {
      runMode: 1,
    },
    env: {
      localhost3000: "http://localhost:3000",
      localhost3001: "http://localhost:3001",
      localhost3002: "http://localhost:3002",
      localhost3003: "http://localhost:3003",
      localhost3004: "http://localhost:3004",
      localhost3005: "http://localhost:3005",
      localhost4173: "http://localhost:4173",
      localhost4200: "http://localhost:4200",
      localhost4201: "http://localhost:4201",
      localhost4300: "http://localhost:4300",
      localhost5000: "http://localhost:5000",
      localhost5001: "http://localhost:5001",
      localhost5173: "http://localhost:5173",
      localhost8080: "http://localhost:8080",
      localhost8081: "http://localhost:8081",
      localhost8082: "http://localhost:8082",
      localhost9000: "http://localhost:9000",
      localhost9001: "http://localhost:9001",
      localhost9002: "http://localhost:9002",
    },
    setupNodeEvents
  },
});
