/// <reference types="cypress" />
import basketPage from "../pageObjects/basketPage";
import loginPage from "../pageObjects/loginPage";
import generalPage from "../pageObjects/generalPage";
import checkoutSection from "../pageObjects/checkoutSection";
import productsPage from "../pageObjects/productsPage";
import headerSection from "../pageObjects/headerSection";
import footerSection from "../pageObjects/footerSection";

const dimensions = ["samsung-s10", "iphone-x", "macbook-15"];

beforeEach(() => {
  cy.visit("https://www.saucedemo.com");
  loginPage.enterUsername("standard_user");
  loginPage.enterPassword("secret_sauce");
  loginPage.clickLogin();
});
describe("Home page tests", () => {
  dimensions.forEach((dimension: Cypress.ViewportPreset) => {
    it(`should successfully login  - ${dimension}`, () => {
      cy.viewport(dimension);
      generalPage.loggedInAssertion();
    });

    it(`should successfully buy products - ${dimension}`, () => {
      cy.viewport(dimension);
      productsPage.addSauceLabsBackpack();
      productsPage.addSauceLabsBikeLight();
      headerSection.goToBasket();
      checkoutSection.clickCheckout();
      checkoutSection.enterRandomFirstName();
      checkoutSection.enterRandomLastName();
      checkoutSection.enterRandomZipCode();
      checkoutSection.clickContinue();
      checkoutSection.finishCheckout();
      checkoutSection.checkIfCheckoutCompleted();
    });

    it(`should successfully remove from cart - ${dimension}` , () => {
      cy.viewport(dimension);
      productsPage.addSauceLabsBackpack();
      productsPage.addSauceLabsBikeLight();
      headerSection.goToBasket();
      basketPage.removeSauceLabsBackpackFromBasket();
      basketPage.removeSauceLabsBikeLightFromBasket();
      basketPage.checkBasketProducts();
    });

    it(`should succesfully logout - ${dimension}`, () => {
      cy.viewport(dimension);
      generalPage.openHamburgerMenu();
      generalPage.logOut();
      loginPage.clickLogin();
      loginPage.assertLoginFormExists();
    });

    it(`footer should display current year - ${dimension}`, () => {
      cy.viewport(dimension);
      footerSection.checkFooterYear();
    });

    it(`should open saucelab twitter page - ${dimension}`, () => {
      cy.viewport(dimension);
      footerSection.openSocialLinkTwitter();
    });

    it(`should open saucelab facebook page - ${dimension}`, () => {
      cy.viewport(dimension);
      footerSection.openSocialLinkFacebook();
    });

    it(`should open saucelab linkedin - ${dimension}`, () => {
      cy.viewport(dimension);
      footerSection.openSocialLinkLinkedin();
    });
  });
});
