export class UpstreamsPage {
    // Page title locator
    public readonly titleLocator = "section span.title";
    // New upstream button locator
    public readonly newUpstreamButtonLocator = "a[data-testid='empty-state-action']";
    public readonly addUpstreamButtonLocator = "a[data-testid='toolbar-add-upstream']";
    public readonly pageUrl = "http://localhost:8002/default/upstreams";

    // Get page title content
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }
    // Click new upstream button
    clickNewUpstreamButton() {
        //TO-DO:need refactor later
        cy.get(this.titleLocator).should('be.visible');
        cy.wait(1000);
        cy.get('body').then($body => {
            if ($body.find(this.newUpstreamButtonLocator).length > 0 && $body.find(this.newUpstreamButtonLocator).is(':visible')) {
                cy.get(this.newUpstreamButtonLocator).click();
            } else if ($body.find(this.addUpstreamButtonLocator).length > 0 && $body.find(this.addUpstreamButtonLocator).is(':visible')) {
                cy.get(this.addUpstreamButtonLocator).click();
            } else {
                throw new Error('No visible Upstream button found');
            }
        });
    }
    // Navigate to page
    navigateToPage() {
        cy.visit(this.pageUrl);
    }
}
