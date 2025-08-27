export class PluginsPage {
    // 页面标题内容定位器
    titleContentLocator: string = 'section span.title';
    // 新建插件按钮定位器
    addPluginButtonLocator: string = "a[data-testid='toolbar-add-plugin']";
    newPluginButtonLocator: string = "a[data-testid='empty-state-action']";
    pluginsUrl: string = 'http://localhost:8002/default/plugins';

    getTitleContent(): Cypress.Chainable<string> {
        return cy.get(this.titleContentLocator).invoke('text');
    }

    /**
     * 点击新建插件按钮：优先点击 newPluginButtonLocator，否则点击 addPluginButtonLocator
     */
    clickNewPluginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        //TODO: need refactor later
        cy.get(this.titleContentLocator).should('be.visible');
        cy.wait(1000);
        // 优先查找 newPluginButtonLocator
        return cy.get('body').then($body => {
            if ($body.find(this.newPluginButtonLocator).length > 0 && $body.find(this.newPluginButtonLocator).is(':visible')) {
                return cy.get(this.newPluginButtonLocator).click();
            } else if ($body.find(this.addPluginButtonLocator).length > 0 && $body.find(this.addPluginButtonLocator).is(':visible')) {
                return cy.get(this.addPluginButtonLocator).click();
            } else {
                throw new Error('未找到可见的新建插件按钮');
            }
        });
    }

    navigateToPage(): void {
        cy.visit(this.pluginsUrl);
    }
}
