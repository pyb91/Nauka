/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import basketPage from "../pageObjects/basketPage";
import loginPage from "../pageObjects/loginPage";

describe("Home page tests", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com");
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword("secret_sauce");
        loginPage.clickLogin();
    });

    it("should successfully login ", () => {
        cy.get('.shopping_cart_link');
    });

    it("should successfully buy products", () => {
        basketPage.enterRandomFirstName();
        basketPage.enterRandomLastName();
        basketPage.enterRandomZipCode();
        basketPage.clickContinue();
        cy.url().should('contain', 'checkout-step-two.html');
        cy.get('[data-test="finish"]').click();
        cy.url().should('contain', 'checkout-complete.html');
    });

    it("should successfully display about ", () => {
        cy.get('#react-burger-menu-btn').click();
        cy.get('#about_sidebar_link').click();


    });
    it("should successfully remove from cart ", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_badge').click();
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()

    });


});
