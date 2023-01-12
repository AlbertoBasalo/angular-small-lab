describe('The notifications dialog', () => {
  beforeEach(() => {
    cy.register();
    cy.fixture('full-activity').then((activity) => {
      cy.intercept(
        'GET',
        'http://localhost:3000/activities?slug=' + activity.slug,
        {
          body: [activity],
        }
      ).as('get_activity');
      cy.visit('/activities/' + activity.slug);
      cy.wait('@get_activity');
    });
  });

  it('should display when booking a full activity ', () => {
    cy.intercept('POST', 'http://localhost:3000/participants', {
      statusCode: 201,
    }).as('post_participant');
    cy.fixture('participant').then((data) => {
      const participant = data;
      cy.get('input[name="name"]').clear().type(participant.name);
      cy.get('input[name="email"]').clear().type(participant.email);
      cy.get('input[name="phone"]').clear().type(participant.phone);
      cy.get('input[name="address"]').clear().type(participant.address);
      cy.get('input[name="paymentMethod"]')
        .clear()
        .type(participant.paymentMethod);
      cy.get('#acceptConditions').click();
      cy.get('[type="button"]').click();
      cy.get('#notification').should('be.visible');
      cy.get('[aria-label="Close"]').click();
    });
  });
});
