describe('The Angular Small Laboratory home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('contains the title text', () => {
    cy.contains('Angular Laboratory for small applications');
  });
  it('contains the subtitle text', () => {
    cy.get('h2').contains('Standalone edition');
  });
  it('displays an unordered list of features inside the main section', () => {
    cy.get('main ul').should('be.visible');
  });
});
