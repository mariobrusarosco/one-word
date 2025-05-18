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

// Augment the Cypress namespace to include type definitions
declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom commands for component testing here if needed
    }
  }
}

// Make this file a module
export {}; 