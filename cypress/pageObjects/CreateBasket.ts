/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

class CreateBasket{
    getShoppingProcess() {
         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
         cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
         cy.get('.shopping_cart_badge').click();
         cy.get('[data-test="checkout"]').click();
    }
    getEnterShopperInfo() {
        cy.get('[data-test="firstName"]').type(faker.name.firstName());
        cy.get('[data-test="lastName"]').type(faker.name.lastName());
        cy.get('[data-test="postalCode"]').type(faker.address.zipCode());
        cy.get('[data-test="continue"]').click();
    }
}
export default new CreateBasket();