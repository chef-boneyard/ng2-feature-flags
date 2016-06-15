import { Ng2FeatureFlagsPage } from './app.po';

describe('ng2-feature-flags App', function() {
  let page: Ng2FeatureFlagsPage;

  beforeEach(() => {
    page = new Ng2FeatureFlagsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(' works!');
  });
});
