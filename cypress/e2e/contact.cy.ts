describe('The Contact page', () => {
  it('should send the contact form', () => {
    cy.visit('/contact');
    cy.get('#name').clear().type('Alberto Basalo');
    cy.get('#email').clear().type('alberto@fake.mail');
    cy.get('#message').clear().type('Hello, world!');
    cy.get('button').contains('Send').click();
  });
});
