describe('The Register Page', () => {
  let registerUser: any;
  let registerUserResponse: any;
  beforeEach(() => {
    cy.visit('/auth/register');
    cy.fixture('register-user').then((data) => {
      registerUser = data;
    });
    cy.fixture('register-user-response').then((data) => {
      registerUserResponse = data;
    });
    //cy.clearLocalStorage();
  });
  it('has a form with 4 fields', () => {
    cy.visit('/auth/register');
    cy.get('form').should('be.visible');
    cy.get('form input').should('have.length', 4);
  });
  it('fills the form, sends credentials and redirect to home after registration', () => {
    cy.visit('/auth/register');
    cy.get('form input[name="name"]').type(registerUser.name);
    cy.get('form input[name="email"]').type(registerUser.email);
    cy.get('form input[name="password"]').type(registerUser.password);
    cy.get('form input[name="confirmPassword"]').type(registerUser.password);
    const url = 'http://localhost:3000/users';
    const response = { statusCode: 201, fixture: 'register-user-response' };
    cy.intercept('post', url, response).as('post_users');
    cy.get('form button[type="submit"]').click();
    const payload = registerUser;
    cy.get('@post_users').its('request.body').should('deep.equal', payload);
    cy.url().should('include', '/');
    //expect(localStorage.getItem('userToken')).to.exist;
    cy.get('span[name="userName"]').should('include.text', registerUser.name);
  });
});
