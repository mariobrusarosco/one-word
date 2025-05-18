describe('Home Page', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('/');
  });

  it('should load successfully', () => {
    // Check that the page loaded correctly
    cy.title().should('exist');
    cy.location('pathname').should('eq', '/');
  });

  it('should have proper page structure', () => {
    // Check for basic page elements
    cy.get('header').should('exist');
    cy.get('main').should('exist');
    cy.get('footer').should('be.visible');
  });

  it('should navigate to another page', () => {
    // Find a navigation link and click it
    // This is a generic example, update selectors based on your app
    cy.get('nav a').first().click();
    
    // Verify navigation happened
    cy.location('pathname').should('not.eq', '/');
  });

  // Add auth test if your app requires authentication
  // it('should handle user authentication', () => {
  //   // Use custom command
  //   cy.login('test@example.com', 'password123');
  //   
  //   // Verify authenticated state
  //   cy.get('[data-testid="user-profile"]').should('be.visible');
  // });
}); 