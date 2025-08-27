// 文件路径：cypress/page-objects/workspace/plugins/new-plugin-page.ts

export class NewPluginPage {
    // 页面标题定位器
    titleLocator: string = 'header span.title';

    /**
     * 基础认证启用按钮定位器：父级为 data-testid="basic-auth-card" 的 a 标签，子 div 文本为 Enable
     */
    baseAuthEnableLocator: string = 'a[data-testid="basic-auth-card"]>div:contains("Enable")';


    /**
     * 获取页面标题文本
     */
    getTitleText(): Cypress.Chainable<string> {
        return cy.get(this.titleLocator).invoke('text');
    }

    /**
     * 点击基础认证启用按钮（文本严格等于 Enable 的 div）
     */
    clickBaseAuthEnable(): void {
        cy.get(this.baseAuthEnableLocator).click();
    }
}
