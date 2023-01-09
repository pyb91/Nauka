/// <reference types="cypress" />

class checkout {
    private finishCheckoutButton: string = '[data-test="finish"]'
    completeCheckoutStep2() {
    cy.url().should('contain', 'checkout-step-two.html');

    }
    finishCheckout(){
    cy.get(this.finishCheckoutButton).click();
    }
    completedCheckout(){
    cy.url().should('contain', 'checkout-complete.html');
    }
}
export default new checkout();