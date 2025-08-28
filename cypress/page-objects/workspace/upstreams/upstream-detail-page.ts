export class UpstreamDetailPage {
    // 页面标题 locator
    public readonly titleLocator = "section span.title";
    // upstream 名称 locator
    public readonly nameLocator = "span[data-testid='upstream-detail-name']";
    // upstream ID locator
    public readonly idLocator = "div[data-testid='id-copy-uuid'] div.copy-text";

    // 获取页面标题内容
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }
    // 获取 upstream 名称
    getName(): Cypress.Chainable<string> {
        return cy.get(this.nameLocator).invoke('text');
    }
    // 获取 upstream ID
    getId(): Cypress.Chainable<string> {
        return cy.get(this.idLocator).invoke('text');
    }
}

