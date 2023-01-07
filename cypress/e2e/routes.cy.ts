describe('The main application routes', () => {
  context('when the user is not logged in', () => {
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
  });
  context('when the user is logged in', () => {
    beforeEach(() => {
      cy.register();
      cy.visit('/');
    });
    it('navigates to activities page', () => {
      cy.get('a[href*="activities"]').click();
      cy.url().should('include', 'activities');
    });
  });
});
