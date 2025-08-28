export class RedisConfigurationDetailPage {
    // 页面标题 locator
    public readonly titleLocator = "section span.title";
    public readonly idLocator = "div[data-testid='id-copy-uuid'] div.copy-text";


    // 获取页面标题内容
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }

    // 获取 Redis 配置的 ID 内容
    getIdValue(): Cypress.Chainable<string> {
        return cy.get(this.idLocator).invoke('text');
    }

}
