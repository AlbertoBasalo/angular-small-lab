// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare namespace Cypress {
  interface Chainable<Subject = any> {
    register(): typeof register;
  }
}

function register(): void {
  cy.visit('/auth/register');
  cy.get('form input[name="name"]').type('Santa Claus');
  cy.get('form input[name="email"]').type('santa@northpole.org');
  cy.get('form input[name="password"]').type('20221224');
  cy.get('form input[name="confirmPassword"]').type('20221224');
  const url = 'http://localhost:3000/users';
  const response = { statusCode: 201, body: {} };
  cy.intercept('post', url, response).as('post_users');
  cy.get('form button[type="submit"]').click();
  cy.wait('@post_users');
}

Cypress.Commands.add('register', register);
