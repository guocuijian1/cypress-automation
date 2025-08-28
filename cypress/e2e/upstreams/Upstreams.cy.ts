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
            // Assert that the title is 'Upstreams'
            expect(title.trim()).eq('Upstreams');
        })
    });

    it('should create an upstream and then verify the id in detail page', () => {
        const name = 'httpbin.konghq.com';
        upstreamsPage.clickNewUpstreamButton();
        newUpstreamPage.getTitleContent().then(title => {
            // Assert that the title is 'New Upstream'
            expect(title.trim()).to.eq('New Upstream');
        });

        newUpstreamPage.inputName(name);
        newUpstreamPage.clickSaveButton();

        // After jumping to the detail page, assert that the ID exists and is not empty
        detailPage.getId().should('not.be.empty');
    });
});
