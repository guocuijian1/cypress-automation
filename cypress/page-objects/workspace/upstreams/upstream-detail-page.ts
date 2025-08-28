export class UpstreamDetailPage {
    // Page title locator
    public readonly titleLocator = "section span.title";
    // Upstream name locator
    public readonly nameLocator = "span[data-testid='upstream-detail-name']";
    // Upstream ID locator
    public readonly idLocator = "div[data-testid='id-copy-uuid'] div.copy-text";

    // Get page title content
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }
    // Get upstream name
    getName(): Cypress.Chainable<string> {
        return cy.get(this.nameLocator).invoke('text');
    }
    // Get upstream ID
    getId(): Cypress.Chainable<string> {
        return cy.get(this.idLocator).invoke('text');
    }
}
