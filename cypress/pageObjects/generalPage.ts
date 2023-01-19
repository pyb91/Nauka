/// <reference types="cypress" />

class generalPage {
  loggedInAssertion() {
    cy.url().should("contain", "inventory.html");
  }
  openHamburgerMenu() {
    cy.get("#react-burger-menu-btn").click();
  }
  logOut() {
    cy.get("#logout_sidebar_link").click();
  }
}
export default new generalPage();
