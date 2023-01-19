/// <reference types="cypress" />

class footerSection {
  private footerCopy: string = ".footer_copy";
  private footerTwitter: string = ".social_twitter > a";
  private twitterURL: string = "https://twitter.com/saucelabs";
  private footerFacebook: string = ".social_facebook > a";
  private facebookURL: string = "https://www.facebook.com/saucelabs";
  private footerLinkedin: string = ".social_linkedin > a";
  private linkedinURL: string = "linkedin";
  "sauce";
  checkFooterYear() {
    const d = new Date();
    let year = d.getFullYear();
    cy.get(this.footerCopy).should("contain", year);
  }
  openSocialLinkTwitter() {
    cy.get(this.footerTwitter).invoke("removeAttr", "target").click();
    cy.url().should("contain", this.twitterURL);
  }
  openSocialLinkFacebook() {
    cy.get(this.footerFacebook).invoke("removeAttr", "target").click();
    cy.url().should("contain", this.facebookURL);
  }
  openSocialLinkLinkedin() {
    cy.get(this.footerLinkedin).invoke("removeAttr", "target").click();
    cy.url().should("contain", this.linkedinURL);
  }
}

export default new footerSection();
