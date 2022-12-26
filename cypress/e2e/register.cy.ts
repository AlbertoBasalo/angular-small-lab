describe('The Register Page', () => {
  beforeEach(() => {
    cy.visit('/auth/register');
  });
  it('has a form with 4 fields', () => {
    cy.visit('/auth/register');
    cy.get('form').should('be.visible');
    cy.get('form input').should('have.length', 4);
  });
  it('fills, send the form and redirect to home after registration', () => {
    cy.visit('/auth/register');
    cy.get('form input[name="name"]').type('Santa Claus');
    cy.get('form input[name="email"]').type('santa@northpole.org');
    cy.get('form input[name="password"]').type('20221224');
    cy.get('form input[name="confirmPassword"]').type('20221224');
    const url = 'http://localhost:3000/users';
    const response = { statusCode: 201, body: {} };
    cy.intercept('post', url, response).as('post_users');
    cy.get('form button[type="submit"]').click();
    const payload = {
      name: 'Santa Claus',
      email: 'santa@northpole.org',
      password: '20221224',
    };
    cy.get('@post_users').its('request.body').should('deep.equal', payload);
    cy.url().should('include', '/');
  });
});
