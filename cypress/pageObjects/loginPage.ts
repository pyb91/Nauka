/// <reference types="cypress" />
/// <reference path="../support/index.ts" />

import { faker } from "@faker-js/faker";

class loginPage {
  private loginInput: string = "username";
  private loginPasswordInput: string = "password";
  private loginButton: string = "login-button";
  enterUsername(userName: string) {
    cy.getBySelector(this.loginInput).type(userName);
  }
  enterPassword(password: string) {
    cy.getBySelector(this.loginPasswordInput).type(password);
  }
  clickLogin() {
    cy.getBySelector(this.loginButton).click();
  }
}
export default new loginPage();
