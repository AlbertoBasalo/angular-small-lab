describe('The Angular Small Laboratory home page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.log('runs once before each tests');
  });
  it('contains the title text', () => {
    cy.contains('Angular Laboratory for small applications');
  });
  it('has a nav element', () => {
    cy.get('nav');
  });
  it('displays an unordered list of features inside the main section', () => {
    cy.get('main ul').should('be.visible');
  });
  it('not have a link to the secured admin route', () => {
    // cy.wait(1000);
    cy.get('a[href*="admin"]').should('not.exist');
  });
  it('navigates to register page', () => {
    cy.get('a[href*="auth/register"]').click();
    cy.url().should('include', '/auth/register');
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
