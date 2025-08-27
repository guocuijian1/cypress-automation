// 文件路径：cypress/page-objects/workspace/common/common-utils.ts

export class CommonUtils {
    /**
     * 页面标题定位器
     */
    pageTitleLocator = "section span.title";

    /**
     * 获取页面标题文本（通过 pageTitleLocator 获取 span 元素文本）
     */
    static getTitle(): Cypress.Chainable<string> {
        // 直接通过 locator 获取 span.title 的文本
        return cy.get("section span.title").invoke('text');
    }

    /**
     * 跳转到指定 URL
     * @param url 目标页面 URL
     */
    static navigateToUrl(url: string): void {
        cy.visit(url);
    }

    /**
     * 关闭浏览器（Cypress 无直接关闭浏览器 API，可用 cy.window().then(win => win.close()) 但仅限新窗口）
     */
    static closeBrowser(): void {
        cy.window().then(win => win.close());
    }
}
