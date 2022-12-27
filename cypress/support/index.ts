declare namespace Cypress {
  interface Chainable {
    getBySelector(value: string): Chainable<Element>;
  }
}
