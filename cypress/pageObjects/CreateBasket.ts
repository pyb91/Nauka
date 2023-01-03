/// <reference types="cypress" />

class CreateBasket{
    getShoppingProcess() {
         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
         cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
         cy.get('.shopping_cart_badge').click();
         cy.get('[data-test="checkout"]').click();
    }

    

}
export default new CreateBasket();