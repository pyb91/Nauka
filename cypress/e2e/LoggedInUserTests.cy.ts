/// <reference types="cypress" />
import basketPage from "../pageObjects/basketPage";
import loginPage from "../pageObjects/loginPage";
import generalPage from "../pageObjects/generalPage";
import checkoutSection from "../pageObjects/checkoutSection";
import productsPage from "../pageObjects/productsPage";
import headerSection from "../pageObjects/headerSection";
import footerSection from "../pageObjects/footerSection";

describe("Home page tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.clickLogin();
  });

  it("should successfully login ", () => {
    generalPage.loggedInAssertion();
  });

  it("should successfully buy products", () => {
    productsPage.addSauceLabsBackpack();
    productsPage.addSauceLabsBikeLight();
    headerSection.goToBasket();
    checkoutSection.clickCheckout();
    checkoutSection.enterRandomFirstName();
    checkoutSection.enterRandomLastName();
    checkoutSection.enterRandomZipCode();
    checkoutSection.clickContinue();
    checkoutSection.finishCheckout();
  });

  it("should successfully remove from cart ", () => {
    productsPage.addSauceLabsBackpack();
    productsPage.addSauceLabsBikeLight();
    headerSection.goToBasket();
    basketPage.removeSauceLabsBackpackFromBasket();
    basketPage.removeSauceLabsBikeLightFromBasket();
  });

  it("should succesfully logout", () => {
    generalPage.openHamburgerMenu();
    generalPage.logOut();
    loginPage.clickLogin();
    loginPage.loginEmptyForm();
  });

  it("footer should display current year", () => {
    footerSection.checkFooterYear();
  });
  it("should open saucelab twitter page", () => {
    footerSection.openSocialLinkTwitter();
  });
  it("should open saucelab facebook page", () => {
    footerSection.openSocialLinkFacebook();
  });
  it("should open saucelab linkedin", () => {
    footerSection.openSocialLinkLinkedin();
  });
});
