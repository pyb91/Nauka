/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import basketPage from "../pageObjects/basketPage";
import createBasket from "../pageObjects/productsPage";
import homePage from "../pageObjects/generalPage";
import loginPage from "../pageObjects/loginPage";
import generalPage from "../pageObjects/generalPage";
import checkout from "../pageObjects/checkout";

describe("Home page tests", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com");
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword("secret_sauce");
        loginPage.clickLogin();
    });

    it.only("should successfully login ", () => {
        generalPage.loggedInAssertion();
    });

    it("should successfully buy products", () => {
        createBasket.addSauceLabsBackpack();
        createBasket.addSauceLabsBikeLight();
        generalPage.goToBasket();
        basketPage.clickCheckout();
        basketPage.enterRandomFirstName();
        basketPage.enterRandomLastName();
        basketPage.enterRandomZipCode();
        basketPage.clickContinue();
        checkout.finishCheckout();
    });


    it("should successfully remove from cart ", () => {
        createBasket.addSauceLabsBackpack();
        createBasket.addSauceLabsBikeLight();
        generalPage.goToBasket();
        basketPage.removeSauceLabsBackpackFromBasket();
        basketPage.removeSauceLabsBikeLightFromBasket();

    });


    it("should succesfully logout", () => {
        generalPage.openHamburgerMenu();
        generalPage.logOut();
        loginPage.clickLogin();
        loginPage.loginEmptyForm();


    })

    it("footer should display current year", () => {
        generalPage.footerYear();
    })


});
