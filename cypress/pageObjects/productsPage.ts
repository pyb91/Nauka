/// <reference types="cypress" />

class CreateBasket{
    private addBackpack: string = '[data-test="add-to-cart-sauce-labs-backpack"]'
    private addBikeight: string = '[data-test="add-to-cart-sauce-labs-bike-light"]'
addSauceLabsBackpack() {
    cy.get(this.addBackpack).click();
}
addSauceLabsBikeLight() {
    cy.get(this.addBikeight).click();
}

}
export default new CreateBasket();