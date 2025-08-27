import { GatewayServicesPage } from '../../page-objects/workspace/gateway-services/gateway-services-page';
import { MainPage } from '../../page-objects/main/main-page';
import {CommonUtils} from "../../page-objects/workspace/common/common-utils";
import {NewGatewayServicePage} from "../../page-objects/workspace/gateway-services/new-gateway-service-page";

describe('Gateway Services functions', () => {
  const mainPage = new MainPage();
  const gatewayServicesPage = new GatewayServicesPage();
  const newGatewayService = new NewGatewayServicePage();

  beforeEach(() => {
      gatewayServicesPage.navigateToPage();
      CommonUtils.getTitle().should('eq', 'Gateway Services');
  });

  it('should click the New Gateway Service button', () => {
    const url = 'https://httpbin.konghq.com';
    const name = 'example_service_' + Math.random().toString(36).substring(2, 10);

    gatewayServicesPage.clickNewGatewayServiceBtn();
    newGatewayService.getTitleContent().should('eq', 'New Gateway Service');

    newGatewayService.selectFullUrlRadio();
    newGatewayService.inputFullUrl(url);
    newGatewayService.inputName(name);
    newGatewayService.clickSave();
    newGatewayService.getTitleContent().should('eq', name);
  });
});
