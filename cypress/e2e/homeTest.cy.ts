/// <reference types="cypress" />
import {faker} from "@faker-js/faker"


describe('Home page tests', () => {
    beforeEach(() => {
        cy.visit('http://skleptest.pl/')
    })

    it('should successfully register ', () => {
        cy.get('.top-account').click()
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())
        cy.get('input[name="register"]').click()

        
    })

})
