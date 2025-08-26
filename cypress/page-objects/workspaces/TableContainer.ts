import { TableObject } from './TableObject';

export class TableContainer {
    public readonly filterInput = 'input[placeholder="Filter Workspaces"]';
    public readonly tableObject: TableObject;

    constructor() {
        this.tableObject = new TableObject();
    }
}

