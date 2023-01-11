describe('The About page', () => {
  it('should work', () => {
    cy.intercept('GET', 'http://localhost:3000/author', {
      fixture: 'author',
    }).as('getAbout');
    cy.visit('/about');
    cy.get('h3 > lab-link > a').contains('Alberto Basalo');
  });
});
