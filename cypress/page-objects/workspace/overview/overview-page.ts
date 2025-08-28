// 文件路径：overview/overview-page.ts

export class OverviewPage {
    // 定位 section 下 class 为 title 且文本为 Overview 的 span 元素
    private readonly overviewTitle = "section span.title";

    /**
     * 获取文本为 'Overview' 的 section span.title 元素
     */
    getOverviewTitle(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.overviewTitle).invoke('text');
    }
}