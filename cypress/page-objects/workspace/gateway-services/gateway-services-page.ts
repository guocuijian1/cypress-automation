import { CommonUtils } from '../common/common-utils';

// Gateway Services 页面对象
export class GatewayServicesPage {
    // "新建网关服务"按钮定位器，文本为 'New gateway service'
    newGatewayServiceButton = "a:contains('New gateway service')";

    // 网关服务页面 URL
    gatewayServicesUrl = "http://localhost:8002/default/services";

    // 点击新建网关服务按钮
    clickNewGatewayServiceBtn() {
        cy.get(this.newGatewayServiceButton).click();
    }

    // 跳转到网关服务页面
    navigateToPage() {
        CommonUtils.navigateToUrl(this.gatewayServicesUrl);
    }
}
