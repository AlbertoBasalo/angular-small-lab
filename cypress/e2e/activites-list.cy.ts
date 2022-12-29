describe('The activities editor page', () => {
  beforeEach(() => {
    cy.register();
    cy.visit('/activities');
  });

  it('should display the activity list', () => {
    cy.intercept('GET', 'http://localhost:3000/activities', {
      fixture: 'activities',
    }).as('get_activities');
    cy.get('lab-activities-list').should('exist');
  });
});
