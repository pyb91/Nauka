/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Home page tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("should successfully login ", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
  });
});
