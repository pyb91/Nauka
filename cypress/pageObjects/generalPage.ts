/// <reference types="cypress" />

class GeneralPage {
    
    goToBasket() {
        cy.get('.shopping_cart_badge').click();    
    }
    loggedInAssertion() {
        cy.url().should('contain', 'inventory.html');
    }
    openHamburgerMenu() {
        cy.get('#react-burger-menu-btn').click();
    }
    logOut() {
        cy.get('#logout_sidebar_link').click();
    }
    footerYear() {
        const d = new Date();
        let year = d.getFullYear();
        cy.get('.footer_copy').should('contain', year);
    }



}
export default new GeneralPage();