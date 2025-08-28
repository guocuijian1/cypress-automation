export class MainPage {
    private readonly baseUrl = 'http://localhost:8002';
    private readonly workspacesPath = '/workspaces';
    private readonly workspacesMenu = 'a[href="/workspaces"]';
    private readonly teamsMenu = 'a[href="/teams"]';
    private readonly devPortalMenu = 'a[href="/portal"]';
    private readonly analyticsMenu = 'a[href="/analytics"]';

    enterWorkspacesPage(): void {
        cy.visit(`${this.baseUrl}${this.workspacesPath}`);
        cy.get('body').should('be.visible');
        cy.wait(1000);
    }

    navigateToWorkspaces(): void {
        cy.get(this.workspacesMenu).click();
    }


    navigateToTeams(): void {
        cy.get(this.teamsMenu).click();
    }

    navigateToDevPortal(): void {
        cy.get(this.devPortalMenu).click();
    }

    navigateToAnalytics(): void {
        cy.get(this.analyticsMenu).click();
    }

    verifyAllMenusExist(): void {
        cy.get(this.workspacesMenu).should('exist');
        cy.get(this.teamsMenu).should('exist');
        cy.get(this.devPortalMenu).should('exist');
        cy.get(this.analyticsMenu).should('exist');
    }
}
