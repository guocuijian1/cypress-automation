import { MainPage } from '../../page-objects/main/main-page';
import { WorkspacesPage } from '../../page-objects/workspaces/workspaces-page';
import { MainData } from '../../page-objects/main/main-data';
import {OverviewPage} from "../../page-objects/workspace/overview/overview-page";

describe('Workspaces functions', () => {
  const mainPage = new MainPage();
  const workspacesPage = new WorkspacesPage();
  const mainData = new MainData();
  const summaryPanel = workspacesPage.summaryPanel;
  const overviewPage = new OverviewPage();


  before(() => {
    mainData.prepareData();
  });

  beforeEach(() => {
    mainPage.enterWorkspacesPage();
  });

  it('should be able to enter default worksapce', () => {
    summaryPanel.clickDefaultWorkspace();
    overviewPage.getOverviewTitle().then(title => {
      expect(title.trim()).to.eq('Overview');
    });
  });
});
