export class RoutesDetailsPage {
    // 路由详情标题定位器
    titleLocator: string = 'header span.title';

    /**
     * 获取详情页标题内容
     */
    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }

}

