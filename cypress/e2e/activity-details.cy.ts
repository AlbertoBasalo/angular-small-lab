describe('The activities editor page', () => {
  let activities: any;
  beforeEach(() => {
    cy.register();
    cy.fixture('activities').then((data) => {
      activities = data;
      cy.intercept(
        'GET',
        'http://localhost:3000/activities?slug=' + activities[0].slug,
        {
          fixture: 'activities',
        }
      ).as('get_activities');
      cy.visit('/activities/' + activities[0].slug);
    });
  });

  it('should display the activity ', () => {
    cy.wait('@get_activities');
    cy.get('header').should('contain', activities[0].title);
  });
  it('should fill the participant form', () => {
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
      cy.get('[type="submit"]').click();
    });
  });
});
