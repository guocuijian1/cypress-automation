import { SummaryPanel } from './SummaryPanel';
import { TableContainer } from './TableContainer';

export class WorkspacesPage {
    private readonly getStartedButton = 'a[type="button"]:contains("Get Started")';
    public readonly summaryPanel: SummaryPanel;
    public readonly tableContainer: TableContainer;
    constructor() {
        this.summaryPanel = new SummaryPanel();
        this.tableContainer = new TableContainer();
    }

    /**
     * Wait for page elements to finish loading
     */
    private waitForPageLoad(): void {
        cy.get(this.tableContainer.filterInput).should('exist');
        cy.get(this.getStartedButton).should('exist');
    }

    /**
     * Input text in the filter input box
     * @param text Text to filter
     */
    filterWorkspaces(text: string): void {
        this.waitForPageLoad();
        cy.get(this.tableContainer.filterInput).clear().type(text);
    }

    /**
     * Click the "Get Started" button
     */
    clickGetStarted(): void {
        cy.get(this.getStartedButton).click();
    }

    /**
     * Verify the filter input is visible
     */
    verifyFilterInputVisible(): void {
        cy.get(this.tableContainer.filterInput).should('be.visible');
    }

    /**
     * Verify the filter result
     * @param expectedText Expected filter text
     */
    verifyFilterValue(expectedText: string): void {
        cy.get(this.tableContainer.filterInput).should('have.value', expectedText);
    }
}
