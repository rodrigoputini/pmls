import { PmlsCheckPage } from './app.po';

describe('pmls-check App', function() {
  let page: PmlsCheckPage;

  beforeEach(() => {
    page = new PmlsCheckPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
