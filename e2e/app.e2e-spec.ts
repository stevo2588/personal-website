import { CreativelogicPage } from './app.po';

describe('creativelogic App', function() {
  let page: CreativelogicPage;

  beforeEach(() => {
    page = new CreativelogicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
