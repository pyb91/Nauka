/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

class BasketPage {
    clickCheckout() {
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
    removeSauceLabsBackpackFromBasket(){
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        
    }
    removeSauceLabsBikeLightFromBasket() {
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    }
}
export default new BasketPage();