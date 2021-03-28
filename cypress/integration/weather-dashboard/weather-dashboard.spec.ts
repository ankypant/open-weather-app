describe('Login spec', () => {
  it('should visit the login page', () => {
    cy.visit('/');
  });

  it('should fill in the username', () => {
    cy.get('#username').clear().type('ankitpant');
  });

  it('should fill in the password', () => {
    cy.get('#password').clear().type('dummypassword');
  });

  it('should click the login', () => {
    cy.get('#login-button').click();
  });

  it('should navigate to home page', () => {
    cy.wait(1000);
    cy.url().should('include', 'home');
  });

  it('should create cityWrapper', () => {
    cy.get('body')
      .find('#cityWrapper')
      .should($cityWrapper => {
        expect($cityWrapper).to.have.length(1);
      });
  });
  it('should create 5 cityWrapper', () => {
    cy.get('#cityWrapper')
      .find('app-city-card')
      .should($cityCards => {
        expect($cityCards).to.have.length(5);
      });
  });

  it('should show current temprature', () => {
    cy.get('.temprature').should('be.visible');
  });

  it('should show modal on click of view more button', () => {
    cy.get('#viewMoreButtonAmsterdam').click();
  });
});
