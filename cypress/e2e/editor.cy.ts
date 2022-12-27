describe('The posts editor page', () => {
  before(() => {
    cy.register();
  });
  beforeEach(() => {
    cy.visit('/posts/editor/new');
  });
  it('transforms titles and lines', () => {
    cy.get('form textarea').type('# Hello world!{enter}This is a new line.');
    cy.get('#publish').click();
    cy.get('#html').contains('Hello world!');
  });
  it('transforms a complex document', () => {
    cy.fixture('sample.md').then((sample) => {
      cy.get('form textarea').clear().invoke('val', sample).trigger('input');
      cy.get('#publish').click();
      cy.get('#html').contains('Typographic replacements');
    });
  });
});
