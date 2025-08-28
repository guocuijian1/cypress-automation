require('@cypress/grep')();
require('cypress-xpath');

// Ignore uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing due to uncaught exceptions
  return false;
});

// Set global timeout
Cypress.config('defaultCommandTimeout', 10000);

// Execute before each test
beforeEach(() => {
  // Use session to maintain login state
  cy.session('my-session', () => {
    // You can add login logic here
    cy.log('Session created');
  });
});

// Add log settings
Cypress.env('LOG_LEVEL', 'info');
