/// <reference types="cypress" />

class headerSection {
  private shoppingCart: string = ".shopping_cart_badge";

  goToBasket() {
    cy.get(this.shoppingCart).click();
  }
}

export default new headerSection();
