describe('The posts editor page', () => {
  before(() => {
    cy.register();
  });
  beforeEach(() => {
    cy.visit('/posts/editor/new');
  });
  // it('has text area', () => {
  //   cy.get('form textarea').should('be.visible');
  // });
  // it('transforms simple lines', () => {
  //   cy.get('form textarea').type('Hello world!');
  //   cy.get('#publish').click();
  //   cy.get('#html').contains('Hello world!');
  // });
  // it('transforms simple lines with a new line', () => {
  //   cy.get('form textarea').type('Hello world!{enter}This is a new line.');
  //   cy.get('#publish').click();
  //   cy.get('#html').contains('Hello world!').contains('This is a new line.');
  // });
  // it('transforms titles', () => {
  //   cy.get('form textarea').type('# Hello world!{enter}This is a new line.');
  //   cy.get('#publish').click();
  //   cy.get('#html').contains('</h1>').contains('<p>This is a new line.</p>');
  // });
  it('transforms a complex document', () => {
    cy.get('form textarea').type(`## Typographic replacements

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

**strong** _emphasis_ ~~strikethrough~~

[link](http://example.com) [link with title](http://example.com "title")
`);
    cy.get('#publish').click();
    cy.get('#html').contains('Typographic replacements');
  });
});
