export class RedisConfigurationsPage {
    // 新建 Redis 配置按钮的 locator
    private readonly  newRedisConfigButtonLocator = "a[data-testid='empty-state-action']";
    private readonly  addRedisConfigButtonLocator = "a[data-testid='toolbar-add-redis-configuration']";
    private readonly titleLocator: string = "header span.title";
    public readonly pageUrl = "http://localhost:8002/default/redis-configurations";

    // 点击新建 Redis 配置按钮
    clickNewRedisConfigButton() {
        //TO-DO:need refactor later
        cy.get(this.titleLocator).should('be.visible');
        cy.wait(1000)
        cy.get('body').then($body => {
            if ($body.find(this.newRedisConfigButtonLocator).length > 0 && $body.find(this.newRedisConfigButtonLocator).is(':visible')) {
                cy.get(this.newRedisConfigButtonLocator).click();
            } else if ($body.find(this.addRedisConfigButtonLocator).length > 0 && $body.find(this.addRedisConfigButtonLocator).is(':visible')) {
                cy.get(this.addRedisConfigButtonLocator).click();
            } else {
                throw new Error('No visible Redis configuration button found');
            }
        });
    }

    // 获取页面标题内容
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }

    // 页面跳转方法
    navigateToPage() {
        cy.visit(this.pageUrl);
    }
}
