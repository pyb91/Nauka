/// <reference types="cypress" />
const dimensions = ["samsung-s10", "iphone-x"];
dimensions.forEach((dimension: Cypress.ViewportPreset) => {
})
class setResolutions {
    preSetResolutions() {
        cy.viewport(dimensions);
    }

}
export default new setResolutions();