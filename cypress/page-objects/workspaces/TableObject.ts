export class TableObject {
    private readonly columnsLocator = 'div.table-container table thead tr th span.table-header-label';
    private readonly rowsLocator = 'div.table-container table > tbody > tr';

    // Get all columns (text of table header th elements)
    getAllColumns(): Cypress.Chainable<string[]> {
        return cy.get(this.columnsLocator).then($spans => {
            return Cypress._.map($spans, span => span.textContent?.trim() ?? '');
        });
    }
    // Get total number of rows in the table
    getRowNumber(): Cypress.Chainable<number> {
        // Use rowsLocator to get all rows and return the count
        return cy.get(this.rowsLocator).its('length');
    }
    // Get all cell contents of the specified row
    getRow(rowIndex: number): Cypress.Chainable<string[]> {
        // Use rowsLocator to get all rows, then select the specified row and get the text of all td elements in that row
        return cy.get(this.rowsLocator).eq(rowIndex).find('td').then($cells => {
            return Cypress._.map($cells, cell => cell.textContent?.trim() ?? '');
        });
    }
}
