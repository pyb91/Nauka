/// <reference types="cypress" />

class basketPage {
  private backpack: string = '[data-test="remove-sauce-labs-backpack"]';
  private bikeLight: string = '[data-test="remove-sauce-labs-bike-light"]';
  private basketProducts: string = ".cart_item";

  removeSauceLabsBackpackFromBasket() {
    cy.get(this.backpack).click();
  }
  removeSauceLabsBikeLightFromBasket() {
    cy.get(this.bikeLight).click();
  }
  checkBasketProducts() {
    cy.get(this.basketProducts).should("not.exist");
  }
}
export default new basketPage();
