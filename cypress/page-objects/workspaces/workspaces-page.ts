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
     * 等待页面元素加载完成
     */
    private waitForPageLoad(): void {
        cy.get(this.tableContainer.filterInput).should('exist');
        cy.get(this.getStartedButton).should('exist');
    }

    /**
     * 在过滤输入框中输入文本
     * @param text 要过滤的文本
     */
    filterWorkspaces(text: string): void {
        this.waitForPageLoad();
        cy.get(this.tableContainer.filterInput).clear().type(text);
    }

    /**
     * 点击"Get Started"按钮
     */
    clickGetStarted(): void {
        cy.get(this.getStartedButton).click();
    }

    /**
     * 验证过滤输入框是否可见
     */
    verifyFilterInputVisible(): void {
        cy.get(this.tableContainer.filterInput).should('be.visible');
    }

    /**
     * 验证过滤结果
     * @param expectedText 期望的过滤文本
     */
    verifyFilterValue(expectedText: string): void {
        cy.get(this.tableContainer.filterInput).should('have.value', expectedText);
    }
}
