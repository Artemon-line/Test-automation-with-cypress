const LoginPage = require('../pages/login.page');

context('Test search', () => {
  beforeEach(() => {
    cy.visit('');
  });
  it('test search field', () => {
    //
    cy.log('test begin');
    cy.get('.header__searchInput___102CH').type('cypress');
    cy.get('.header__searchButton___2AVlX').click();
    cy.get('[href="/signup"]')
      .first()
      .focus();
    cy.get(
      ':nth-child(1) > .w-80 > .package-list-item__description___1nEpN'
    ).should('have.text', 'Cypress.io end to end testing tool');
  });

  it('Test login with wrong values', () => {
    //
    cy.visit(LoginPage.path);
    cy.get(LoginPage.usernameInput).type('TESTTTTT');
    cy.get(LoginPage.passwordInput).type('TestPassword');
    cy.get('.forms__buttonGradient___wj4os').click();
    cy.get('.notifications__notification___3wwtp > :nth-child(1)').should(
      'have.text',
      'username or password was invalid'
    );
  });
});
