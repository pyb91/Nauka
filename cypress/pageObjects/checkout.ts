/// <reference types="cypress" />

class checkout {
    private finishCheckoutButton: string = '[data-test="finish"]'
    private checkoutCempleted: string = '[checkout-complete.html]'
    private checkoutStepTwo: string = '[checkout-step-two.html]'


    completeCheckoutStep2() {
    cy.url().should('contain', this.checkoutStepTwo);
    }
    finishCheckout(){
    cy.get(this.finishCheckoutButton).click();
    }
    completedCheckout(){
    cy.url().should('contain', this.checkoutCempleted);
    }
}
export default new checkout();