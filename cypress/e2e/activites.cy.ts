describe('The activities editor page', () => {
  before(() => {});
  beforeEach(() => {
    cy.register();
    cy.visit('/activities/editor/new');
  });
  it('should display the editor form', () => {
    cy.get('lab-editor-form').should('exist');
  });
  it('should fill the form and save the activity', () => {
    cy.get('input[name="title"]').type('Paddle surf on Baiona');
    cy.get('textarea[name="description"]').type(
      '# Paddle surf on Baiona{enter}We provide you with **all the equipment you need** to enjoy a paddle surf session on the _Baiona beach_.'
    );
    cy.get('input[name="date"]').type('2021-01-01');
    cy.get('input[name="location"]').type('My location');
    cy.get('input[name="price"]').type('10');
    cy.get('input[name="maxParticipants"]').type('10');
    cy.get('input[name="paymentMethod"]').type('My payment method');
    cy.get('#submit').should('not.be.disabled');
    const response = { statusCode: 201, body: {} };
    const url = 'http://localhost:3000/activities';
    cy.intercept('POST', url, response).as('post_activities');
    cy.get('#submit').click();
    cy.get('@post_activities')
      .its('request.body.slug')
      .should('equal', 'paddle-surf-on-baiona');
  });
});
