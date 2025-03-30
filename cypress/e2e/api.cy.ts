describe('API Tests', () => {
  // Mock API response for testing
  beforeEach(() => {
    // Setup interceptors for API routes
    // Modify these based on your actual API endpoints
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: [
        { id: 1, name: 'Test User 1' },
        { id: 2, name: 'Test User 2' }
      ]
    }).as('getUsers');
    
    cy.intercept('POST', '/api/users', {
      statusCode: 201,
      body: { id: 3, name: 'New User' }
    }).as('createUser');
  });
  
  it('should fetch users', () => {
    // Visit the page that loads users
    cy.visit('/users');
    
    // Wait for the API call
    cy.wait('@getUsers');
    
    // Verify UI shows the user data
    cy.get('[data-testid="user-list"]').should('exist');
    cy.get('[data-testid="user-item"]').should('have.length', 2);
  });
  
  it('should create a new user', () => {
    // Visit the user creation page
    cy.visit('/users/new');
    
    // Fill the form
    cy.get('[data-testid="name-input"]').type('New User');
    
    // Submit the form
    cy.get('[data-testid="submit-button"]').click();
    
    // Wait for the API call
    cy.wait('@createUser');
    
    // Verify success message is shown
    cy.get('[data-testid="success-message"]').should('be.visible');
    
    // Verify redirect
    cy.url().should('include', '/users');
  });
  
  it('should directly test API with requests', () => {
    // For direct API testing without UI
    // This is useful for testing your API endpoints directly
    cy.request('GET', '/api/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(2);
      expect(response.body[0]).to.have.property('name');
    });
  });
}); 