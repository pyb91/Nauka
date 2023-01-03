/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

class BasketPage{
    addingToCart() {
         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
         cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
         cy.get('.shopping_cart_badge').click();
         cy.get('[data-test="checkout"]').click();
    }


    clickContinue() {
        cy.get('[data-test="continue"]').click();
    }

    enterRandomLastName() {
        cy.get('[data-test="lastName"]').type(faker.name.lastName());
    }

    enterRandomZipCode() {
        cy.get('[data-test="postalCode"]').type(faker.address.zipCode());
    }

    enterRandomFirstName() {
        cy.get('[data-test="firstName"]').type(faker.name.firstName());
    }
}
export default new BasketPage();