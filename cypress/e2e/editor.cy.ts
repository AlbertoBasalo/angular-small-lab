describe('The posts editor page', () => {
  before(() => {});
  beforeEach(() => {
    cy.register();
    cy.visit('/posts/editor/new');
  });
  it('transforms titles and lines', () => {
    cy.get('#title').type('Hello World!');
    cy.get('#markdown').type('## Hello!{enter}World.');
    cy.get('#html').contains('Hello');
  });
  it('transforms a complex document', () => {
    cy.fixture('sample.md').then((sample) => {
      cy.get('#title').type('Sample Document');
      cy.get('#markdown').clear().invoke('val', sample).trigger('input');

      cy.get('#html').contains('Typographic replacements');
    });
  });
  it('Publishes a new post', () => {
    cy.fixture('sample.md').then((sample) => {
      cy.get('#title').type('Sample Document');
      cy.get('#markdown').clear().invoke('val', sample).trigger('input');
      cy.get('#publish').click();
      const response = { statusCode: 201, body: {} };
      const url = 'http://localhost:3000/posts';
      cy.intercept('POST', url, response).as('post_posts');
      cy.get('@post_posts')
        .its('request.body.slug')
        .should('equal', 'sample-document');
    });
  });
});
