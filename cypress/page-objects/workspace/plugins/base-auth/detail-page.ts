import {NewPageConfiguration} from "./new-page-configuration";

export class DetailPage {
    // 页面标题定位器
    titleLocator: string = 'header span.title';
    configPage = new NewPageConfiguration();

    getTitleText(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }

    getIdContent(): Cypress.Chainable<string> {
        return this.configPage.getIdContent();
    }

}


