// 导航页面对象，包含各侧边栏菜单的定位器和导航方法
export class NavigationPage {
    // 侧边栏菜单定位器（具体规则后续补充）
    overviewMenu = ".sidebar-content-container nav .sidebar-item-name:contains('Overview')";
    gatewayServicesMenu = ".sidebar-content-container nav .sidebar-item-name:contains('Gateway Services')";
    routesMenu = ".sidebar-content-container nav .sidebar-item-name:contains('Routes')";
    consumersMenu = ".sidebar-content-container nav .sidebar-item-name:contains('Consumers')";
    pluginsMenu = ".sidebar-content-container nav .sidebar-item-name:contains('Plugins')";
    redisConfigurationsMenu = ".sidebar-content-container nav .sidebar-item-name:contains('Redis Configurations')";
    upstreamsMenu = ".sidebar-content-container nav .sidebar-item-name:contains('Upstreams')";

    // 导航方法（后续可根据定位器补充具体实现）
    navigateToOverview() {
        cy.get(this.overviewMenu).click();
    }
    navigateToGatewayServices() {
        cy.get(this.gatewayServicesMenu).click();
    }
    navigateToRoutes() {
        cy.get(this.routesMenu).click();
    }
    navigateToConsumers() {
        cy.get(this.consumersMenu).click();
    }
    navigateToPlugins() {
        cy.get(this.pluginsMenu).click();
    }
    navigateToRedisConfigurations() {
        cy.get(this.redisConfigurationsMenu).click();
    }
    navigateToUpstreams() {
        cy.get(this.upstreamsMenu).click();
    }
}
