/// <reference types="cypress" />

class GeneralPage {
    goToBasket() {
        cy.get('.shopping_cart_badge').click();
    }
    loggedInAssertion() {
        cy.url().should('contain', 'inventory.html');

    }
}
export default new GeneralPage();