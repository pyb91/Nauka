/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import loginPage from "../pageObjects/loginPage";

describe("Home page tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("should not allow locked out user to log in", () => {
    loginPage.enterUsername("locked_out_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.clickLogin();
    loginPage.showLockedOutUserLoginErrorMessage();
  });

  it("should not log in random data", () => {
    loginPage.enterUsername(faker.name.fullName());
    loginPage.enterPassword(faker.random.word());
    loginPage.clickLogin();
    loginPage.showWrongCredentialsLoginErrorMessage();
  });
});
