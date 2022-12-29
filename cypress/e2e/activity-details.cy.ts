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

  it('should display the activity list', () => {
    cy.get('h1').should('contain', activities[0].title);
  });
});
