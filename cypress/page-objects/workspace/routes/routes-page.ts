import { CommonUtils } from '../common/common-utils';

export class RoutesPage {
    // Gateway service page URL
    routesUrl = "http://localhost:8002/default/routes";
    // Route list table locator
    routesTableLocator = 'div.table-container table';
    // New route button locator, shown when route list is empty
    newRouteButtonLocator = "a[data-testid='empty-state-action']";
    // New route button locator, shown when route list is not empty
    addRouteButtonLocator = "a[data-testid='toolbar-add-route']";

    // Page title locator
    titleLocator = "section span.title";

    /**
     * Get the route list table element
     */
    getRoutesTable(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.routesTableLocator);
    }

    /**
     * Get the page title text
     */
    getTitleText(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }

    /**
     * Navigate to the routes page
     */
    navigateToPage() {
        CommonUtils.navigateToUrl(this.routesUrl);
    }

    /**
     * Click the new route button (prefer the visible button: newRouteButtonLocator or addRouteButtonLocator)
     */
    clickNewRouteButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        // Wait for the route table to render, up to 10 seconds
        //TO_DO:need refactor later
        cy.get(this.titleLocator, { timeout: 10000 }).should('be.visible');
        cy.wait(1000)
        return cy.get('body').then($body => {
            if ($body.find(this.newRouteButtonLocator).length > 0 && $body.find(this.newRouteButtonLocator).is(':visible')) {
                return cy.get(this.newRouteButtonLocator).click();
            } else if ($body.find(this.addRouteButtonLocator).length > 0 && $body.find(this.addRouteButtonLocator).is(':visible')) {
                return cy.get(this.addRouteButtonLocator).click();
            } else {
                throw new Error('No visible new route button found');
            }
        });
    }
}
