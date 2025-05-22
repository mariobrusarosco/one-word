// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Import code coverage
import '@cypress/code-coverage/support';

// Import Testing Library commands
import '@testing-library/cypress/add-commands';

// The mount function is automatically included by Cypress
// when using component testing, so we don't need to import it

// Define custom commands interface for component testing
export interface ComponentTestCommands {
  // Add custom commands for component testing here if needed
}

// Augment the Cypress namespace
declare global {
  interface Cypress {
    Chainable: Cypress["Chainable"] & ComponentTestCommands;
  }
}

// Make this file a module
export {}; 