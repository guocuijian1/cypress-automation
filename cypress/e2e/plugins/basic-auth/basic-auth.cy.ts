import { PluginsPage } from '../../../page-objects/workspace/plugins/plugins-page';
import { NewPluginPage } from '../../../page-objects/workspace/plugins/new-plugin-page';
import { DetailPage } from '../../../page-objects/workspace/plugins/base-auth/detail-page';
import {NewPage} from "../../../page-objects/workspace/plugins/base-auth/new-page";

describe('Plugins functions', () => {
  const pluginsPage = new PluginsPage();
  const newPluginPage = new NewPluginPage();
  const detailPage = new DetailPage();
  const newPage = new NewPage();

  beforeEach(() => {
    pluginsPage.navigateToPage();
    pluginsPage.getTitleContent().should('contain', 'Plugins');
  });

  it('should create a basic auth type plugin', () => {
    pluginsPage.clickNewPluginButton();

    newPluginPage.clickBaseAuthEnable();
    newPage.clickGlobalRadio();
    newPage.clickSaveButton();

    detailPage.getIdContent().should('not.be.null');
  });
});

