import { UpstreamsPage } from "../../page-objects/workspace/upstreams/upstreams-page";
import { NewUpstreamPage } from "../../page-objects/workspace/upstreams/new-upstream-page";
import { UpstreamDetailPage } from "../../page-objects/workspace/upstreams/upstream-detail-page";

describe('Upstreams functions', () => {
    const upstreamsPage = new UpstreamsPage();
    const newUpstreamPage = new NewUpstreamPage();
    const detailPage = new UpstreamDetailPage();

    beforeEach(() => {
        upstreamsPage.navigateToPage();
        upstreamsPage.getTitleContent().then((title: string) => {
            expect(title.trim()).eq('Upstreams');
        })
    });

    it('should create an upstream and then verify the id in detail page', () => {
        const name = 'httpbin.konghq.com';
        upstreamsPage.clickNewUpstreamButton();
        newUpstreamPage.getTitleContent().then(title => {
            expect(title.trim()).to.eq('New Upstream');
        });

        newUpstreamPage.inputName(name);
        newUpstreamPage.clickSaveButton();

        // 跳转到详情页后，断言 ID 存在且非空
        detailPage.getId().should('not.be.empty');
    });
});

