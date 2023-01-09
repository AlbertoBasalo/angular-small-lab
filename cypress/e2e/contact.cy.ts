describe('The Contact page', () => {
  it('should send the contact form', () => {
    cy.visit('/contact');
    cy.fixture('contact').then((contact) => {
      cy.get('#name').clear().type(contact.name);
      cy.get('#email').clear().type(contact.email);
      cy.get('#message').clear().type(contact.message);
      cy.get('button').contains('Send').click();
    });
  });
});
