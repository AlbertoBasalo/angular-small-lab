describe('The posts editor page', () => {
  before(() => {
    cy.register();
  });
  beforeEach(() => {
    cy.visit('/posts/editor/new');
  });
  it('transforms titles and lines', () => {
    cy.get('#title').type('Hello World!');
    cy.get('#markdown').type('## Hello!{enter}World.');
    // cy.get('#publish').click();
    cy.get('#html').contains('Hello');
  });
  it('transforms a complex document', () => {
    cy.fixture('sample.md').then((sample) => {
      cy.get('#title').type('Sample Document');
      cy.get('#markdown').clear().invoke('val', sample).trigger('input');
      // cy.get('#publish').click();
      cy.get('#html').contains('Typographic replacements');
    });
  });
});
