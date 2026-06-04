// @ts-check

import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */

export default defineConfig({

  testDir: './tests',

  /* Run tests in files in parallel */

  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */

  forbidOnly: !!process.env.CI,

  /* Retry on CI only */

  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */

  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use */

  reporter: [
  ['list'],
  ['html'],
  ['allure-playwright']
],

  /* Shared settings for all projects */

  use: {

  headless: false,

  locale: 'en-US',

  trace: 'on-first-retry',

  launchOptions: {

    args: [

      '--lang=en-US',

      '--disable-save-password-bubble',

      '--disable-features=PasswordLeakDetection,PasswordManagerOnboarding,Translate',

      '--disable-notifications',

      '--disable-popup-blocking',

      '--disable-infobars'

    ]

  }

},

  /* Configure projects for browsers */

  projects: [

    {

      name: 'chromium',

      use: {

        ...devices['Desktop Chrome']

      }

    },

    /*

    {

      name: 'firefox',

      use: {

        ...devices['Desktop Firefox']

      }

    },

    {

      name: 'webkit',

      use: {

        ...devices['Desktop Safari']

      }

    },

    */

  ],

  /* Run local dev server before tests */

  // webServer: {

  //   command: 'npm run start',

  //   url: 'http://localhost:3000',

  //   reuseExistingServer: !process.env.CI,

  // },

});

