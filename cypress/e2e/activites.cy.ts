describe('The activities editor page', () => {
  before(() => {});
  beforeEach(() => {
    cy.register();
    cy.visit('/activities/create');
  });
  it('should display the editor form', () => {
    cy.get('lab-activity-form').should('exist');
  });
  it('should fill the form and save the activity', () => {
    cy.get('input[name="title"]').clear().type('Paddle surf on Baiona');
    cy.get('textarea[name="description"]')
      .clear()
      .type('## Come and relax\n')
      //.type('{enter}')
      .type(
        'We provide you with **all the equipment you need** to enjoy a paddle surf session on _Baiona beach_.'
      );
    cy.get('input[name="date"]').clear().type('2023-08-15');
    cy.get('input[name="location"]').clear().type('My location');
    cy.get('input[name="price"]').clear().type('10');
    cy.get('input[name="maxParticipants"]').clear().type('10');
    //cy.get('input[name="paymentMethod"]').clear().type('Cash');
    cy.get('#submit').should('not.be.disabled');
    const response = {
      statusCode: 201,
      body: {
        slug: 'paddle-surf-on-baiona',
        title: 'Paddle surf on Baiona',
        description:
          '## Come and relax\nWe provide you with **all the equipment you need** to enjoy a paddle surf session on  _Baiona beach_.',
      },
    };
    const postUrl = 'http://localhost:3000/activities';
    cy.intercept('POST', postUrl, response).as('post_activities');
    const getUrl =
      'http://localhost:3000/activities?slug=paddle-surf-on-baiona';
    cy.intercept('GET', getUrl, [response.body]).as('get_activities');
    cy.get('#submit').click();
    cy.get('@post_activities')
      .its('request.body.slug')
      .should('equal', 'paddle-surf-on-baiona');
  });
});
