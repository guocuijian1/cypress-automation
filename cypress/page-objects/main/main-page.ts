export class MainPage {
    private readonly baseUrl = 'http://localhost:8002';
    private readonly workspacesPath = '/workspaces';
    private readonly workspacesMenu = 'a[href="/workspaces"]';
    private readonly teamsMenu = 'a[href="/teams"]';
    private readonly devPortalMenu = 'a[href="/portal"]';
    private readonly analyticsMenu = 'a[href="/analytics"]';

    /**
     * 进入工作区页面
     */
    enterWorkspacesPage(): void {
        cy.visit(`${this.baseUrl}${this.workspacesPath}`);
        // 等待页面加载完成
        cy.get('body').should('be.visible');
        // 给页面一些时间来完成初始化
        cy.wait(1000);
    }

    /**
     * 导航到工作区页面
     */
    navigateToWorkspaces(): void {
        cy.get(this.workspacesMenu).click();
    }

    /**
     * 导航到团队页面
     */
    navigateToTeams(): void {
        cy.get(this.teamsMenu).click();
    }

    /**
     * 导航到开发者门户页面
     */
    navigateToDevPortal(): void {
        cy.get(this.devPortalMenu).click();
    }

    /**
     * 导航到分析页面
     */
    navigateToAnalytics(): void {
        cy.get(this.analyticsMenu).click();
    }

    /**
     * 验证所有菜单是否存在（不一定可见）
     */
    verifyAllMenusExist(): void {
        cy.get(this.workspacesMenu).should('exist');
        cy.get(this.teamsMenu).should('exist');
        cy.get(this.devPortalMenu).should('exist');
        cy.get(this.analyticsMenu).should('exist');
    }
}
