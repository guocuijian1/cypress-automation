import { CommonUtils } from '../../page-objects/workspace/common/common-utils';
import { RoutesPage } from '../../page-objects/workspace/routes/routes-page';
import {NewRoutePage} from "../../page-objects/workspace/routes/new-route-page";
import {RoutesDetailsPage} from "../../page-objects/workspace/routes/routes-details-page";


describe('Routes functions', () => {
  const routesPage = new RoutesPage();
  const newRoutePage = new NewRoutePage();
  const routeDetailPage = new RoutesDetailsPage();
  const random_value = Math.random().toString(36).substring(2, 10);
  const service = 'example_service_' + random_value;
  const name = 'new_route_name' + random_value;

  beforeEach(() => {
    CommonUtils.navigateToUrl('http://localhost:8002/default/routes');
    CommonUtils.getTitle().should('eq', 'Routes');
    // 使用 RestService 的 createService 方法创建网关服务
    const restService = new (require('../../services/rest-service').RestService)('http://localhost:8001');
    restService.createService({
      name: service,
      url: 'https://httpbin.konghq.com',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
  });

  it('should be able to new route from empty list', () => {
    const path = '/mock';
    routesPage.clickNewRouteButton();
    newRoutePage.getTitleContent().should('eq','Create Route');
    newRoutePage.inputName(name);
    newRoutePage.selectService(service);
    newRoutePage.clickBasicRouteRadio();
    newRoutePage.inputPath(path);
    newRoutePage.clickSaveButton();
    routeDetailPage.getTitleContent().should('eq', name);
  });


});
