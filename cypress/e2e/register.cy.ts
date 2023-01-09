describe('The Register Page', () => {
  let registerUser: any;
  beforeEach(() => {
    cy.visit('/auth/register');
    cy.fixture('register-user').then((data) => {
      registerUser = data;
    });
    const url = 'http://localhost:3000/users';
    const response = { statusCode: 201, fixture: 'register-user-response' };
    cy.intercept('post', url, response).as('post_users');
    //cy.clearLocalStorage();
  });
  it('fills the form, sends credentials and redirect to home after registration', () => {
    cy.visit('/auth/register');
    cy.get('form input[name="name"]').type(registerUser.name);
    cy.get('form input[name="email"]').type(registerUser.email);
    cy.get('form input[name="password"]').type(registerUser.password);
    cy.get('form input[name="confirmPassword"]').type(registerUser.password);
    cy.get('form button[type="submit"]').click();
    const payload = registerUser;
    cy.get('@post_users').its('request.body').should('deep.equal', payload);
    cy.getAllLocalStorage().should('exist');
    cy.url().should('include', '/');
    cy.reload();
    cy.get('span[name="userName"]').should('include.text', registerUser.name);
  });
});
