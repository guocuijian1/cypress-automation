export class ConsumerDetailPage {
    // 页面标题定位器
    titleLocator: string = "header span.title";

    /**
     * 获取详情页标题内容
     */
    getTitleText(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }
}


