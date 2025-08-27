import { MainPage } from '../../page-objects/main/main-page';
import { WorkspacesPage } from '../../page-objects/workspaces/workspaces-page';
import { MainData } from '../../page-objects/main/main-data';

describe.skip('Workspaces functions', () => {
  const mainPage = new MainPage();
  const workspacesPage = new WorkspacesPage();
  const mainData = new MainData();
  const summaryPanel = workspacesPage.summaryPanel;
  const tableContainer = workspacesPage.tableContainer;
  const tableObject = tableContainer.tableObject;

  before(() => {
    mainData.prepareData();
  });

  beforeEach(() => {
    // 直接进入工作区页面
    mainPage.enterWorkspacesPage();
  });

  it('should verify all counts are zero or default', () => {
    summaryPanel.getServicesCount().should('eq', 1);
    summaryPanel.getRoutesCount().should('eq', 1);
    summaryPanel.getConsumersCount().should('eq', 0);
    summaryPanel.getPluginsCount().should('eq', 1);
    summaryPanel.getAPIRequestCount().should('eq', '--');
  });

  it('should verify table columns and row count', () => {
    tableObject.getAllColumns().should('have.length', 4);
    tableObject.getRowNumber().should('eq', 1);
  });
});
