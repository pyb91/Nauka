/// <reference types="cypress" />

class basketPage {
  private removeBackpack: string = '[data-test="remove-sauce-labs-backpack"]';
  private removeBikeLight: string =
    '[data-test="remove-sauce-labs-bike-light"]';

  removeSauceLabsBackpackFromBasket() {
    cy.get(this.removeBackpack).click();
  }
  removeSauceLabsBikeLightFromBasket() {
    cy.get(this.removeBikeLight).click();
  }
}
export default new basketPage();
