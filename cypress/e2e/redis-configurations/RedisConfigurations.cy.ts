import { RedisConfigurationsPage } from "../../page-objects/workspace/redis-configurations/redis-configurations-page";
import { NewRedisConfigurationPage } from "../../page-objects/workspace/redis-configurations/new-redis-configuration-page";
import { RedisConfigurationDetailPage } from "../../page-objects/workspace/redis-configurations/redis-configuration-detail-page";

describe('Redis Configurations functions', () => {
    const redisConfigPage = new RedisConfigurationsPage();
    const newRedisConfigPage = new NewRedisConfigurationPage();
    const detailPage = new RedisConfigurationDetailPage();

    beforeEach(() => {
        redisConfigPage.navigateToPage();
        redisConfigPage.getTitleContent().then(title => {
            expect(title.trim()).eq('Redis Configurations');
        });
    });

    it('should create a redis configuration and then verify the id in detail page', () => {
        redisConfigPage.clickNewRedisConfigButton();
        newRedisConfigPage.getTitleContent().then(title => {
            expect(title.trim()).to.eq('New Redis Configuration');
        })

        // 输入配置内容
        const name = `redis-test-${Date.now()}`;
        newRedisConfigPage.inputName(name);
        newRedisConfigPage.clickSaveButton();

        // 跳转到详情页后，断言 ID 存在且非空
        detailPage.getIdValue().should('not.be.empty');
    });
});
