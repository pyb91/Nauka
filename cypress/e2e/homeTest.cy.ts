/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Home page tests", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com");
    });

    it("should successfully login ", () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('.shopping_cart_link');
    });

    it("should successfully buy products", () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_badge').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Pawel');
        cy.get('[data-test="lastName"]').type('Cybowicz');
        cy.get('[data-test="postalCode"]').type('40-850');
        cy.get('[data-test="continue"]').click();
        cy.url().should('contain', 'checkout-step-two.html');
        cy.get('[data-test="finish"]').click();
        cy.url().should('contain', 'checkout-complete.html');
    });

    it("should successfully login ", () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#about_sidebar_link').click();


    });


});
