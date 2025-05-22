// Import commands.js using ES2015 syntax:
import './commands';

// Import cypress-real-events for more realistic user interactions
import 'cypress-real-events';

// Import code coverage plugin
import '@cypress/code-coverage/support';

// Import Testing Library Cypress
import '@testing-library/cypress/add-commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests in the command log
const app = window.top;
if (app && !app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.setAttribute('data-hide-command-log-request', '');
  style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
  app.document.head.appendChild(style);
}

// Define custom commands interface for e2e testing
export interface E2ETestCommands {
  // Add custom commands here if needed
  // For example:
  // login(email: string, password: string): Chainable<void>
}

// Augment the Cypress namespace
declare global {
  interface Cypress {
    Chainable: Cypress["Chainable"] & E2ETestCommands;
  }
}

// Make this file a module
export {}; 