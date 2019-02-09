context('Test npm search', () => {
  beforeEach(() => {
    cy.visit('');
  });
  it('test search field', () => {
    //
    console.log('ssssss');
    cy.get('.header__searchInput___102CH').type('cypress');
    cy.get('.header__searchButton___2AVlX').click();
    cy.get('[href="/signup"]')
      .first()
      .focus();
    cy.get(
      ':nth-child(1) > .w-80 > .package-list-item__description___1nEpN'
    ).should('have.text', 'Cypress.io end to end testing tool');
  });
});
