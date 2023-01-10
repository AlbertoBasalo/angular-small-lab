import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'znnvun',
  e2e: {
    baseUrl: 'http://localhost:4200',
    // supportFile: false,
    viewportHeight: 1024,
    viewportWidth: 1280,
    video: false,
    videoUploadOnPasses: false,
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
});
