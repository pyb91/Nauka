/// <reference types="cypress" />

class CreateBasket{
addSauceLabsBackpack() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
}
addSauceLabsBikeLight() {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
}

}
export default new CreateBasket();