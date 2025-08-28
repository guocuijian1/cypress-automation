export class RoutesDetailsPage {
    // Route detail title locator
    titleLocator: string = 'header span.title';

    /**
     * Get the title content of the details page
     */
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }

}
