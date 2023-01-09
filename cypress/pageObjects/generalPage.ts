/// <reference types="cypress" />

class GeneralPage {
    private basketIcon: string = '[.shopping_cart_badge]'

    goToBasket() {
        cy.get(this.basketIcon).click();
    }
    loggedInAssertion() {
        cy.url().should('contain', 'inventory.html');

    }
}
export default new GeneralPage();