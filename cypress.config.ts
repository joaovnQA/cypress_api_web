import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://front.serverest.dev",
    specPattern: "cypress/e2e/**/*.spec.ts",
    supportFile: "cypress/support/e2e.ts",
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 8000,
    retries: { runMode: 2, openMode: 0 },
    setupNodeEvents(on, config) {
      return config;
    },
  },
  env: {
    apiUrl: "https://serverest.dev",
  },
});
