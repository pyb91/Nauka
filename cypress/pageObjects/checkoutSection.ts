/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

class checkoutSection {
  private finishCheckoutButton: string = '[data-test="finish"]';
  private checkoutCempleted: string = "checkout-complete.html";
  private checkoutStepTwo: string = "checkout-step-two.html";
  private checkoutButton: string = '[data-test="checkout"]';
  private continueButton: string = '[data-test="continue"]';
  private lastName: string = '[data-test="lastName"]';
  private zipCode: string = '[data-test="postalCode"]';
  private firstName: string = '[data-test="firstName"]';

  completeCheckoutStep2() {
    cy.url().should("contain", this.checkoutStepTwo);
  }
  finishCheckout() {
    cy.get(this.finishCheckoutButton).click();
  }
  completedCheckout() {
    cy.url().should("contain", this.checkoutCempleted);
  }
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
}
export default new checkoutSection();
