/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import loginPage from "../pageObjects/loginPage";

const dimensions = ["samsung-s10", "iphone-x", "macbook-15"];

beforeEach(() => {
  cy.visit("https://www.saucedemo.com");
});

describe("Home page tests", () => {
      dimensions.forEach((dimension: Cypress.ViewportPreset) => {
        it(`should not allow locked out user to log in - ${dimension}`, () => {
          cy.viewport(dimension);
          loginPage.enterUsername("locked_out_user");
          loginPage.enterPassword("secret_sauce");
          loginPage.clickLogin();
          loginPage.showLockedOutUserLoginErrorMessage();
        });
        it(`should not log in random data - ${dimension}`, () => {
          cy.viewport(dimension);
          loginPage.enterUsername(faker.name.fullName());
          loginPage.enterPassword(faker.random.word());
          loginPage.clickLogin();
          loginPage.showWrongCredentialsLoginErrorMessage();
        });

      });

});


