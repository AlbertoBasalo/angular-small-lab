describe('The activities editor page', () => {
  let newActivity: any;
  beforeEach(() => {
    cy.register();
    cy.fixture('new-activity').then((data) => {
      newActivity = data;
    });
    cy.visit('/activities/create');
  });
  it('should display the editor form', () => {
    cy.get('lab-activity-form').should('exist');
  });
  it('should fill the form and save the activity', () => {
    cy.get('input[name="title"]').clear().type(newActivity.title);
    cy.get('textarea[name="description"]')
      .clear()
      .type(newActivity.description);
    cy.get('input[name="date"]').clear().type(newActivity.date);
    cy.get('input[name="location"]').clear().type(newActivity.location);
    cy.get('input[name="price"]').clear().type(newActivity.price);
    cy.get('input[name="maxParticipants"]')
      .clear()
      .type(newActivity.maxParticipants);
    cy.get('select[name="ageCategory"]').select(newActivity.ageCategory);
    cy.get('#submit').should('not.be.disabled');
    const response = {
      statusCode: 201,
      body: newActivity,
    };
    const postUrl = 'http://localhost:3000/activities';
    cy.intercept('POST', postUrl, response).as('post_activities');
    const getUrl = 'http://localhost:3000/activities?slug=' + newActivity.slug;
    cy.intercept('GET', getUrl, [response.body]).as('get_activities');
    cy.get('#submit').click();
    cy.get('@post_activities')
      .its('request.body.slug')
      .should('equal', newActivity.slug);
  });
});
