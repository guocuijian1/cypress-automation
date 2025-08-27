import { CommonUtils } from '../common/common-utils';
import * as cypress from "cypress";

export class RoutesPage {
    // 网关服务页面 URL
    routesUrl = "http://localhost:8002/default/routes";
    // 路由列表表格定位器
    routesTableLocator = 'div.table-container table';
    // 新建路由按钮定位器,路由列表为空时会显示
    newRouteButtonLocator = "a[data-testid='empty-state-action']";
    // 新建路由按钮定位器,路由列表不为空时会显示
    addRouteButtonLocator = "a[data-testid='toolbar-add-route']";

    // 页面标题定位器
    titleLocator = "section span.title";

    /**
     * 获取路由列表表格元素
     */
    getRoutesTable(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.routesTableLocator);
    }

    /**
     * 获取页面标题文本
     */
    getTitleText(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }

    /**
     * 跳转到路由页面
     */
    navigateToPage() {
        CommonUtils.navigateToUrl(this.routesUrl);
    }

    /**
     * 点击新建路由按钮（优先使用可见的按钮：newRouteButtonLocator 或 addRouteButtonLocator）
     */
    clickNewRouteButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        // 等待路由表格渲染，最多 10 秒
        //TO_DO:need refactor later
        cy.get(this.titleLocator, { timeout: 10000 }).should('be.visible');
        cy.wait(1000)
        return cy.get('body').then($body => {
            if ($body.find(this.newRouteButtonLocator).length > 0 && $body.find(this.newRouteButtonLocator).is(':visible')) {
                return cy.get(this.newRouteButtonLocator).click();
            } else if ($body.find(this.addRouteButtonLocator).length > 0 && $body.find(this.addRouteButtonLocator).is(':visible')) {
                return cy.get(this.addRouteButtonLocator).click();
            } else {
                throw new Error('未找到可见的新建路由按钮');
            }
        });
    }
}
