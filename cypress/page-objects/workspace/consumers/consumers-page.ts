export class ConsumersPage {
    // 新建消费者按钮定位器
    newConsumerButtonLocator: string = "a[data-testid='empty-state-action']";
    addConsumerButtonLocator: string = "button[data-testid='toolbar-add-consumer']";

    // 页面标题定位器
    titleLocator: string = "section span.title";

    /**
     * 获取页面标题文本
     */
    getTitleText(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }

    /**
     * 跳转到消费者页面
     */
    navigateToPage() {
        cy.visit('http://localhost:8002/default/consumers');
    }

    /**
     * 点击新建消费者按钮（优先点击 newConsumerButtonLocator，若不可见则点击 addConsumerButtonLocator）
     * 均设置超时时间，若都不可见则抛出异常
     */
    clickNewConsumerButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        cy.get(this.titleLocator, { timeout: 10000 }).should('be.visible');
        //TO-DO:need refactor later
        cy.wait(1000);
        return cy.get('body').then($body => {
            if ($body.find(this.newConsumerButtonLocator).length) {
                cy.get(this.newConsumerButtonLocator).click();
            } else if ($body.find(this.addConsumerButtonLocator).length) {
                cy.get(this.addConsumerButtonLocator).click();
            } else {
                throw new Error('未找到可见的新建消费者按钮');
            }
        });
    }
}
