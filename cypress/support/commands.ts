// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Example of a custom command for logging in (modify according to your auth flow)
// Cypress.Commands.add('login', (email: string, password: string) => {
//   cy.visit('/login');
//   cy.findByLabelText('Email').type(email);
//   cy.findByLabelText('Password').type(password);
//   cy.findByRole('button', { name: /Sign in/i }).click();
//   cy.url().should('not.include', '/login');
// });

// Example of a custom command to mock authentication
// Cypress.Commands.add('mockAuth', () => {
//   // Stub Auth0 authentication
//   cy.intercept('POST', 'https://your-tenant.auth0.com/oauth/token', {
//     statusCode: 200,
//     body: { access_token: 'test-token', expires_in: 3600 }
//   });
//   
//   // Set local storage tokens as needed
//   cy.window().then(window => {
//     window.localStorage.setItem('auth_token', 'test-token');
//   });
// });

// Example of a command for testing API routes
// Cypress.Commands.add('apiLogin', (email: string, password: string) => {
//   return cy.request({
//     method: 'POST',
//     url: '/api/login',
//     body: { email, password }
//   }).then(response => {
//     expect(response.status).to.eq(200);
//     window.localStorage.setItem('auth_token', response.body.token);
//   });
// });

// Declare the types for custom commands
declare global {
  namespace Cypress {
    interface Chainable {
      // Uncomment and modify these as needed
      // login(email: string, password: string): Chainable<void>
      // mockAuth(): Chainable<void>
      // apiLogin(email: string, password: string): Chainable<AUTWindow>
    }
  }
}

// This export makes this file a module
export {}; 