/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

class loginPage{
    private loginInput: string = '[data-test="username"]'
    private loginPasswordInput: string = '[data-test="password"]'
    private loginButton: string = '[data-test="login-button"]'
    enterUsername(userName: string){ 
        cy.get(this.loginInput).type(userName); 
    }
    enterPassword(password: string){
        cy.get(this.loginPasswordInput).type(password);
    }
    clickLogin(){
        cy.get(this.loginButton).click();
    }

    

}
export default new loginPage();