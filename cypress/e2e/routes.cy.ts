describe('The main application routes', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('has a home route', () => {
    cy.visit('/');
    cy.url().should('include', '/');
  });
  it('not have a link to the secured admin route', () => {
    cy.get('a[href*="admin"]').should('not.exist');
  });
  it('navigates to register page', () => {
    cy.get('a[href*="auth/register"]').click();
    cy.url().should('include', '/auth/register');
  });
  it('navigates to new activity editor', () => {
    cy.register();
    cy.get('a[href*="activities/create"]').click();
    cy.url().should('include', 'activities/create');
  });
});
