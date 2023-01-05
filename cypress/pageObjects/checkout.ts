/// <reference types="cypress" />

class checkout {
    completeCheckout() {
    cy.url().should('contain', 'checkout-step-two.html');
    cy.get('[data-test="finish"]').click();
    cy.url().should('contain', 'checkout-complete.html');
    }
}
export default new checkout();