describe('The About page', () => {
  it('should work', () => {
    cy.visit('/about');
    cy.get('h3 > lab-link > a').contains('Alberto Basalo');
  });
});
