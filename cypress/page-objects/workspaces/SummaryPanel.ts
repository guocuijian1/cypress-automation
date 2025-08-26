export class SummaryPanel {
    private readonly servicesTextLocator = 'div[data-testid="Services"] div.metric-value-text';
    private readonly routesTextLocator = 'div[data-testid="Routes"] div.metric-value-text';
    private readonly consumersTextLocator = 'div[data-testid="Consumers"] div.metric-value-text';
    private readonly pluginsTextLocator = 'div[data-testid="Plugins"] div.metric-value-text';
    private readonly apiRequestTextLocator = 'div[data-testid="API Requests"] div.metric-value-text';

    getServicesCount(): Cypress.Chainable<number> {
        return cy.get(this.servicesTextLocator).invoke('text').then(text => Number(text.trim()));
    }
    getRoutesCount(): Cypress.Chainable<number> {
        return cy.get(this.routesTextLocator).invoke('text').then(text => Number(text.trim()));
    }
    getConsumersCount(): Cypress.Chainable<number> {
        return cy.get(this.consumersTextLocator).invoke('text').then(text => Number(text.trim()));
    }
    getPluginsCount(): Cypress.Chainable<number> {
        return cy.get(this.pluginsTextLocator).invoke('text').then(text => Number(text.trim()));
    }
    getAPIRequestCount(): Cypress.Chainable<string> {
        return cy.get(this.apiRequestTextLocator).invoke('text').then(text => text.trim());
    }
}

