/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

class BasketPage {
    private checkoutButton: string = '[data-test="checkout"]'
    private continueButton: string = '[data-test="continue"]'
    private lastName: string = '[data-test="lastName"]'
    private zipCode: string = '[data-test="postalCode"]'
    private firstName: string = '[data-test="firstName"]'
    private removeBackpack: string = '[data-test="remove-sauce-labs-backpack"]'
    private removeBikeLight: string = '[data-test="remove-sauce-labs-bike-light"]'
    clickCheckout() {
        cy.get(this.checkoutButton).click();
    }
    clickContinue() {
        cy.get(this.continueButton).click();
    }

    enterRandomLastName() {
        cy.get(this.lastName).type(faker.name.lastName());
    }

    enterRandomZipCode() {
        cy.get(this.zipCode).type(faker.address.zipCode());
    }

    enterRandomFirstName() {
        cy.get(this.firstName).type(faker.name.firstName());
    }
    removeSauceLabsBackpackFromBasket(){
        cy.get(this.removeBackpack).click()
        
    }
    removeSauceLabsBikeLightFromBasket() {
        cy.get(this.removeBikeLight).click()
    }
}
export default new BasketPage();