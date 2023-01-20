/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

class loginPage {
  private loginInput: string = '[data-test="username"]';
  private loginPasswordInput: string = '[data-test="password"]';
  private loginButton: string = '[data-test="login-button"]';
  private loginError: string = '[data-test="error"]';

  enterUsername(userName: string) {
    cy.get(this.loginInput).type(userName);
  }
  enterPassword(password: string) {
    cy.get(this.loginPasswordInput).type(password);
  }
  clickLogin() {
    cy.get(this.loginButton).click();
  }
  assertLoginFormExists() {
    cy.get(this.loginError).should(
      "contain",
      "Epic sadface: Username is required"
    );
  }
  lockedOutUserErrorMessage() {
    cy.get(this.loginError).should(
      "contain",
      "Epic sadface: Sorry, this user has been locked out."
    );
  }
  loginWrongCredentialsErrorMessage() {
    cy.get(this.loginError).should(
      "contain",
      "Epic sadface: Username and password do not match any user in this service"
    );
  }
}
export default new loginPage();
